import { existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import ts from 'typescript'

// Execute repository TypeScript in Node tests using the existing compiler.
// Overrides let preview tests use the same Next shims as design-sync.
export function createSourceLoader(overrides = {}) {
  const cache = new Map()
  function load(path) {
    const file = resolve(path)
    if (cache.has(file)) return cache.get(file).exports
    if (file.endsWith('.json')) return JSON.parse(readFileSync(file, 'utf8'))
    const module = { exports: {} }
    cache.set(file, module)
    const require = createRequire(file)
    function importSource(specifier) {
      if (overrides[specifier]) return load(overrides[specifier])
      if (!specifier.startsWith('@/') && !specifier.startsWith('.')) return require(specifier)
      const base = specifier.startsWith('@/')
        ? resolve(specifier.slice(2))
        : resolve(dirname(file), specifier)
      const target = [base, `${base}.ts`, `${base}.tsx`].find((candidate) => existsSync(candidate))
      if (!target) throw new Error(`Cannot resolve ${specifier} from ${file}`)
      return load(target)
    }
    const { outputText } = ts.transpileModule(readFileSync(file, 'utf8'), {
      fileName: file,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    })
    // Input is trusted repository source, never downloaded or user-supplied code.
    new Function('require', 'module', 'exports', outputText)(importSource, module, module.exports)
    return module.exports
  }
  return load
}

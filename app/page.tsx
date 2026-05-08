import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="glass-card w-full max-w-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
        <Image
          src="/iceratops_text_logo.svg"
          alt="Iceratops"
          width={320}
          height={80}
          priority
          className="mx-auto h-auto w-full max-w-xs"
        />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
          Phase 0
        </p>
        <h1 className="font-orbitron mt-4 text-3xl font-bold sm:text-5xl">
          Next.js rebuild in progress
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
          The Iceratops site foundation is moving to Next.js, pnpm, Biome, and Netlify.
        </p>
      </section>
    </main>
  )
}

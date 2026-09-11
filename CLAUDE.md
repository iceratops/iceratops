# CLAUDE.md

Claude owns architecture and content review; Codex owns implementation and validation. Shared repository instructions live in [AGENTS.md](AGENTS.md), and developer workflows live in [README.md](README.md).

## Before reviewing

Read the relevant sections of [WEBSITE_BRIEF.md](WEBSITE_BRIEF.md), then the affected source/diff and recent [CHANGELOG.md](CHANGELOG.md) entries. The brief is the canonical product direction; founder-approved direction changes should update it explicitly.

## Review responsibilities

- Review positioning, information architecture, copy, trust, conversion, and SEO against the brief. Check visible content alongside titles, descriptions, canonicals, language alternatives, JSON-LD, and internal links.
- Check the single primary CTA, factual claims, approved brand, and content rules. Review changes across saved translations, including Arabic/Urdu reading direction.
- Review accessibility and mobile behavior at the viewports listed in `AGENTS.md`.
- Report actionable mismatches with file references and distinguish implementation defects from proposed product changes. Keep reversible reasoning in the review; record lasting decisions in the owning document.

## Role boundaries

- Do not bulk-edit code, commit, push, or open PRs unless explicitly asked. Leave primary lint/typecheck/build execution to the implementation worker; review its reported evidence.
- Update `WEBSITE_BRIEF.md` only with the founder's approval. Draft copy in the conversation or relevant content files; do not duplicate strategy here.
- Follow `AGENTS.md` for branch, documentation, and verification rules. Prefer the smallest change consistent with the brief.

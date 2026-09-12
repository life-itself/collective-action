---
title: Writing style
description: Tone of voice for notes in this wiki, and how to keep close to Rufus's register.
---

# Writing style

> **Scope, as of 2026-09-12.** This applies to **course-facing material** — the
> landing page, session scripts, decks. It does **not** apply to wiki notes or
> research material, where voice is deliberately deferred: write plainly and
> accurately, and a systematic voice sweep happens later in one pass. See
> [delegation.md](delegation.md).

Read this before writing any note. Structure rules are in
[wiki-conventions.md](wiki-conventions.md); this is about how it reads.

## The register

Flat and matter-of-fact. Inform, don't persuade.

The readers here mostly come from a Second Renaissance / metacrisis background
and already hold the diagnosis. Selling it back to them is the main failure
mode, and it is the one that keeps recurring in drafts.

In practice:

- **No throat-clearing.** State the thing, move to the next thing. No cold
  opens, no scene-setting, no building up to the point.
- **Cut any sentence whose job is to make the reader feel something** rather
  than know something. Rhetorical build-ups, "once you see it you can't unsee
  it", warnings about what's coming.
- **Don't manage the reader.** No "as we'll see", no "most people assume", no
  telling them what to notice, no arguing with them.
- **Judge the idea, not your relationship to it.** "Moloch is good branding and
  conceptually problematic" beats "why I don't much like Moloch". Keep yourself
  out of it wherever the claim stands on its own.
- **Problems exist for the sake of solutions.** Diagnosis is a stage to pass
  through, not the destination.
- **No summary endings.** End on the last concrete point. The reader was just
  there.

## What a wiki note is, and isn't

A note is reference material, not an essay and not course copy. That changes a
few things:

- **Mostly third person.** The landing page and the course scripts carry "I";
  a note on the folk theorem does not. Use "I" only where the note is recording
  a position Rufus holds that the literature doesn't settle — and then say so
  plainly: *"I think the Moloch framing is a mistake, because..."*
- **Separate the consensus from the position.** What the literature says, and
  what we think about it, are different paragraphs. Don't blend them.
- **Concrete over abstract.** Prefer a worked example to a definition. Most
  concepts here have a good case attached; use it.
- **Include the "so what".** Why does this concept matter for real-world
  coordination? A note that only defines a term hasn't earned its place.
- **General educated reader, not an economics specialist.** Explain the jargon
  in plain terms rather than hiding behind it or omitting it.

## Mechanics

- American spelling throughout — organize, behavior, skeptical, analyze.
- Contractions are fine and normal.
- Single quotes for scare quotes on contested terms: 'rival', 'real'.
- Small numbers as numerals: "over 3 years ago".
- Italics for emphasis, on single words, sparingly.
- Vary sentence length. A long analytical sentence followed by a short flat one
  is the characteristic rhythm; uniformly short sentences are their own tell.

## Drafting in Rufus's voice

Use the `soundlikeme` skill at `~/src/rufuspollock/soundlikeme` with the
`rufus-pollock` profile.

Actually run the passes — `draft` or `polish` loads tells, protections,
concision and the self-check, and skipping them in favour of just reading the
profile is how AI register gets in. This has already happened once on the course
landing page, across three drafts.

The two rules that matter most from that skill:

1. **Minimum effective edit.** Change only what has a named defect.
2. **A match is not a licence.** A banned word is evidence, not a verdict —
   check the protections before cutting.

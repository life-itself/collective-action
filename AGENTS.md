# Contributing to this knowledge base

This is a markdown-based wiki on collective action and cooperation, published online via [Flowershow](https://flowershow.app) from the `main` branch of this GitHub repo.

## Adding content

- Each concept, topic, or note is a `.md` file in the root or a subfolder
- File name = page title (e.g. `Prisoner's Dilemma.md`)
- Use `[[Wiki Links]]` to link between notes — Flowershow resolves these automatically
- Keep notes focused: one concept per file, link out rather than duplicating

## Frontmatter

Not required, but useful:

```yaml
---
title: Prisoner's Dilemma
description: A two-player game where mutual defection is the only Nash equilibrium.
---
```

## Style

- Write for a general educated reader, not an economics specialist
- Prefer concrete examples over abstract definitions
- Include the "so what" — why does this concept matter for real-world coordination?

### Register

Flat and matter-of-fact. Inform, don't persuade. The audience comes from a
Second Renaissance / metacrisis background and mostly already holds the
diagnosis, so selling it back to them is the main failure mode.

What that means in practice:

- **No throat-clearing or cold opens.** State the thing, move to the next thing.
- **Cut any sentence whose job is to make the reader feel something** rather than
  know something. Rhetorical build-ups, "once you see it you can't unsee it",
  scene-setting, warnings about what you're signing up for.
- **Don't manage the reader.** No "most people reading this will already agree",
  no telling them what to notice, no arguing with them.
- **Judge the idea, not your relationship to it.** "Moloch is great branding but
  conceptually problematic" over "why I don't much like it". Keep yourself out of
  it where the claim stands on its own.
- **Problems exist for the sake of solutions.** Diagnosis is a stage to pass
  through, not the destination.
- **Bullets can be looser than prose.** A one-word bullet is fine in a working
  outline; don't inflate it into an explanatory sentence.
- **Don't anchor material on a single artifact** — a film, a book, one case.
  Cases go in the reading; the argument shouldn't depend on them.
- **Widen the door.** Describe who might be interested, rather than filtering for
  who qualifies.

Reference for the target register: the [Developmental Spaces course
page](https://news.lifeitself.org/p/introduction-to-deliberately-developmental).

For drafting in Rufus's voice specifically, use the `soundlikeme` skill at
`~/src/rufuspollock/soundlikeme` with the `rufus-pollock` profile — and actually
run the tells/protections/self-check pass, not just the profile.

## Publishing

Changes merged to `main` are published automatically via Flowershow.

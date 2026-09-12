---
title: Wiki conventions
description: Note types, tags, naming and linking rules for this knowledge base.
---

# Wiki conventions

How notes are structured here. Read this before writing any note, and read
[writing-style.md](writing-style.md) for tone.

## Where things live

```
/                 wiki, published — atomic notes, module master notes, MOCs
course/           course material — arc.md, landing.md, scripts/, decks/
docs/             internal docs like this one — not published
raw/              dictation and private notes — not published
```

Scripts and decks for the course stay in `course/` and never enter the wiki.
The wiki holds concepts; the course holds the material made from them.

## Three note types

### Atomic notes

The default. One concept per file, in the root. Filename is the title.

```
Stag hunt.md
Folk theorem.md
Selective incentives.md
Ilahita.md
```

Keep them focused. If a note is covering two concepts, split it and link. Link
out rather than duplicating — a concept explained in two places will drift.

Length is whatever the concept needs, usually 200-600 words. A note that has
grown past a thousand words is usually two notes.

### Module master notes

One per course module, `tags: [module]` in frontmatter. It carries the module's
argument in prose and links out to the atomic notes for the concepts it uses.
The concepts themselves are not explained here.

```yaml
---
title: Olson on group size
description: Why small groups provide public goods and large ones don't.
tags: [module]
---
```

### Maps of content

Thematic indexes, `tags: [moc]`. They draw together notes on a theme with a
sentence of orientation for each, so a reader arriving at the theme knows where
to start and in what order.

Organised by theme, not by course session — the themes outlive the course.
Current set:

- `Game theory basics.md`
- `Governing the commons.md`
- `Cooperation at scale.md`
- `Cultural evolution.md`
- `Collective action in practice.md`

## Frontmatter

Optional but preferred:

```yaml
---
title: Prisoner's Dilemma
description: A two-player game where mutual defection is the only Nash equilibrium.
tags: [module]
---
```

`title` should match the filename. `description` is one sentence, used in
search and previews.

## Linking

Use `[[Wiki Links]]`. Flowershow resolves them, and backlinks are enabled, so
linking is how notes find each other.

Link liberally. A `[[link]]` to a note that doesn't exist yet is not an error —
it marks a note worth writing.

Every atomic note should be reachable: linked from at least one module master
note or one map of content. An unlinked note is invisible.

## Sources

Cite properly — author, title, year, and a link where one exists. Never
attribute a claim vaguely ("studies show", "researchers argue"). If the source
can't be named, the claim doesn't go in.

Quotes are quoted and attributed. Paraphrase is marked as paraphrase.

## Definition of done

A research or note-writing task is done when:

1. The named notes exist with correct frontmatter.
2. They are linked from the relevant module master note.
3. That master note is linked from the relevant map of content.
4. Sources are cited.
5. The tone matches [writing-style.md](writing-style.md).

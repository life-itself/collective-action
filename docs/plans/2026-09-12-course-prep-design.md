---
title: Course prep — work design
description: How the research and preparation work for the collective action course is organised in beads.
date: 2026-09-12
---

# Course prep: design of the work

Design for planning and delegating the research and preparation behind the
[collective action course](../../course/arc.md). Agreed 2026-09-12.

## What this is for

The course needs a lot of research — examples, media, reading — and most of it
is delegatable to agents or spread across sessions. This describes how that work
is cut up in beads so it can be picked up cold.

## Structural decisions

**Modules are the backbone. Sessions are metadata.**

A module is the unit of material: "Olson on group size", "Ilahita", "The
reframe". Sessions are the six live slots, and which module sits in which
session changes often — agriculture has already moved from session 1 to session
5, and the Moloch critique has been in three places. So sessions are `session-N`
**labels** on module beads, not parents. Re-ordering the course is a label edit.

Session beads exist, but only as somewhere to hang session-level decisions
("session 1 is thin on material", "does war open or close session 1"). No module
hangs off them.

**Four epics:**

| Epic | Holds |
|---|---|
| Course modules | ~32 module beads, each labeled with a session |
| Example bank | candidate lists → selection → per-example research → media |
| Reading & sources | one bead per thinker or primary source |
| Course infrastructure | conventions, templates, publishing, tooling |

**Media nests under examples, not under modules, and not on its own.**

Media can't be scoped before the examples exist, and one example serves several
modules. So the example hunt is two-phase, using beads' spawner/fanout gate:

1. Spawner beads compile candidate lists — 20-25 candidates each, far more than
   will be used.
2. A selection bead (`waits-for: all-children`) cuts the list down. **This is a
   human decision, not an agent's.**
3. Only then are per-example research beads created, each with a media child.

The process can also invert: strong media found during the hunt can promote
something into being an example. That is handled by a new candidate bead linked
`discovered-from` the media bead that found it.

## Where things live

```
/                 wiki, published — atomic notes, module master notes, MOCs
course/           course material — arc.md, landing.md, scripts/, decks/
docs/             longer internal docs referenced from AGENTS.md — not published
raw/              dictation and private notes — not published
```

`arc.md` is published. `AGENTS.md`, `docs/` and `raw/` are excluded.

Three note types in the wiki:

- **Atomic notes** — one concept per file. `Stag hunt.md`, `Folk theorem.md`.
- **Module master notes** — `tags: [module]`, one per module, linking out to the
  atomic notes. The argument in prose; the concepts live elsewhere.
- **Maps of content** — `tags: [moc]`, drawing notes together by theme rather
  than by session. These outlive the course; sessions won't.

Scripts and decks stay in `course/` and never enter the wiki.

## What makes a bead delegatable

Every research bead names the files it must produce. A bead is done when those
files exist, are linked from the right master note, and that master note is
linked from the right map of content. This is checkable by whoever picks it up,
which is the point.

Two documents are blockers for all delegated work, because agent-written notes
in thirty different registers are worse than no notes:

- `docs/wiki-conventions.md` — note types, tags, linking, naming
- `docs/writing-style.md` — tone of voice, and how to use the `soundlikeme` skill

## Module pipeline

Each module bead gets the same children, so production is uniform:

```
MODULE  Olson on group size                    [label: session-3]
  ├─ research      gather sources, examples, the argument
  ├─ notes         write the wiki notes named in the bead
  ├─ script        course/scripts/olson.md          (sessions 1-2 only for now)
  └─ deck          course/decks/olson/              (sessions 1-2 only for now)
```

Research and notes beads for every module. Script and deck beads only for
sessions 1 and 2 until the module template has been proven on one module
end to end.

## Order of work

1. **Infrastructure.** Publishing hygiene, the two convention documents, the
   module production template.
2. **Backbone.** Epics, session beads, every module bead with a one-line outline
   and a session label.
3. **One test slice.** The session 1 example hunt — thinnest material, most
   delegatable, and it exercises the two-phase spawner pattern. Run it before
   scaling, to learn whether a definition-of-done is specific enough for an
   agent to satisfy and whether notes come back in the right voice.
4. **One module end to end**, research through script, to fix the template.
5. **Scale** — remaining spawners, per-module research, reading list.

Deliberately not planned in detail: sessions 3-6 depth, and anything downstream
of the example selection. We expect to learn enough from the first slice to want
to change it.

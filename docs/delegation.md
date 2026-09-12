---
title: Delegation
description: Which model runs which bead, and what a bead must produce.
---

# Delegation

Which agent picks up which bead. Labels on the bead carry this, so it does not
have to be remembered.

## Tiers

| Label | Model | What it covers |
|---|---|---|
| `agent:sonnet` | Sonnet, medium effort | Gather, verify, compile to a fixed format. Research beads, note-writing beads, example hunts, reading beads. The bulk of the graph. |
| `agent:opus` | Opus | Course-facing material in Rufus's voice, and work that makes an argument rather than assembling one. Scripts, decks, the module template, the voice sweep. |
| `agent:human` | Rufus | Selection and decisions. |

Container beads — the four epics, the six session beads, the 33 module parents —
carry no agent label. They hold no work; their children do.

**Why notes beads are Sonnet.** Voice is deliberately deferred (below), which
turns note-writing into gather-and-format. That is Sonnet work.

**Why scripts and decks are Opus.** That material is delivered under Rufus's
name in a live session. Voice matters there and cannot be swept later.

**What the bigger model bought in practice.** The six candidate hunts ran on
Opus, and most of what they did — search, verify, fill a format — Sonnet would
have done. Three things came out of those runs that were judgment rather than
retrieval: the argument that Montreal only teaches as a diagnostic result rather
than a template; the rejection of a widely-repeated musk ox statistic on
provenance grounds; and grading footage honestly rather than claiming it. Expect
to lose some of that on a smaller model, and to catch it in review instead.

## Voice is deferred

**Do not spend effort matching Rufus's voice when writing wiki notes or research
material.** Write plainly and accurately. A systematic voice sweep happens later
in one pass, which is cheaper and more consistent than thirty agents each
approximating a register.

Notes beads carry `voice:unreviewed`. The sweep flips them to `voice:reviewed`.

[writing-style.md](writing-style.md) still applies to course-facing material —
the landing page, scripts, decks — where there is no later sweep.

## What a note must contain

The binding requirement, in place of voice:

- Every substantive claim carries a source.
- Each note includes at least one **direct excerpt as a markdown blockquote**,
  attributed. The author's own words, not a paraphrase.

Excerpts are the point. A note that paraphrases Ostrom is worth much less than
one that quotes her and says where it is from.

### Quoting safely

- Keep excerpts short — a sentence or two, enough to carry the author's own
  formulation. Never reproduce substantial portions of an in-copyright work.
- Always attribute: author, work, year, page or section where known.
- Public-domain sources can be quoted more freely, and several of the course's
  central texts are public domain — Hobbes, Thucydides, Plato, Xenophon, Adam
  Smith, Hume. Prefer these where a longer passage would help.
- For living authors and recent work — Ostrom, Henrich, Turchin, Norenzayan,
  Schelling — quote briefly and cite precisely.
- Never quote from a source you have not read directly. If the quote comes from
  someone else quoting it, say so.

## The prompt shape that works

From the six hunts that ran successfully, the instructions that did the most:

1. **Name the output file and the entry format exactly.** Freeform research
   comes back unusable.
2. **"Say 'none known' rather than guessing."** This is what produced graded,
   checkable media claims instead of confabulated ones.
3. **"Flag what is contested and say what the dispute is."** Roughly a quarter
   of all entries came back with a caveat that would otherwise have reached a
   slide unchallenged.
4. **"Do not cut the list down."** Over-generation is the job; selection is
   Rufus's.
5. **Point at `docs/wiki-conventions.md` first.**

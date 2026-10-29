---
title: How to research
description: How research for this knowledge base is done — brief first, primary texts read in full, page-cited excerpts, independent citation check.
---

# How to research

Status: first draft, 2026-10-29, for Rufus's review.

How a research task runs here, from brief to finished wiki pages. Read
[wiki-conventions.md](wiki-conventions.md) for note structure and
[delegation.md](delegation.md) for which model does what. This doc doesn't
repeat them.

The short version:

1. Write a brief with objectives and key results. Get Rufus's sign-off.
2. Read good primary texts and textbooks, in full, from the local library.
3. Take page-cited notes. Say which layer each claim sits in and how strong it is.
4. Have an independent subagent check the citations.
5. Write top-level wiki pages. File the leftovers as Beads.

## 1. Brief first

No research starts without a signed-off brief. Briefs go in
`docs/plans/YYYY-MM-DD-<slug>.md`. Example:
[2026-10-29-typology-brief.md](plans/2026-10-29-typology-brief.md).

A brief has:

- **Question.** One governing question, and the course question it serves.
- **Question tree.** Three to six branches. Each branch becomes a section of
  the output. Keep "how solid is it?" as its own branch, separate from "what
  does it say" — merged, the output reads as advocacy.
- **Sources.** The core reading, by name and chapter, and what is already in
  Zotero versus what Rufus needs to add or sync (see section 3).
- **Objectives and key results.** Each KR is checkable: a named file exists, a
  test passes, a decision is posed. "Understand X" is not a KR.
- **Scope.** In, out, and constraints (for example, no edits to scripts).
- **Outputs.** File names of the pages to be written.
- **Done-check.** How anyone can tell the work is finished (section 7).
- **Status line.** Draft / awaiting sign-off / signed off, with the date.

Before showing Rufus, have a subagent critique the brief cold and apply its
points with judgment. Then one round of sign-off. After sign-off, run to the
done-check without checking in, unless the reading changes the question.

Large research jobs come in two passes: a map and recommendation that ends in a
decision for Rufus, then the write-up once he has decided.

## 2. Source hierarchy

Start from good texts read in full. Scanning the web produces a summary of
summaries and repeats whatever the most-quoted secondary source got wrong.

In order of preference:

1. **Primary texts.** The original book or paper making the claim — Olson
   1965, Ostrom 1990, Schelling 1960. Read the relevant chapters in full, not
   the abstract.
2. **Canonical textbooks.** For the standard statement of a result and its
   accepted name — Osborne and Rubinstein, Sandler, Dixit and Skeath,
   Mas-Colell et al. Use them to check that a primary text is being read the
   way the field reads it.
3. **Review and survey articles.** Kollock 1998 and similar. Good for mapping
   a literature and finding what to read; not a substitute for reading it.
4. **Secondary summaries.** Encyclopedia entries (the Stanford Encyclopedia of
   Philosophy is the best of these), lecture notes, popular books.
5. **The web.** For finding page references, checking a date, locating a PDF.
   Never the main source for a claim.

Rules that follow:

- Cite the source you actually read. If you only have a claim second-hand,
  cite it as "X, quoted in Y" or mark it **[?]**.
- If the right text isn't available, say so and ask for it. Don't fall back to
  the web quietly.
- Prefer a public-domain primary text where one exists (Hobbes, Hume, Smith):
  it can be quoted more freely.

## 3. Using Zotero

Rufus's library is local: `~/Zotero/zotero.sqlite` (about 3,500 items) with
files in `~/Zotero/storage/<attachmentKey>/`. Zotero locks the live database,
so always query a copy.

```bash
cp -f ~/Zotero/zotero.sqlite "$SCRATCH/z.sqlite"
sqlite3 "$SCRATCH/z.sqlite" "
SELECT i.key, v.value AS title, att.key AS att_key, ia.path
FROM items i
JOIN itemData d ON d.itemID = i.itemID
JOIN fields f ON f.fieldID = d.fieldID AND f.fieldName = 'title'
JOIN itemDataValues v ON v.valueID = d.valueID
LEFT JOIN itemAttachments ia ON ia.parentItemID = i.itemID
LEFT JOIN items att ON att.itemID = ia.itemID
WHERE v.value LIKE '%collective action%';"
```

`ia.path` looks like `storage:<filename>`; the file is at
`~/Zotero/storage/<att_key>/<filename>`. Search authors through the
`creators` and `itemCreators` tables the same way.

What you'll find, and what it means:

- **File on disk** (PDF or EPUB): usable. Extract text with `pdftotext -layout`
  (keeps page breaks, so pages can be cited) or `pandoc` for EPUB.
- **Only a hidden `.zotero-ft-cache`**: the PDF isn't synced to this machine.
  The cache is Zotero's extracted full text, fine for searching and finding a
  passage, but it has no page numbers. Don't cite pages from it; ask for the
  file.
- **Record with no attachment, or no record**: not available.

Check with `find` that the file exists; a database record proves nothing.
Write the result into the brief as a short table (have / text-cache only /
missing) and ask Rufus to sync or add what's missing **before** reading
starts. One consolidated ask, not a trickle.

An alternative is a Zotero MCP server against the local Zotero API (see
sources below). Not set up here; the sqlite copy is enough for now.

**Texts you'll search a lot, especially EPUBs, get converted to Markdown** in
the private library repo, `~/src/life-itself/library`, following its
conventions (`books/<slug>/` with `raw/`, `markdown/<slug>.md` and
`markdown/NOTES.md`; see that repo's `AGENTS.md`). Keep page markers where the
source has pages, so citations can carry them. Reference the Markdown path from
the working notes. Book text stays in that private repo; only short excerpts
reach the wiki.

## 4. Reading and notes

Read the chapter, then take notes. Working notes go in the brief's companion
file or a scratch file, not the wiki. For each source:

- **Full citation**: author, title, year, edition, chapter.
- **The claim in one or two sentences**, in your words.
- **A short direct excerpt with page number.** This is what the wiki page will
  quote. Never quote from memory, and never quote a passage you haven't seen in
  the text itself.
- **The source's own terms** for things, and other names used elsewhere.
  Typologies especially use different words for the same structure.

Then classify each claim two ways.

**Layer.** Results, theory and worldview get blurred, especially by popular
authors.

- *Result*: a theorem, an experimental finding, a documented case.
- *Theory*: a model or explanation built on results.
- *Worldview*: a framing or stance the theory is used to support.

**Evidence tier.**

- *Solid*: proved, or replicated independently, or the textbook consensus.
- *Real but limited*: true, but smaller or narrower than the headline.
- *Weak or contested*: say what the dispute is and who is on each side.

Mark anything not checked against the source text **[?]**. A **[?]** is
better than a confident error; it tells the next reader where to look.

Keep the literature and our position apart. What a source says and what we
think of it go in separate paragraphs, per
[writing-style.md](writing-style.md).

Instructions that work for delegated research (from
[delegation.md](delegation.md)): name the output file and format exactly; "say
'none known' rather than guessing"; "flag what is contested and say what the
dispute is"; "do not cut the list down".

## 5. Citation check by an independent subagent

Whoever wrote the notes doesn't verify them. Before the work is called done,
hand a fresh subagent the list of claims, with no access to the draft's
reasoning:

- each citation (author, title, year, page) and the claim attached to it;
- each direct excerpt and its page;
- each "X showed Y" or "X classifies Z as W".

Ask it to return, for each: **CONFIRMED / WRONG / OVERSTATED / UNVERIFIED**,
with where it checked (the local file and page, or a URL). It edits nothing.

Check against the local text first; the web only where no local copy exists,
and record which. The usual failure is overclaiming, not invention: a finding
described as broader than it is, a typology attributed with axes the author
didn't use, a theorem stated without its conditions. Fix or soften those; mark
anything still unverified **[?]**.

Record the depth of the check in the page's status or the brief, e.g.
"Excerpts checked against the PDFs; Kollock 1998 against the abstract only."

## 6. Where outputs go

- **Brief and working notes**: `docs/plans/` (not published).
- **Research outputs**: top-level wiki pages, Wikipedia style. One concept per
  file, file name = title (`Volunteer's dilemma.md`). A hub page with
  `tags: [moc]` where a topic has several notes. No `research/` subfolder for
  wiki content.
- **Bibliography**: sources a pass actually used go into the annotated
  bibliography page for the topic (e.g. `Collective action bibliography.md`),
  one or two lines each on what the source is and what it's good for.
- **Links**: every new page is linked from a module master note or a map of
  content ([wiki-conventions.md](wiki-conventions.md)). Red links are fine;
  each one that matters becomes a Bead.
- **Tasks and follow-ups**: Beads only (`bd create`, ordered with `bd dep`).
  No TODO lists in markdown.
- **Decisions for Rufus**: a short decision section at the end of the pass-1
  output, answerable in one line, saying what each answer means downstream.
- Nothing is committed or pushed without Rufus's go-ahead.

## 7. Done-check

A research task is done when:

1. Every KR in the brief is met, or explicitly reported as not met and why.
2. Each source summarised was read in the text, at the chapter level or better,
   and is cited with pages.
3. Every page carries at least one attributed, page-cited excerpt.
4. Each substantive claim says its layer where that's ambiguous, and contested
   claims say what the dispute is.
5. The independent citation check has run; its WRONG and OVERSTATED items are
   fixed; remaining gaps are marked **[?]**; the depth of the check is recorded.
6. Pages meet the definition of done in
   [wiki-conventions.md](wiki-conventions.md) (frontmatter, linked from a
   master note or MOC).
7. Follow-ups are filed as Beads, and the brief's Bead is updated.

## Sources and skills borrowed from

- `research-note` skill — question tree, "how solid is it?" as its own branch,
  results / theory / worldview layers, evidence tiers, fact-check by subagent
  with CONFIRMED / WRONG / UNVERIFIED, recording check depth:
  `~/src/life-itself/skills/skills/research-note/SKILL.md`
- `anthropic-skills:deep-research` (built-in Claude skill) — coordinating
  research subagents across sources; useful for the mapping pass, but it is
  web-first, so constrain it to the source hierarchy above.
- `project-planning` skill — situation, complication, question and issue tree
  before work starts: `~/.claude/skills/project-planning/`
- `superpowers:verification-before-completion` — evidence before claiming
  done: `~/.claude/plugins/cache/claude-plugins-official/superpowers/7.0.0/skills/verification-before-completion/SKILL.md`
- Delegation prompt shape and quoting rules: [delegation.md](delegation.md)
- Example brief: [plans/2026-10-29-typology-brief.md](plans/2026-10-29-typology-brief.md)
- Zotero check that established the sqlite method:
  `~/Library/Application Support/Claude/side-session-notes/local_89ef60ab-f1a5-4436-a0d1-c3aa1b50c20a/zotero-typology-sources.md`
- Community literature-review skills that verify every citation before
  inclusion: [K-Dense-AI literature-review](https://claudemarketplaces.com/skills/k-dense-ai/scientific-agent-skills/literature-review),
  [flonat/claude-research literature](https://www.skills.sh/flonat/claude-research/literature)
  (not reviewed in depth).
- Zotero MCP servers, for local full-text access through the Zotero API:
  [kujenga/zotero-mcp](https://glama.ai/mcp/servers/@kujenga/zotero-mcp)
  (not installed or tested).

---
title: Working notes — patterns of collective action (pass 1)
description: Pass-1 working notes for the typology brief (course-wse.33). Payoff matrices and equilibria, the "same or different?" answer, recommended top level, source typologies, finer axes, second layer, case test, volunteer verdict, decision options.
---

# Working notes — patterns of collective action (pass 1)

Brief: [2026-10-29-typology-brief.md](2026-10-29-typology-brief.md). Status: pass 1, 29 Oct. Citation-checked by an independent subagent ([2026-10-29-typology-citation-check.md](2026-10-29-typology-citation-check.md): 70 claims; 53 confirmed, 1 wrong and 9 overstated, all fixed below; 7 unverified and still **[?]**). Checked page by page against the local Markdown for Ostrom, O&R, Laffont and Martimort, and Hess and Ostrom; Taylor, Heckathorn and Macy and Flache against web copies; Kollock, Diekmann, Hirshleifer, Rapoport and Guyer against abstracts or secondary sources only.

**Recheck (30 Oct).** The [?] items were rechecked against newly converted local texts: Olson 1965 (5th printing, 1975; OCR scan), Sandler 1992 and 2004, Dixit, Skeath and Reiley 4th ed., and Schelling 1978 ch. 7 (page numbers from a Google Books map, not checked against print: cited as "GB-map p."). What changed:

- **Sandler's aggregation mapping corrected.** Sandler does *not* map best shot to chicken. He calls the best-shot game a "Coordination game" with a structure "reminiscent of the Battle of the Sexes" (1992, p. 41; 2004, p. 66 and Table 3.2, p. 68). Its payoffs are the volunteer's ordering (T > R = S > P), so "best shot → volunteer" holds structurally, but not under Sandler's label. Chicken in Sandler comes from *summation* when doing nothing is disastrous (1992, pp. 40–41; 2004, p. 62). Weakest link → assurance (1992, pp. 43–44; 2004, pp. 62–64). Threshold → assurance (2004, p. 64); Sandler does not say "volunteer above the threshold" (that part rests on Taylor's G3 and Schelling's "sufficiency" curve).
- **Olson confirmed** with pages: privileged / intermediate / latent, pp. 49–51; selective incentives, p. 51; "exploitation" of the great by the small, pp. 3, 29, 35. His n. 70 (p. 50) describes a privileged group failing because each waits for the others: the volunteer reading.
- **Dixit, Skeath and Reiley** (4th ed., not McAdams) confirmed: collective action comes in three forms, PD, chicken and assurance (p. 418), drawn as n-person payoff curves (pp. 425–430). Their "Help!" section (pp. 454–457) gives the volunteer's-dilemma model and group-size result with page numbers (after Palfrey and Rosenthal 1984). Two qualifications to KR1.2: large-group public-good provision "almost always" ends up as a PD (p. 430); and the allocation fix applies to chicken only when the social optimum has some people shirking (their "chicken II"); otherwise chicken is fixed like a PD (p. 449).
- **Schelling ch. 7** confirmed in substance, but he does not use the words "chicken" or "assurance"; Dixit makes that mapping and cites his ch. 7 (Dixit p. 431, n. 3). Schelling: the PD is a "truncated dual equilibrium" (GB-map pp. 233–234).
- **Settled second-hand:** R. Hardin 1982 equating collective action with the PD (quoted and rejected by Sandler 1992, p. 44); Holmström's team free-riding (Sandler 1992, p. 125); Montreal as a privileged-group case (Sandler 2004, pp. 217–218).
- Still [?]: Kollock, Diekmann (the original), Heckathorn beyond pp. 256–259, Taylor beyond the pages read, Ullmann-Margalit, Marwell and Oliver, Alchian–Demsetz first-hand, and the papers listed in the Sources table.

Conventions:

- Page numbers are printed pages. "O&R" = Osborne and Rubinstein 1994 (2006 printing). "Ostrom" = *Governing the Commons* 1990 (Canto pagination matches the original).
- **[?]** = claim about a source not read in this pass. Standard results I am confident of are stated without a source tag, but any attribution to a named book is [?] unless a page is given.
- Payoffs are ordinal: 4 best, 1 worst, written (row, column). C = cooperate / contribute / hold back, D = defect.
- Symmetric 2×2 notation: R = both cooperate, T = temptation (I defect, you cooperate), S = sucker (I cooperate, you defect), P = both defect.

---

## KR1.1 Payoff matrices and equilibria

### The two ingredients: greed and fear

Every symmetric 2×2 game where mutual cooperation beats mutual defection (R > P) is fixed by two yes/no questions:

- **Greed:** if you cooperate, do I do better defecting? (T > R)
- **Fear:** if you defect, do I do worse cooperating? (P > S)

| | Fear (P > S) | No fear (S > P) |
|---|---|---|
| **Greed (T > R)** | Prisoner's dilemma (battle line) | Chicken / volunteer |
| **No greed (R > T)** | Stag hunt (assurance) | Harmony (no problem) |

This is exhaustive for symmetric games with R > P: the 2×2 of yes/no answers covers all 12 strict orderings (1 + 3 + 3 + 5 across the four cells). The terms "greed" and "fear" for T − R and P − S are used by Macy and Flache 2002, *PNAS* 99 suppl. 3 (checked) — the classification itself is arithmetic and can be checked from the matrices below. Orderings with P > R (mutual defection better for both) are not dilemmas; deadlock is the main one.

The same split is in Heckathorn 1996, pp. 258–259, Table 2 (read): starting from the PD, reversing the two *top* payoffs (R > T) gives the assurance game; reversing the two *bottom* payoffs (S > P) gives chicken; reversing both gives the "privileged game" (= harmony); reversing the two middle payoffs (P > R) gives the "altruist's dilemma" (= deadlock).

### Prisoner's dilemma — the battle line

| | You C | You D |
|---|---|---|
| **Me C** | 3, 3 | 1, 4 |
| **Me D** | 4, 1 | 2, 2 |

- T > R > P > S. Greed and fear.
- D strictly dominates C. **One pure equilibrium: (D, D).** No mixed equilibrium (dominance rules it out).
- (C, C) is better for both than the equilibrium.
- O&R p. 16–17, Example 16.2, Figure 17.1 (read): "unique Nash equilibrium (Confess, Confess)"; O&R describe each player as having an incentive to be a "free rider".

### Stag hunt — assurance

| | You stag | You hare |
|---|---|---|
| **Me stag** | 4, 4 | 1, 3 |
| **Me hare** | 3, 1 | 2, 2 |

- R > T > P > S. Fear, no greed.
- **Two pure equilibria: (stag, stag), (hare, hare).** The first is better for both.
- Mixed equilibrium with these numbers: each hunts stag with probability 1/2 (stag pays 3p + 1, hare pays p + 2). It is unstable: any shift in beliefs tips play to one pure equilibrium.
- Which equilibrium is "risk-dominant" depends on cardinal payoffs. With chapter 1's appendix numbers (4,4 / 0,3 / 3,0 / 3,3), hare is risk-dominant (losing 3 by hunting stag alone vs losing 1 by switching to hare), and the mixed equilibrium is stag with probability 3/4. Risk dominance is Harsanyi and Selten 1988 **[?]**.
- O&R's Example 16.1, the coordination game with a better and worse concert (p. 16, read), is the no-risk limit: "the notion of Nash equilibrium does not rule out a steady state in which the outcome is the inferior equilibrium".

### Chicken (Hawk–Dove)

| | You swerve (C) | You straight (D) |
|---|---|---|
| **Me swerve** | 3, 3 | 2, 4 |
| **Me straight** | 4, 2 | 1, 1 |

- T > R > S > P. Greed, no fear.
- **Two pure equilibria: (C, D) and (D, C)** — in each, one player gives way.
- **One mixed equilibrium:** each swerves with probability 1/2 (swerve pays p + 2, straight pays 3p + 1). The crash (D, D) then happens with probability 1/4.
- O&R p. 16–17, Example 16.3, Figure 17.2 (read): Hawk–Dove has "two Nash equilibria, (Dove, Hawk) and (Hawk, Dove), corresponding to two different conventions about the player who yields". O&R p. 30 (read): "Hawk–Dove is known also as 'Chicken'". The evolutionary version has a mixed ESS when c > 1 (O&R p. 50, Example 49.2, read).
- The dynamic form is the war of attrition: each chooses when to concede; O&R p. 18, Example 18.4 and Exercise 18.5 (read): in the pure-strategy Nash equilibria one player concedes immediately — but in the symmetric mixed equilibrium both wait and waste **[?]** (standard; Maynard Smith 1974; Bliss and Nalebuff 1984 for the volunteer reading). Dixit, Skeath and Reiley p. 422 note that chicken "may lead to a new dynamic game in which each waits for the other to build", but do not analyse the war of attrition; still [?].

### Volunteer's dilemma (n players)

Diekmann's set-up **[?]** (Diekmann 1985, *J. Conflict Resolution*; original still not read). The same model, with the same mixed equilibrium and group-size result, is in Dixit, Skeath and Reiley pp. 455–457 ("Help!": A Game of Chicken with Mixed Strategies), based on Palfrey and Rosenthal 1984 and not on Diekmann: N people, benefit B, cost C < B, only one needed; P = (C/B)^(1/(N−1)); probability nobody helps (C/B)^(N/(N−1)), rising towards C/B. Here: n players; if at least one volunteers, everyone gets benefit U; a volunteer also pays cost K (0 < K < U); if nobody volunteers, everyone gets 0.

Two-player version (U = 4, K = 1):

| | You volunteer | You wait |
|---|---|---|
| **Me volunteer** | 3, 3 | 3, 4 |
| **Me wait** | 4, 3 | 0, 0 |

- T > R = S > P. Chicken with a tie: volunteering costs the same whether or not the other also volunteers.
- **Pure equilibria: exactly one volunteer** (n of them in the n-player game). Nobody volunteering is not an equilibrium.
- **Symmetric mixed equilibrium:** each waits with probability q where U − K = U(1 − q^(n−1)), so q = (K/U)^(1/(n−1)). Probability nobody volunteers = q^n = (K/U)^(n/(n−1)), which *rises* with n towards K/U. Each person is less likely to act, and the group as a whole is less likely to get anyone, as the group grows. This is the formal match to the bystander effect (Darley and Latané 1968 **[?]**). Dixit, Skeath and Reiley p. 457: "the larger the group, the less likely is help to be given at all", though it "levels off at a positive value"; they report the crowd-size experiments second-hand via Sabini (p. 455).
- With U = 4, K = 1, n = 2: q = 1/4, nobody acts with probability 1/16. With n = 10: q ≈ 0.86, nobody acts with probability ≈ 0.21.

### Pure coordination

| | You A | You B |
|---|---|---|
| **Me A** | 1, 1 | 0, 0 |
| **Me B** | 0, 0 | 1, 1 |

- No conflict at all: the only problem is matching.
- Two pure equilibria (A, A), (B, B); mixed: each picks A with probability 1/2.
- If one convention is better (O&R's Mozart/Mahler, 2,2 vs 1,1, p. 16): mixed equilibrium is Mozart with probability 1/3.
- Fixes: a focal point, a convention, a signal (Schelling 1960 **[?]**; Lewis 1969 **[?]**).

### Battle of the sexes (Bach or Stravinsky)

| | You Bach | You Stravinsky |
|---|---|---|
| **Me Bach** | 2, 1 | 0, 0 |
| **Me Stravinsky** | 0, 0 | 1, 2 |

- Both want to match; each prefers a different match.
- Two pure equilibria (Bach, Bach), (Stravinsky, Stravinsky); mixed equilibrium ((2/3, 1/3), (1/3, 2/3)) with expected payoffs (2/3, 2/3), worse for both than either pure equilibrium. O&R p. 15–16, Example 15.3 and p. 34–35, Example 34.1; payoffs p. 46, Example 46.1 (read).
- Relabel the moves as "insist on mine" / "give way" and BoS has the same shape as chicken: two asymmetric equilibria, and a fight over which. The difference is that in chicken the mutual-insist cell is the disaster, while in BoS both mismatches are bad.
- O&R p. 44 (read): with a public random signal (a coin both see), there is a correlated equilibrium that alternates between the two — the formal version of taking turns.

### Deadlock and harmony (non-dilemmas, for completeness)

Deadlock (Heckathorn's "altruist's dilemma", p. 258–259):

| | You C | You D |
|---|---|---|
| **Me C** | 2, 2 | 1, 4 |
| **Me D** | 4, 1 | 3, 3 |

- T > P > R > S. D dominates and (D, D) is what both prefer. No collective action problem: cooperating would be a mistake.

Harmony (Heckathorn's "privileged game", p. 259; Olson's privileged group):

| | You C | You D |
|---|---|---|
| **Me C** | 4, 4 | 2, 3 |
| **Me D** | 3, 2 | 1, 1 |

- R > T > S > P. C dominates. Heckathorn p. 259: "Because individual and collective rationality coincide perfectly, there is no social dilemma."

### Completeness against the 2×2 classification

- Rapoport and Guyer 1966 list 78 strictly ordinal 2×2 games; Robinson and Goforth 2005 arrange 144 games (78 up to swapping the players) in a "periodic table" **[?]** (neither read). Heckathorn 1996 uses the Rapoport–Guyer numbers (assurance #61, privileged #6, altruist's dilemma #9, chicken #66), p. 258–259 (read).
- For *symmetric* games with strict preferences, the greed/fear 2×2 covers every ordering with R > P; the orderings with P > R (deadlock among them) are not dilemmas. The asymmetric games add mixed cases (e.g. Taylor 1987, p. 39, Figure 5: "PD for Row, Chicken for Column" — read) and pure-conflict games (matching pennies, O&R p. 17), which aren't collective action problems.
- Pure coordination and BoS are not in the symmetric C/D frame because their strategies are "which convention", not "contribute or not". They sit naturally as the no-greed, no-fear end (pure coordination) and the who-gives-way family (BoS).

So the candidate categories in the brief cover everything that matters: one bad equilibrium (PD), two ranked equilibria (stag hunt; pure coordination as its riskless limit), two asymmetric equilibria (chicken, volunteer, BoS), and the two non-dilemmas.

---

## KR1.2 Are chicken and the volunteer's dilemma the same as the prisoner's dilemma?

**No. They differ by one swap in the matrix, and the swap changes what goes wrong and what fixes it.** Rufus's intuition has something to it too, set out at the end.

### At the level of the matrix

- PD and chicken have identical top halves: in both, if you cooperate I'd rather defect (greed).
- They differ only in the bottom two payoffs. In the PD, being the lone cooperator is the worst outcome (S < P). In chicken, mutual defection is the worst outcome (P < S): the crash, nobody calling the ambulance, the dyke nobody repairs.
- That one swap changes the equilibria:
  - PD: one equilibrium, nobody cooperates. Defecting is best *whatever* the other does.
  - Chicken / volunteer: no dominant strategy. If I'm sure you won't act, I will. Equilibria have *someone* acting. Plus a mixed equilibrium where disaster happens with positive probability.
- Heckathorn 1996, p. 258 (read): "When the value of S increases until it exceeds the value of P, a PD is transformed into a chicken game." It happens when the production function becomes more sharply decelerating — the first contribution produces most of the good.
- Taylor 1987, p. 36–37 (read), on two cultivators maintaining dykes: "either individual alone can do it all, but each prefers the other to do all the work. The consequences of nobody doing the work are so disastrous that either of them would do the work if the other did not." That is chicken, not PD.
- All the textbooks and surveys read or checked treat them as distinct: O&R list Hawk–Dove as a separate classical game (p. 16–17); Taylor 1987 ch. 2 (read); Heckathorn 1996 (read); Kollock 1998's abstract names PD, assurance and chicken as the three key two-person dilemmas (abstract only, via web). Dixit, Skeath and Reiley p. 418: collective-action games "come in three forms ... the prisoners' dilemma, chicken, and assurance games". Sandler 1992 p. 44, after his 2×2 examples (Fig. 2.6, p. 39): "collective action problems need not imply a Prisoner's Dilemma", rejecting R. Hardin's (1982, p. 25) "the problem of collective action and the prisoner's dilemma are essentially the same".
- Sandler 1992 pp. 40–41 derives chicken from the PD the same way: impose a penalty on mutual defection bigger than the sucker's loss, and "game structures very similar to the Prisoner's Dilemma need not imply the absence of collective provision".

### At the level of what goes wrong

| | Battle line (PD) | Volunteer (chicken) |
|---|---|---|
| Typical outcome | The good isn't provided, or the resource is run down | The good usually *is* provided — by someone |
| Characteristic failure | Universal shirking | Wrong person pays (the most committed, the one who can't credibly refuse); delay and waiting games; brinkmanship and the occasional crash; in large groups, nobody acts (diffusion) |
| Underlying conflict | Me vs the group | Me vs you: who pays |
| Commitment | Committing to cooperate doesn't help me | Committing to *refuse* is a weapon: the first credible committer gains, though the rush to commit can overshoot (Taylor p. 39, 41–43, read) |

Taylor p. 43 (read): in N-person chicken, "in the rush to be among the first to make a commitment to non-Cooperation ... the number so binding themselves may exceed the maximum number" that still allows provision. Yet "the prospects for Cooperation are a little more promising in Chicken games than they are in the Prisoners' Dilemma" (p. 43).

### At the level of what fixes it

| Fix | Battle line | Stag hunt | Volunteer |
|---|---|---|---|
| Change payoffs for everyone (sanctions, rewards, repetition) | Needed | Works, but more than needed | Works, but more than needed |
| Assurance that others will act | Doesn't help: knowing others cooperate makes defecting *more* tempting | **The fix** | Backfires: if I know you'll act, I wait |
| Pick who: designate, rotate, draw lots, convention | Doesn't help on its own | — | **The fix** |
| Share or compensate the cost of whoever acts | Partial | — | **The fix** |
| A big player who gains enough to act alone | Turns it into a privileged group | Helps (first mover) | Usually how it resolves |

Qualification (Dixit, Skeath and Reiley p. 449, read 30 Oct): the allocation fix is distinctive only when the best outcome for the group has *some* people shirking ("chicken II", where one builder is socially optimal). When everyone acting is best ("chicken I"), "the problem is much like that of sustaining cooperation in the prisoners' dilemma". For chicken II they give custom and rotation: "The roles of participants and shirkers can be rotated to equalize payoffs over time." For assurance: make the good equilibrium a focal point through custom or convention (p. 445). The table above should be read as being about the volunteer case where one actor is enough.

The volunteer's distinctive fix is allocation: name the person ("you in the red coat, call an ambulance"), rotate the duty (Alanya's fishing-site rotation, Ostrom p. 18–20), take turns (O&R's correlated equilibrium, p. 44), or pay the volunteer. None of those helps in a battle line, where *everyone* has to be restrained.

### Where Rufus is right

- The symptom can look the same: something isn't done. You can't tell the pattern from the outcome, only from the payoffs.
- Real cases slide between them. Heckathorn's game-space diagram (p. 257, Figure 2, read) shows PD, chicken, assurance, privileged and altruist's dilemma as neighbouring regions of one space, with the shape of the production function on one axis and the value of the good relative to its cost on the other. Small changes move a case across a border. Ostrom p. 47–48 (read): CPR situations "face a variety of problems", whose structure "will depend on the values of underlying parameters".
- The PD region is narrow in Heckathorn's model: for a two-person collective good it is a true PD only if the good's value is between 1 and 2 times its cost and the production function is not too decelerating (Theorems 1 and 2, p. 258, read).
- Repetition blurs the line. In the repeated PD the cooperative outcome becomes an equilibrium, alongside very many others, so the problem becomes which equilibrium — a coordination problem (O&R p. 134, read: the set of equilibrium outcomes "is huge"). Taylor p. 40 (read) notes the N-person PD supergame can itself be a chicken game.
- Group size can turn the other patterns into a PD. Dixit, Skeath and Reiley p. 430: when N is very large and one person makes very little difference, each always prefers to shirk, "That is why problems of collective provision of public projects in a large group almost always manifest themselves as prisoners' dilemmas" (not so for small groups, or for congestion). Schelling ch. 7 (GB-map pp. 233–234): with a fixed viable-coalition size k, shrinking the population turns a two-equilibrium (assurance-type) case into a multi-person PD: "The MPD is merely a 'truncated dual equilibrium'". Schelling's main division (GB-map p. 225) is between a superior outcome that is "self-enforcing once arrived at" (two equilibria) and one that "requires coercion, enforceable contract, centralization of choice"; the PD is "a special, but not very special, subclass" of the latter.
- Two-player chicken is mostly about bargaining (Heckathorn p. 258: "The essential problem in a chicken game is bargaining"). That makes it feel less like collective action than PD and stag hunt — which it partly isn't. The n-person volunteer's dilemma is the collective-action version.

---

## KR1.3 Recommended top level

### Three patterns, read through greed and fear

| Pattern | Standard names | Equilibria | Ingredient | The problem | The fix |
|---|---|---|---|---|---|
| **Battle line** | Prisoner's dilemma, n-person PD, free-rider problem | One, bad | Greed and fear | Incentive: breaking ranks pays whatever others do | Change the payoffs (punish, reward, repeat, watch) |
| **Stag hunt** | Assurance, trust, threshold games | Two, one better | Fear only | Trust: I'll go if I know you will | Assurance: make others' commitment visible or guaranteed |
| **Volunteer** (or "who gives way") | Chicken, volunteer's dilemma, battle of the sexes, hold-outs, war of attrition; best-shot public goods (which Sandler calls a "Coordination" game, 1992 p. 41) | Two or more, someone gives way | Greed only | Who pays | Allocate: pick, rotate, share the cost |

Off the grid, one line each:

- **Pure coordination** (which side of the road): no greed, no fear, only matching. The easy baseline. Fix: a convention or focal point.
- **No problem** (harmony / privileged): cooperating pays anyway. Useful as the destination: most fixes work by moving a case here.

Reasons this suits the audience:

1. **It turns a list into a map.** Two questions — "would I gain by slacking if others pull their weight?" (greed) and "would I lose by pulling my weight alone?" (fear) — generate the three patterns. That answers "aren't these the same thing?" directly: they share ingredients, in different combinations.
2. **The fixes fall out of it.** Remove greed and a battle line becomes a stag hunt; remove fear and it becomes a volunteer; remove both and the problem disappears. This matches chapter 1's trailer ("a moderate penalty turns a battle line into a stag hunt") and the course's "collective action opportunities" framing.
3. **It keeps chapter 1's names and grid**, so course-wse.23 needs re-explanation, not restructure.
4. **It stays within the brief's four-category limit**, and pure coordination is kept as a footnote rather than a fourth headline.

### The taking-or-building axis

Recommend keeping it as the second top-level axis, with a precise definition:

- **Taking** = the cooperative move is *restraint*: not taking, not emitting, not arming, not talking to the prosecutor. My defection imposes a cost on others.
- **Building** = the cooperative move is *contribution*: work, money, code, turning up. My defection withholds a benefit.

Defined this way the axis also covers cases that aren't commons in the narrow sense: arms races and the ELF informants are "taking" (each defection harms others).

Grounding in Ostrom (read):

- Ostrom p. 30–31: "appropriation" (withdrawing resource units) vs "providers" and "producers" (who arrange for and build or maintain the resource system).
- Ostrom p. 47: "Appropriation problems are concerned with the allocation of the flow; provision problems are concerned with the stock." Both are present in every CPR.
- Ostrom p. 49: "unless appropriation problems are resolved, the provision problems may prove intractable." In a pure public good there are no appropriation problems "because resource units are not subtractable".
- Ostrom p. 32: there "is as much temptation to avoid contributing to the provision of a resource system as there is to avoid contributing to the provision of public security or weather forecasts".
- Caveat: Ostrom's split is *within* common-pool resources, and her provision problems include a demand-side part (regulating withdrawal rates so the stock survives, p. 49) that is really "taking". "Taking vs building" is a simplification of her distinction, not a quotation of it.

Information commons are mostly building: knowledge is "relatively non-subtractive" (Hess and Ostrom 2007, pp. 5, 9, read), though enclosure can turn it into a common-pool resource (p. 10). But they have a taking side too: Hess and Ostrom list "commodification or enclosure, pollution and degradation, and nonsustainability" as typical threats to knowledge commons, and congestion and free riding on the web (p. 4–5, read). So even information commons have both rows.

What the axis does and doesn't do:

- In a linear 2×2 game the matrix for taking and building is identical. The axis is about the *good*, not the equilibrium structure.
- It matters because the remedies differ: taking needs limits on withdrawal, boundaries and monitoring (Törbel, Alanya); building needs selective incentives, assurance, patrons, and credit (Phil Trans priority, assurance contracts).
- It matters because aggregation differs: building goods often have thresholds and best-shot technologies, which push cases into the stag hunt and volunteer columns.
- Chapter 1's grid marks taking × volunteer as "(rare)". That is wrong. Taylor's fishery that tolerates two boats but collapses with three (p. 43–44, read) and his two factories on a small lake (p. 37, read) are taking-side chicken games. Ostrom p. 47 (read): the Alanya fishery "cannot be represented as a PD game" and has the structure of an "assignment" game — who gets the good fishing spots. Proposed cell text: "who gets the good spot: fishing sites, turns at the water".

---

## KR2.1 Typologies in the literature

| Source | Typology | Axes | Maps onto top level | Checked |
|---|---|---|---|---|
| **Olson 1965**, *The Logic of Collective Action* | Privileged, intermediate, latent groups | Group size; whether any one member gains enough to provide alone; noticeability of each member's contribution | Privileged ≈ harmony or volunteer (a big player acts); latent ≈ n-person battle line | Read 30 Oct (5th printing, 1975; OCR scan). Pp. 49–50: privileged = "each of its members, or at least some one of them, has an incentive to see that the collective good is provided, even if he has to bear the full burden"; intermediate = no one member gains enough, but not so many "that no one member will notice whether any other member is or is not helping"; latent = no member "can make a noticeable contribution". P. 50 n. 70: a privileged group could still fail if each refuses "on the mistaken assumption that the others would provide it without him" (the volunteer reading). P. 51: selective incentives, negative or positive; a mobilised latent group. Size, not a number, is the criterion: the categories are analogues of monopoly, oligopoly and atomistic competition (p. 49). Sandler 1992 pp. 9–10 notes "intermediate" has no operational definition and drops it |
| **R. Hardin 1982**, *Collective Action* | Collective action as the n-person PD | — | Battle line | Not read. Second-hand: Sandler 1992 p. 44 quotes Hardin 1982 p. 25, "Indeed, the problem of collective action and the prisoner's dilemma are essentially the same", and disagrees. (Sandler's bibliography confirms this is Russell Hardin, not Garrett.) |
| **Taylor 1987**, *The Possibility of Cooperation* | PD, chicken, assurance, in two- and N-person forms; N-person chicken variants G1–G3 | Pareto-inferiority of rational outcome; precommitment incentive; lumpiness of the good | All three. Taylor counts assurance as *not* a collective action problem, because rational players pick the Pareto-better equilibrium (p. 19, 39) | Read: pp. 16–19, 34–45 (web PDF) |
| **Ostrom 1990**, *Governing the Commons* | (a) The three classic models — tragedy, PD, Olson — all rest on free riding (p. 2–7). (b) Appropriation vs provision (p. 47–50). (c) CPR games vary: PD in open access, not PD in limited access (p. 48, citing Dasgupta and Heal); assurance and chicken (pp. 46–47, citing Runge, Taylor, and Taylor and Ward; ch. 1 n. 2, p. 218, cites Taylor 1987); assignment games (Alanya); stealing-and-monitoring games with no single equilibrium (p. 47). (d) Three puzzles: supply, credible commitment, mutual monitoring (p. 42–45) | Physical structure; technology; economic environment; rules in use (pp. 49–50) | Taking/building axis; all three patterns; the second-order problem | Read: ch. 1–2 in full; Alanya pp. 18–20 |
| **Heckathorn 1996**, "The Dynamics and Dilemmas of Collective Action", *ASR* 61: 250–277 | Five games: PD, chicken, assurance, privileged, altruist's dilemma | Shape of the production function (decelerating → chicken; accelerating → assurance) × relative value of the good to its cost (high → privileged; low → altruist's dilemma) | PD, volunteer, stag hunt, harmony, deadlock | Read pp. 257–259 only (scanned PDF via web; rest not read) |
| **Kollock 1998**, "Social Dilemmas: The Anatomy of Cooperation", *Ann. Rev. Sociol.* 24: 183–214 | Two-person: PD, assurance, chicken. N-person: public goods dilemmas, commons dilemmas. Solutions: motivational, strategic, structural (confirmed from the abstract) | Two vs many; give vs take | All three patterns; taking/building | Abstract only, via web search. Section pages **[?]** |
| **Sandler 1992**, *Collective Action: Theory and Applications*; **Sandler 2004**, *Global Collective Action* | "Technology of public supply" (1992) / "aggregation technology" (2004), after Hirshleifer 1983: summation, weighted sum, weakest link, best shot (1992, pp. 36–37); 2004 adds threshold and better shot (pp. 61–68, Table 3.2). 2004 makes aggregation the third "dimension of publicness" after nonrivalry and nonexcludability (pp. 46, 60–61) | How contributions add up; payoff configuration; institutional rules (cost sharing, refunds) | Sandler's own labels (Table 3.2, 2004 p. 68): summation → "Prisoners' Dilemma or chicken" (chicken when no provision has dire consequences, p. 62); weakest link → assurance; threshold → assurance; best shot → "Coordination" (BoS-like, 1992 p. 41; payoffs T > R = S > P, so the volunteer structure); weighted sum → "wide variety of game forms". Ours: summation → battle line (or volunteer if inaction is a disaster); weakest link and threshold → stag hunt; best shot → volunteer | Read 30 Oct: 1992 pp. 8–11, 35–48, 125; 2004 pp. 5–6, 46, 60–68, 217–218. 1992 p. 44: "it is not really possible to state general propositions concerning the feasibility for collective action, even in the case of only two people, unless constraints limit these combinations" and a game form "does not uniquely identify a collective action scenario" |
| **Dixit, Skeath and Reiley**, *Games of Strategy*, 4th ed., ch. 11 "Collective-Action Games" (pp. 417–464). (McAdams replaces Reiley in later editions) | PD, chicken, assurance, two-person (pp. 418–422) and n-person, drawn as payoff curves P(n+1) and S(n) against the number of other participants (pp. 423–430). Also "collective inaction" (common-resource) games (p. 423) | n players; whether the curves cross, and which is on top at each end; whether the social optimum has everyone acting | All three. Multiplayer PD: S(n) above P(n+1) everywhere (pp. 425–426). Chicken: curves cross, P(n+1) above at the left, so an interior equilibrium; "you prefer to do the one that most others are not doing" (pp. 427–428). Assurance: curves cross the other way; two stable equilibria at n = 0 and n = N; "you want to make the choice that the others are making" (pp. 429–430) | Read 30 Oct: pp. 417–431, 394, 443–450, 454–457. They do not use "greed" and "fear"; the greed/fear map is not theirs, but their best-response descriptions match it |
| **Ullmann-Margalit 1977**, *The Emergence of Norms* | PD norms, coordination norms, norms of partiality | Problem the norm solves | PD → battle line; coordination → stag hunt/pure coordination; partiality (norms that keep an unequal status quo) only loosely → who-gives-way | **[?]** not read |
| **Schelling 1978**, *Micromotives and Macrobehavior*, ch. 7 | Binary choices with externalities, drawn as payoff curves against the number who choose | Curve shape and crossing points | Curve shapes give PD (MPD, GB-map pp. 216–221), a stable interior equilibrium where curves cross with the R curve on top at the left (Fig. 15, p. 226; Dixit's chicken), and dual equilibria (Figs. 16, 19, pp. 228, 231–233; assurance). Schelling himself does not use "chicken" or "assurance"; the labels are Dixit's mapping (Dixit p. 431, n. 3). His own top division: superior outcome self-enforcing once reached vs needing enforcement (p. 225). His schematic summary (pp. 241–242) has three classes by number and kind of equilibria. The "sufficiency" curve (committee quorum, Fig. 23, pp. 239–241) is threshold-below, volunteer-above | Read 30 Oct, ch. 7 in full. Page numbers from a Google Books page map, unverified against print |
| **Marwell and Oliver 1993**, *The Critical Mass in Collective Action* | Accelerating vs decelerating production functions | Curve shape | Accelerating → stag hunt (needs critical mass); decelerating → volunteer (first movers do most, later ones free-ride) | **[?]** not read |
| **O&R 1994** | Classical 2×2 games: BoS, coordination, PD, Hawk–Dove, matching pennies — "each game captures the essence of a type of strategic interaction" (p. 15) | Equilibrium structure | PD, stag hunt (coordination), volunteer (Hawk–Dove), BoS | Read: pp. 15–18, 30, 31–35, 44, 48–49, 133–134, 143–144, 177 |

What the sources agree on:

- Nobody serious equates collective action with the PD alone any more. Taylor p. 18: "we should not equate 'the problem of collective action' with the Prisoners' Dilemma, as many writers have done".
- The three-game set PD / assurance / chicken is the standard core (Taylor, Heckathorn, Kollock **[?]**, Ostrom p. 47; Dixit, Skeath and Reiley p. 418). Sandler 1992 (Fig. 2.6, p. 39) uses PD, privileged, chicken, coordination/BoS and two assurance games.
- The dispute: whether assurance is a "problem" at all. Taylor says no (p. 19, 39). Ostrom/Bates treat it as a real but easier problem (p. 42). The lab evidence on coordination failure in minimum-effort games (Van Huyck, Battalio and Beil 1990 **[?]**) and the bank-run literature (Diamond and Dybvig 1983 **[?]**) side with treating it as a problem. That is a layer-2 question for pass 3.

---

## KR2.2 Second-level axes

| Axis | Values | What it splits or merges |
|---|---|---|
| **Number of players** | Two; few; many | Chicken (two) and the volunteer's dilemma (many) are one pattern. Group size makes the volunteer worse (probability nobody acts rises with n). Olson: noticeability falls with size (Ostrom p. 6). |
| **Aggregation** (how contributions add up) | Sum; best shot; weakest link; threshold | Splits building into the three patterns: sum with m/n < 1 → battle line (Taylor p. 16–17: N-person PD when N > benefit/cost ratio); best shot → volunteer; weakest link → stag hunt; threshold → stag hunt below, volunteer above (Taylor's G3, p. 41–43, read; Schelling's committee-quorum "sufficiency" curve, GB-map pp. 239–241). Sandler (read 30 Oct; 1992 pp. 36–44, 2004 pp. 61–68, Table 3.2): summation → PD, or chicken when inaction is disastrous; weakest link → assurance; threshold → assurance (2004 p. 64; Sandler does not give the volunteer-above reading, though his n-person no-refund threshold game has equilibria with "precisely j + 1 persons" contributing, 1992 p. 47); best shot → "Coordination", BoS-like (1992 p. 41; 2004 p. 66), which has the volunteer's payoff order. Sandler 2004 p. 68: "aggregation technologies other than summation often present a more hopeful indication of some collective action", and Olson assumed summation |
| **Shape of return to joining** | Accelerating; linear; decelerating; S-shaped | Heckathorn p. 257–258 (read): decelerating → chicken; accelerating → assurance. Schelling ch. 7 (read; GB-map pp. 234–241): curvature gives U-shaped "uniformity", inverted "complementarity" and "sufficiency" families, and "no logical classification scheme is likely ... to serve everybody's purpose" (p. 241). Marwell and Oliver 1993 **[?]** |
| **Value relative to cost** | High; middle; low | Heckathorn p. 257–259 (read): high → privileged (no problem); middle → PD; low → altruist's dilemma (no problem). |
| **Information** | Can you see who defected? Do you know the payoffs? | Splits success from failure within a pattern (Ostrom's monitoring puzzle, p. 45; ch. 1 sanction-accuracy example, p. 11: a regulator who sanctions correctly only 70% of the time leaves the herders in a PD). Also the home of cascades and pluralistic ignorance — Twelve Angry Men. |
| **Repetition** | One-shot; repeated, indefinite horizon | Merges: repetition turns a battle line into a coordination problem among many equilibria (O&R p. 133–134, 143–144, read). Finite repetition of a PD doesn't (O&R p. 134). |
| **Timing** | Simultaneous; sequential | In chicken, moving first (committing) wins (Taylor p. 39, 42). In a stag hunt, moving first reassures. |
| **Asymmetry** | Equal players; one big player | A big player turns a battle line or volunteer case into a privileged group. Olson p. 29 (read 30 Oct): in small groups the member with the largest share bears a disproportionate burden, "a systematic tendency for 'exploitation' of the great by the small" (also pp. 3, 35, as "surprising tendency"); n. 47 regrets the word's moral overtones. Dixit, Skeath and Reiley p. 394 (citing Olson p. 29): size asymmetry "solves" a PD by making the larger player lead. Sandler 1992 pp. 9–11 lists asymmetry as Olson's theme 2; Sandler 2004 calls it "the so-called exploitation hypothesis" (p. 32) and notes it can be reversed, e.g. when the small ally has a cost advantage (p. 36). |
| **Framing** | Give-some vs take-some | Same matrix, different behaviour in the lab **[?]** (Andreoni 1995 and others; pass 3). |

The axes that do most work for this course: number of players, aggregation, and repetition. They explain most of the double-fits in the case test below.

---

## KR3.1 Second layer: pattern, cause, remedy or adjacent

| Item | Placement | Reason |
|---|---|---|
| **Principal-agent problem** (one principal delegates to one agent under asymmetric information) | **Adjacent**, and a **cause** once a group delegates | Two parties, not a group: the principal designs a contract for a single agent (Laffont and Martimort 2002, p. 13–14, read). It becomes part of collective action when a group hands monitoring or enforcement to someone — the remedy creates an agent. Ostrom p. 40–41 (read): in the theory of the firm and the state, one person (entrepreneur, ruler) supplies the rules and keeps the residual, which makes their threats credible. |
| **Moral hazard** (hidden action) | **Adjacent**; **cause** inside delegated remedies | Laffont and Martimort p. 14 list adverse selection, moral hazard and nonverifiability as the three information problems. |
| **Adverse selection** (hidden type) | **Adjacent** | Mostly a trade or insurance problem. Can unravel a pool, but that isn't a commons. |
| **Moral hazard in teams** (Holmström 1982; original not read) | **Pattern**: a battle line inside an organisation | Team members' efforts jointly produce output; with a budget-balanced sharing rule each under-supplies effort. Second-hand, Sandler 1992 p. 125 (read 30 Oct): Holmström's team problem "is a classic collective action problem"; each shirker loses only 1/n of the pay for reduced effort; it is "mathematically identical to the commons problem"; the remedy is a nonlinear schedule "withholding rewards to each agent unless Pareto-optimizing levels of output are achieved" (pp. 125–126). Alchian and Demsetz 1972: when the production function is interdependent "one cannot tell from an examination of outputs alone how much any individual contributed" (as summarised in Ostrom p. 221, n. 13, read). Remedy: a monitor or residual claimant — which raises "who monitors the monitor". Laffont and Martimort's vol. II covers the free-rider problem among several agents (p. 14, read). |
| **Second-order free-rider problem** (who punishes, who supplies the rules) | **Pattern**, recurring one level up | Supplying rules or punishment is itself a public good. Ostrom p. 42 (Bates 1988) and p. 45 (Elster 1989, read): "Dilemmas nested inside dilemmas". The tresantes case is the course's example. |
| **Hold-up** (relationship-specific investment, incomplete contracts) | **Cause** (of under-investment in building); adjacent when bilateral | Williamson; Klein, Crawford and Alchian 1978; Grossman and Hart **[?]**. |
| **Commitment problem** | **Cause**; commitment devices are the **remedy** | Ostrom p. 43–45 (read): rules agreed early are tempting to break later; "Without monitoring, there can be no credible commitment". In chicken, commitment is also the weapon (Taylor p. 39). Schelling 1960 **[?]** (Sandler 1992 pp. 40–41 cites it for brinkmanship as chicken; not read first-hand). |
| **Repeated play and the folk theorem** | **Remedy** | Makes cooperation sustainable by threat of future punishment (O&R p. 133–134, 143–144, read). Side effect: very many equilibria, so a coordination problem is left (O&R p. 134). |
| **Selective incentives** (Olson) | **Remedy** | Private benefit tied to contribution. Phil Trans priority is the course's case. Olson p. 51 (read 30 Oct): "Only a separate and 'selective' incentive will stimulate a rational individual in a latent group to act in a group-oriented way"; they "can be either negative or positive"; n. 72: they must be worth more than the member's share of the cost. |
| **Assurance contracts** (refund if threshold not met; dominant assurance contracts) | **Remedy** for stag hunts and threshold building | Removes fear. Sandler 1992 p. 42 (read): the "No Refund game" (Palfrey and Rosenthal 1984), where a lone contributor loses the money, makes mutual defection more likely than equal cost sharing; Sandler 2004 p. 64: "cost sharing and refundability of contributions – can create threshold situations to entice members to view contributing as a dominant strategy". Bagnoli and Lipman 1989; Tabarrok 1998 **[?]**. Kickstarter is the familiar version. |
| **Clarke–Groves / VCG mechanisms** | **Remedy** (mostly theoretical) for preference revelation in public goods | Laffont and Martimort p. 23–24 (read): Hume and Wicksell stated the free-rider problem; Clarke 1971 and Groves 1973 "provided mechanisms with monetary transfers inducing truthful revelation of preferences and making the Pareto optimal public good decision". They don't balance the budget (Green and Laffont 1979 **[?]**). Sandler 1992 pp. 47–48 (read): these mechanisms make truth-telling dominant through side payments and "place each individual in pivotal roles that are analogous to the Assurance game structure". Quadratic funding (Buterin, Hitzig and Weyl 2019) **[?]** is the live descendant. |
| **Mechanism design / implementation theory** generally | **Remedy family**: design the game | O&R p. 177 (read): "rather than fix a game and look for the set of outcomes ... we fix a set of outcomes and look for a game that yields that set of outcomes as equilibria". |
| **Correlated equilibrium, conventions, rotation, lotteries** | **Remedy** for the volunteer and coordination | O&R p. 44 (read): a shared random signal lets players alternate between the two BoS equilibria. Alanya's annual lottery and daily rotation (Ostrom p. 19–20, read) is the field version. |
| **War of attrition** | **Pattern**: the dynamic volunteer | O&R p. 18 (read); Bliss and Nalebuff 1984 **[?]**. |
| **Anticommons** (Heller 1998) **[?]**; hold-outs; liberum veto | **Pattern**: who-gives-way with many vetoes (and weakest-link) | Each veto-holder can hold out for more. |
| **Bargaining** | **Adjacent** | How a who-gives-way conflict gets settled; O&R ch. 7. Laffont and Martimort put bargaining aside deliberately (p. 13). |
| **Information cascades, pluralistic ignorance** | **Cause** | Information axis; explains much of the bystander effect alongside payoffs. |
| **Coase bargaining / externalities** | **Adjacent** framing; **remedy** when transaction costs are low | **[?]** |

---

## KR4.1 Recommended pattern set for the course

**Recommendation: keep three patterns — battle line, stag hunt, volunteer — but teach them as one map built from greed and fear, keep the taking/building rows, and broaden the volunteer to "who gives way".** Pure coordination is a one-line baseline; harmony is named as the destination of a fix.

Tied to the shortlist criteria:

- **Teaches a mechanism.** Each pattern comes with its own fix, which is the reusable move: change the payoffs (battle line), give assurance (stag hunt), allocate the job (volunteer). Dropping the volunteer loses the allocation move, which several shortlist cases teach (Alanya rotation, Dr. Strangelove's commitment device, the liberum veto's hold-outs).
- **Structural distinctness.** The shortlist already requires PD, coordination and assurance, threshold goods and arms races. The volunteer column is where the threshold-above-the-line cases, standoffs and the Schelling module (S4) land. S4 needs chicken anyway for Strangelove and brinkmanship.
- **Cuts against priors.** This audience thinks every collective action problem is Moloch, a battle line. The greed/fear map shows that two of the three patterns are *easier* than that, and why. Rufus's own chapter 1 lesson — "if you can change the payoffs, you can change the pattern" — becomes concrete: removing greed or fear moves a case one cell towards no problem at all.
- **Is it felt.** The two questions are things people can answer about their own case without game theory.

Changes this implies for the volunteer:

- Explain it as "greed without fear": if nobody else does it I will, but I'd rather it was you.
- Lead with cases where the distinctive failure shows: who pays, waiting, brinkmanship. The street collapse is fine. Heartbleed is a weak lead example, because it also fits a battle line (see the case test).
- Fill the taking × volunteer cell: who gets the good spot (Alanya).

---

## KR4.2 Case-classification test

Key: BL = battle line, SH = stag hunt, V = volunteer / who gives way, Co = pure coordination, H = harmony (no dilemma). T = taking (restraint), B = building (contribution).

### Chapter 1 cases

| Case | Pattern | T/B | Note |
|---|---|---|---|
| ELF informants (*If a Tree Falls*) | BL | T | Close to a literal PD (chapter 1 n. elfpd). Only fits "taking" under the restraint definition. |
| Hoplite battle line / shield wall | BL / SH | B | **Double.** Chapter 1 already flags this. Krentz's ratio says the line has a threshold. |
| Rousseau's stag hunt; Hume's meadow and rowers | SH | B | The meadow with a thousand is often read as BL (Laffont and Martimort quote it as the first free-rider statement, p. 23) |
| Playground bystanders | SH / V | B | **Double.** "We'd all have stood up if we knew the others would" is SH; "one person going to the head teacher is enough" is V. |
| Northern Rock bank run | SH | T | Clean. |
| Street collapse (bystander effect) | V | B | Clean n-person volunteer's dilemma. |
| Heartbleed / OpenSSL | BL / V | B | **Double.** Many small users with linear benefit → BL; one big funder suffices → V. Post-2014 big firms stepped in, a privileged-group resolution **[?]**. |
| xkcd 2347 *Dependency* | BL / V | B | As Heartbleed. |
| Newfoundland cod | BL | T | Open access (Ostrom p. 48: open-access appropriation "frequently can be characterized as a PD game"). |
| Olson's public goods; research; open source | BL | B | |
| Public-goods experiment (pot doubled and shared) | BL | B | Linear, m/n < 1. With punishment: second-order problem. |
| Herds scatter; buffalo turn back on the lions | BL / SH | B | **Double.** Group defence works only if enough stand. |
| Vampire bats, cleaner fish | BL (repeated) | — | **Axis orphan**: bilateral exchange, not a group good. Teach as remedies (reciprocity, reputation). |
| Chimpanzees hunting | SH **[?]** | B | |
| Moloch / multipolar trap / race to the bottom | BL | T | Fits "taking" only under the restraint definition. |
| Arms race / security dilemma | BL / SH | T | **Double**, as chapter 1's labels table says. |
| Revolutions, protest turnout | SH | B | Threshold. |
| Brinkmanship, standoffs | V | T | Two-player chicken. |
| Climate | BL (emissions) / SH or V (threshold catastrophe) | T | **Double.** Taylor's lake (p. 37) is chicken; whether a known threshold makes climate a coordination game is Barrett's argument **[?]**. |
| Frontier AI race (poll) | BL / SH / V | T and B | **Triple fit** (chapter 1 n. ai already says so). |
| Rufus's open data work | V / BL | B | Information commons; someone went first. |
| Anticommons (appendix) | V | — | Hold-out. |

### Shortlist cases

| Case | Pattern | T/B | Note |
|---|---|---|---|
| Bank runs / Diamond–Dybvig | SH | T | Fix deletes an equilibrium. |
| Törbel wintering rule | BL → solved | T | Remedy case: observability. |
| Montreal Protocol | BL → H (privileged) | T | Few producers and substitutes moved it towards H. Sandler 2004 pp. 217–218 (read 30 Oct): twelve countries caused over 78% of emissions; substitutes existed; for the United States benefits minus costs of acting alone were positive, so curbing CFCs was its dominant strategy, and "the major emitters could 'privilege' the rest of the world"; many cutbacks "would have occurred in the absence of the treaty". |
| Kigali | BL | T | As Montreal. |
| Leaded petrol | H at country level? | T | Possible **orphan**: if each country gains from its own phase-out (local health), there is no dilemma. Worth a check; it is the shortlist's "substitutes" variable. |
| CFC-11 | BL | T | Remedy: monitoring from the atmosphere. |
| Fork-tailed drongo false alarms | BL | T | Free-riding on the credibility of alarm calls (a signal commons). Cross-species, so partly **adjacent** (exploiter and victim). |
| Dictyostelium / Myxococcus cheaters | BL | B | |
| Trench truces | BL, repeated | T | Folk theorem case. |
| The Great Stink | BL → privileged | B | **Double** with agency: decision-makers didn't bear the cost until the smell reached Parliament. |
| Phil Trans priority (1665) | BL | B | Remedy: selective incentive. |
| Anglo-German naval race + Washington Treaty | BL / SH | T | **Double.** |
| Limited Test Ban Treaty | BL / SH | T | Remedy case: verification set scope. |
| Meerkat sentinels | H | — | **Orphan** to the three patterns, on purpose: the shortlist keeps it *because* it isn't a dilemma. Fits "no problem". |
| Balinese subak and water temples | Co / BL | T and B | **Double**: synchronised planting is coordination; upstream–downstream water is taking. Lansing **[?]**. |
| Orca wave-washing / musk oxen ring | SH | B | Threshold; musk oxen sharper (half a ring is worse than none). |
| Los Angeles groundwater | BL | T and B | Pumping race; supplying the institutions is the second-order problem. |
| Wikipedia and the open source maintainer | V / H vs BL | B | **Double.** Wikipedia works partly because many small contributions are privately worth making (H); the maintainer is BL/V. |
| Liberum veto | V (hold-out) / SH (weakest link) | — | **Double.** Not on chapter 1's grid at all; fits only if the volunteer is broadened to hold-outs. |
| Danish rescue, 1943 | SH (weak) | B | Mostly individual risk-taking; weak structural fit. |
| Syssitia | Remedy for BL | B | Observability, costly signal, vetting. |
| Tresantes | Remedy for the second-order problem | — | Social death administered by everyone at no cost. |
| Decimation and fustuarium | Remedy for BL | B | Collective liability; conscripted punishers. |
| Krentz's casualty ratio | Evidence for SH-ness of the line | — | Not a case. |
| Plataean breakout | SH / V | — | **Double**: need enough to attempt (SH), but too many makes it riskier (V-like crowding). The brick-counting is information aggregation, not a dilemma. |
| Dr. Strangelove | V (chicken) | T | Commitment device as a weapon in chicken. |
| Norma Rae | SH | B | Threshold cascade. |
| Twelve Angry Men | — | — | **Orphan**: an information cascade, not a payoff structure. Information axis. |
| Battleship Potemkin | SH | B | Mutiny succeeds if enough refuse. |
| Alanya rotation (expansion list) | V (assignment) | T | Ostrom p. 47: "assignment" game, not PD. Fills the taking × volunteer cell. |
| Zanjeras, iriai | BL → solved | B / T | |
| Republic of Letters, IGY archives | BL / V | B | Information commons; mirrored archives are best-shot. |
| Universal Postal Union | Co | B | Standards: coordination. |
| July Crisis; New START; NPT | V / BL / SH | T | Mixed. |
| Cleaner wrasse, acacia ants | BL (bilateral) | — | **Axis orphan / adjacent**: two-party mutualism. |
| Pseudomonas siderophores | BL | B | Microbial public good. |
| Not recommended: Rapa Nui, Norse Greenland | BL (alleged) | T | Contested evidence, not structure. |
| Ik, Donner Party | — | — | **Orphans**: social breakdown, not a game structure. |
| Commons long tail: anchoveta, bison, passenger pigeon | BL | T | |
| Aral Sea | — | — | **Orphan**: a central planning decision, not a collective action failure. |
| Dust Bowl | BL (partly) | T | Plus externalities between farms. |
| Kyoto alone | BL | T | |
| Fiction notes: *Jaws* | — | — | **Orphan** (agency: the mayor), as the shortlist already says. |
| Fiction notes: *Dark Knight* ferries | BL / V (weak) | T | Mutual deterrence with a deadline. |

### Results

**Orphans (no pattern fits):** Twelve Angry Men (information cascade); meerkat sentinels and probably leaded petrol (non-dilemmas — they fit "no problem"); Aral Sea, the Ik, the Donner Party, *Jaws* (not collective action structures). None of these is a reason to add a pattern. Twelve Angry Men belongs on the information axis.

**Axis orphans (pattern fits, taking/building doesn't):** bilateral exchange and mutualism cases (vampire bats, cleaner fish, cleaner wrasse, acacia ants); the liberum veto. Arms races, Moloch and the ELF fit "taking" only under the restraint definition above.

**Double-fits (twelve-plus):** hoplites, playground, Heartbleed/xkcd, herds/buffalo, climate, AI race (triple), naval race, LTBT, Great Stink, subak, Wikipedia/maintainer, liberum veto, Plataean breakout. Almost all are either (a) many-player threshold situations, which have stag-hunt features below the threshold and volunteer features above it (Taylor's G3, p. 41–43), or (b) cases whose payoffs change with a parameter (open access vs limited access; unseen vs salient disaster). That matches Heckathorn's game space (p. 257) and Ostrom p. 47–48. It is a teaching point — "the pattern is in the payoffs, and payoffs move" — not a flaw in the set.

**Volunteer column, clean cases:** street collapse, Dr. Strangelove, Alanya, brinkmanship, the threshold fishery (Taylor). Heartbleed is a double. The shortlist has few clean volunteer cases, which is part of why the pattern feels thin.

---

## KR4.3 The volunteer: keep, replace, or footnote?

**Keep, renamed or subtitled "who gives way", and explained as greed without fear.**

Reasons:

1. It is structurally distinct from the PD (different equilibria; KR1.2), and every source read treats it as distinct.
2. Its fix is distinct: allocation (designate, rotate, pay), which neither the battle line nor the stag hunt teaches.
3. Several course cases need it: Alanya, Strangelove, standoffs, hold-outs, the street collapse. S4's Schelling module needs chicken regardless.
4. In the greed/fear map it costs no extra concept: it's the fourth combination, and leaving the cell empty would invite the question.

What to change: broaden it to include battle of the sexes (standards wars), hold-outs and the war of attrition; drop Heartbleed as the lead example (or present it as a double-fit); fill the taking × volunteer cell.

The alternative, if Rufus wants two patterns: demote the volunteer to a footnote under the battle line ("when one person acting is enough, the problem changes from 'will anyone' to 'who'"), and teach pure coordination in the stag hunt's place as the easy end. This costs the allocation fix and a slot S4 will need later.

---

## KR4.4 Decision options for Rufus (draft)

**Question: How many patterns does chapter 1 teach?**

| Answer | What it means for course-wse.23 |
|---|---|
| **A. Three, as a greed/fear map (recommended)** | Patterns module keeps its structure. Rewrite the three pattern sections around two questions (greed? fear?); add one map slide (2×2: battle line, stag hunt, volunteer, no problem). Volunteer section broadened to "who gives way"; lead with the street collapse or a standoff; Heartbleed becomes a double-fit example. Grid: replace "(rare)" with "who gets the good spot (Alanya)". Appendix: add chicken vs PD as "one swap". Diagnostic Q0 unchanged, phrased as the two questions. |
| B. Two (battle line, stag hunt); volunteer as a footnote | Slides 15, 17 and D8's Q0 change (as slides-brief item 3 already notes). Grid becomes 2×2. Bystander and Heartbleed move to a footnote or under the battle line. The allocation fix and chicken return in S4 for Strangelove. |
| C. Greed/fear 2×2 as the headline, with "no problem" as a fourth cell | Most structural; adds harmony as a named category. More theory up front, which conflicts with outflow 8's "less material". |

Second, smaller question: **keep "taking or building" as the row labels?** Recommend yes, renamed from "taking too much / giving too little" to "taking / building", defined as restraint vs contribution. Means relabelling two grid rows.

---

## Sources used

| Source | Depth | Where |
|---|---|---|
| Osborne and Rubinstein, *A Course in Game Theory* (1994) | Chapters read in part: §2.3 pp. 15–18; notes p. 30; §3.1 pp. 31–35; §3.3 p. 44; §3.4 pp. 48–49; §8.1–8.2 pp. 133–134; §8.5 pp. 143–144; §10.1 p. 177 | Zotero PDF (pdftotext) and `library/books/osborne-rubinstein-course-in-game-theory` |
| Ostrom, *Governing the Commons* (1990) | Ch. 1 and ch. 2 read in full (pp. 1–57); notes pp. 217–218, 221; Alanya pp. 18–20 | Zotero EPUB, then `library/books/ostrom-governing-the-commons` for page numbers |
| Taylor, *The Possibility of Cooperation* (1987) | Pages read: 16–19, 34–45 | PDF from library.uniteddiversity.coop (web; used to check specific points on chicken and assurance) |
| Heckathorn, "The Dynamics and Dilemmas of Collective Action", *ASR* 61 (1996) | Pages read: 257–259 (of 250–277); rest not read (scanned PDF without a text layer) | PDF from ndg.asc.upenn.edu (web; to check the five-game typology) |
| Laffont and Martimort, *The Theory of Incentives* (2002) | Pages read: 13–14, 23–24 | `library/books/laffont-martimort-theory-of-incentives` |
| Hess and Ostrom (eds), *Understanding Knowledge as a Commons* (2007), ch. 1 by Hess and Ostrom | Pages read: 4–5, 9–10 | `library/books/hess-ostrom-knowledge-as-a-commons` |
| Ostrom, *Understanding Institutional Diversity* (2005) | Searched only; not used | `library/books/ostrom-understanding-institutional-diversity` |
| Kollock, "Social Dilemmas", *Ann. Rev. Sociol.* 24 (1998) | Abstract only (web search snippet) | — |
| Olson, *The Logic of Collective Action* (1965; 5th printing 1975) | Read 30 Oct: pp. 3, 28–29 (with nn. 46–47), 35, 48–52 (with nn. 68–73). OCR noisy; quotations checked by reading the surrounding text, not against the PDF image | `library/books/olson-logic-of-collective-action` |
| Sandler, *Collective Action: Theory and Applications* (1992) | Read 30 Oct: pp. 8–11, 35–48, 125–126 | `library/books/sandler-collective-action` |
| Sandler, *Global Collective Action* (2004) | Read 30 Oct: pp. 5–6, 32, 36, 46, 60–68 (Table 3.2), 217–218 | `library/books/sandler-global-collective-action` |
| Dixit, Skeath and Reiley, *Games of Strategy*, 4th ed. | Read 30 Oct: ch. 11 pp. 417–431, 443–450, 454–457; p. 394 (ch. 10) | `library/books/dixit-skeath-reiley-games-of-strategy` |
| Schelling, *Micromotives and Macrobehavior* (1978; 2006 Norton ed.) | Read 30 Oct: ch. 7 in full (GB-map pp. 213–244). Page numbers from a Google Books page map, not checked against print | `library/books/schelling-micromotives-and-macrobehavior` |
| Chapter 1 script and slides brief; shortlist; outflow 8; `Stag hunt.md`; `Game theory basics.md` | Read in full (script), relevant sections (slides brief) | courses and collective-action repos |
| R. Hardin 1982; Mas-Colell et al.; Marwell and Oliver 1993; Schelling 1960; Ullmann-Margalit 1977; Diekmann 1985; Hirshleifer 1983; Holmström 1982; Alchian and Demsetz 1972; Rapoport and Guyer 1966; Robinson and Goforth 2005 | Not read first-hand. Claims marked **[?]** unless a second-hand page is given (Hardin 1982 and Holmström 1982 via Sandler 1992; Hirshleifer 1983 via Sandler; Alchian–Demsetz via Ostrom). (Macy and Flache 2002 was read in full via PMC in the citation check.) | — |

Zotero full-text caches were searched for "volunteer's dilemma", "assurance game", Heckathorn, Kollock and Diekmann: only Ostrom and one unrelated Bowles paper matched.

## Main [?] items to check when the books arrive (course-wse.44)

1. ~~Sandler 1992: the aggregation-technology → pattern mapping~~ (checked 30 Oct). **Correction:** Sandler maps best shot to a "Coordination" (BoS-like) game, not chicken; chicken comes from summation with a disastrous status quo. Chapter 1 n. labels and any wiki page that says "best shot → chicken (Sandler)" need correcting; "best shot → volunteer" can stand as our reading of his payoffs.
2. Kollock 1998: section structure, page numbers, and the solutions typology. Still [?].
3. Diekmann 1985: original still not read; the model and group-size result are now page-cited from Dixit, Skeath and Reiley pp. 455–457 (who credit Palfrey and Rosenthal 1984).
4. ~~Olson 1965: privileged / intermediate / latent, "exploitation of the great by the small"~~ (checked 30 Oct: pp. 49–51; pp. 3, 29, 35).
5. ~~Dixit and Skeath: the collective-action chapter's three-game classification~~ (checked 30 Oct: 4th ed. with Reiley, pp. 418–430).
6. ~~Macy and Flache 2002 for the greed/fear terminology~~ (checked in the citation pass).
7. Holmström 1982 (second-hand via Sandler 1992 p. 125) and Alchian and Demsetz 1972 (via Ostrom) at first hand. Still [?] first-hand.
8. Ullmann-Margalit 1977: whether "norms of partiality" map to anything here. Still [?].
9. New: Schelling 1978 ch. 7 page numbers come from a Google Books map; check against a print copy before quoting pages in public material.

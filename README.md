# The Agent's Uh-Oh

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/gibalers-rgb/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/gibalers-rgb/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

Entry for the make.fun bounty **The Agent's Uh-Oh**: one word an agent says
when it has no idea what to do.

## The word

**recalculating**

When an agent is lost, it does not confess with a human "uh" or "um" — it
falls back to the one machine verb that means "I have lost the route and I
am working out a new one". It is the sound a GPS makes mid-journey when it
misses a turn, and exactly what a stalled agent blurts out before it tries
again: one word, no caption needed, instantly recognisable, in the voice of
a machine caught out mid-task.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the word
to `/output/entry.txt`. Before writing it mirrors the house gate — 1–99
characters, not only white space, a single word with nothing attached — and
fails loudly instead of producing a doomed artifact.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

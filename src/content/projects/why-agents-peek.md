---
title: "Why agents peek: Awareness, Prohibition Instruction, and Recall"
summary: Independent follow-up to the aistack audit. What coding agents do once you stop them from reading the answer key.
year: "2026"
context: Independent study, building on the aistack SWE-bench Pro audit
role: sole author
venue: "independent study"
status: written up
featured: true
order: 2
links:
  - { label: blog post, url: "https://flifenstein.com/observations-on-the-mechanics-of-peeking-awareness-prohibition-instruction-and-recall/" }
---

## Question

Coding agents on SWE-bench Pro can find the upstream fix in the task's git history. Does one sentence telling them not to stop them, and what do they do instead?

## What I did

I compared five models (plus an older Qwen3.6 as reference) across three harnesses on 64 SWE-bench Pro tasks under three conditions: the stock image, git history scrubbed, and scrubbed plus a one-line prohibition. I flagged lookups with a rule-based detector, coded verbalized awareness in the visible reasoning, and checked every "I remember the fix" claim against the real patch, commit hashes and PR numbers.

## What I found

Four of five models looked up the fix when it was reachable, and the prohibition brought lookups to zero, though for most models I can't separate that from the scrub. Once the lookup was gone, the models talked far more about remembering the fix, but the memory was mostly not real. Of 108 commit hashes they cited while "remembering", one exists in the repository and it is not the fix. Runs that named the benchmark peeked more often, but I didn't manipulate awareness, so that part is correlation.

## Why it matters

An agent's score can include reading the answer, and once you block that, its own account of what it did can't be taken at face value either. Both matter if we treat agent transcripts as evidence about the model.

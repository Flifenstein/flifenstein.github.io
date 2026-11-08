---
title: Do Evaluation Awareness Instruments Agree?
summary: Do a linear probe, the Jacobian lens and chain-of-thought voicing agree on evaluation awareness? SPAR Fall 2026, with Julius Šula, María Marino, Netzer Epstein and Neta Ravid.
year: "2026"
context: SPAR Fall 2026 · mentors Netzer Epstein & Neta Ravid
role: "one of three fellows on the project; I own the chain-of-thought voicing instrument. The probe and J-lens results are my teammates'."
venue: "SPAR, in progress"
status: midterm report out, paper planned
featured: true
order: 1
links:
  - { label: midterm report (PDF), url: "/research/spar-midterm-report.pdf" }
---

## Question

Do different methods for measuring eval awareness agree, and when they don't, what is each one actually picking up?

## What I did

I run the black-box instrument, chain-of-thought voicing. I sample reasoning traces from Qwen3.5-27B and have an LLM judge label every place where the model says it is being tested, each claim backed by a quote from the trace. I validated it on our zero-tolerance set of unambiguous prompts before running it on 1,510 prompts from EvalAwareBench, MASK, FORTRESS and HarmBench, so its scores line up prompt by prompt with the probe and the J-lens.

## Where it stands

Preliminary results from the midterm say the instruments track different signals. The linear probe ranks evaluation above deployment prompts well (AUROC up to 0.90) but reads "You are not being evaluated." as evaluation, so it follows what a sentence is about rather than what it claims. Chain-of-thought voicing gets negation right, and it climbs from 9% to 45% of traces as benchmark-style cues pile up, while harmful content on its own barely moves it. The J-lens score barely tracks voicing across prompts (|ρ| ≤ 0.02 on 360 EvalAwareBench prompts, ρ = 0.14 on 448 discovery prompts), yet ablating the J-lens directions cuts voiced awareness from 27% to 12.5%, so those directions matter causally even where the scores disagree.

## Why it matters

Papers report that a model "is eval-aware" some share of the time, but that number comes from one instrument. If a probe, the Jacobian lens and the model's own reasoning disagree, the claim depends on which one you picked, and anyone correcting safety evals for awareness needs to know which instrument tracks what.

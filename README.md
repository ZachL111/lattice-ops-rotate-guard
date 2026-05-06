# lattice-ops-rotate-guard

`lattice-ops-rotate-guard` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for rotate scenarios with log and snapshot fixtures, replay consistency checks, and no credentials or hosted services.

## Reason For The Project

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Lattice Ops Rotate Guard Review Notes

Start with `dry-run spread` and `dry-run spread`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What It Does

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/lattice-ops-rotate-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The JavaScript addition stays small enough to inspect in one sitting.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Boundaries

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.

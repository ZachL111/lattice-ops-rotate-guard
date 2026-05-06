# lattice-ops-rotate-guard

`lattice-ops-rotate-guard` is a focused JavaScript codebase around develop a JavaScript command-oriented project for rotate scenarios with log and snapshot fixtures, replay consistency checks, and no credentials or hosted services. It is meant to be easy to inspect, run, and extend without a hosted service.

## Lattice Ops Rotate Guard Walkthrough

I would read the project from the outside in: command, fixture, model, then roadmap. That keeps the automation idea grounded in files that can be checked locally.

## Reason For The Project

I use this kind of project to make a rule visible before adding more machinery around it. The important part here is not the size of the codebase. It is that the input signals, scoring rule, fixture data, and expected output can all be checked in one sitting.

## Data Notes

`degraded` is the first example I would inspect because it lands on the `review` path with a score of 69. The broader file also keeps `degraded` at 69 and `surge` at 288, which gives the model a useful low-to-high spread.

## How It Is Put Together

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 178, with risk penalty 4, latency penalty 2, and weight bonus 6. The JavaScript version uses native modules and a small Node test path.

## Capabilities

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `surge` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Command Examples

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Check The Work

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Where Things Live

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Possible Extensions

- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Tradeoffs

The examples cover useful edges, not every edge. A larger version would add malformed-input tests, richer reports, and deeper domain parsers.

## Getting It Running

The only required setup is the local JavaScript toolchain. After cloning, stay in the repo root so fixture paths resolve correctly.

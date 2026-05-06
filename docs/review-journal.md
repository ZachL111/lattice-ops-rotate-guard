# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 162, lane `ship`
- `stress`: `rename risk`, score 165, lane `ship`
- `edge`: `operator cost`, score 176, lane `ship`
- `recovery`: `idempotence`, score 191, lane `ship`
- `stale`: `dry-run spread`, score 207, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.

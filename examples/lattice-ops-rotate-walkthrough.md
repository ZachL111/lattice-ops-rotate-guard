# Lattice Ops Rotate Guard Walkthrough

This note is the quickest way to read the extra review model in `lattice-ops-rotate-guard`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 162 | ship |
| stress | rename risk | 165 | ship |
| edge | operator cost | 176 | ship |
| recovery | idempotence | 191 | ship |
| stale | dry-run spread | 207 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.

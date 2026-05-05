import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 56,
    "capacity": 78,
    "latency": 23,
    "risk": 16,
    "weight": 7,
    "score": 122,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 89,
    "capacity": 99,
    "latency": 21,
    "risk": 21,
    "weight": 13,
    "score": 229,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 70,
    "capacity": 72,
    "latency": 18,
    "risk": 23,
    "weight": 11,
    "score": 150,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}

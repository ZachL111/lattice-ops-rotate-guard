import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 71, slack: 51, drag: 27, confidence: 50 };
assert.equal(domainReviewScore(item), 162);
assert.equal(domainReviewLane(item), "ship");

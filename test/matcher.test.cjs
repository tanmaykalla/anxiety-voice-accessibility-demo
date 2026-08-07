const assert = require("node:assert/strict");
const test = require("node:test");
const { match } = require("../matcher.js");

const choices = [
  { text: "We're eating alone for lunch! Again!" },
  { text: "We're not productive while eating!" },
  { text: "That white bread's bad for us!" },
];

test("matches authored text and explicit option forms", () => {
  assert.equal(match("alone for lunch", choices).index, 0);
  assert.equal(match("option B", choices).index, 1);
  assert.equal(match("third one", choices).index, 2);
});

test("does not confidently map unrelated speech", () => {
  assert.equal(match("what time is it", choices).confident, false);
  assert.equal(match("can you repeat that", choices).confident, false);
});

test("supports labeled icon attacks", () => {
  const attacks = [{ text: "Harm attack" }, { text: "Loneliness attack" }, { text: "Bad person attack" }];
  assert.equal(match("loneliness", attacks).index, 1);
});

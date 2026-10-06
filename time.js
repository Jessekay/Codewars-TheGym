function latestClock(a, b, c, d) {
  const target = [a, b, c, d].sort().join("");

  for (let t = 23 * 60 + 59; t >= 0; t--) {
    const hh = String(Math.floor(t / 60)).padStart(2, "0");
    const mm = String(t % 60).padStart(2, "0");

    if ((hh + mm).split("").sort().join("") === target) return `${hh}:${mm}`;
  }

  return null;
}


describe('Testing latestClock', () => {
  const {assert} = require('chai')
  
  function doTest(a, b, c, d, expected) {
    const actual = latestClock(a, b, c, d)
    assert.strictEqual(actual, expected, `latestClock(${a}, ${b}, ${c}, ${d})`)
  }
})
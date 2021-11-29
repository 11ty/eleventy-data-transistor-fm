const test = require("ava");
const TransistorFm = require("../TransistorFm");
// require('dotenv').config();

test("Starter", async t => {
  let episodes = await TransistorFm();
  t.true(episodes.length > 0);
  t.truthy(episodes[0].title);
  t.truthy(episodes[0].summary);
  t.truthy(episodes[0].url);
});
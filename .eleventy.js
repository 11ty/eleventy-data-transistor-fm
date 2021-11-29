const TransistorFm = require("./TransistorFm");
const pkg = require("./package.json");

require('dotenv').config();

module.exports = function(eleventyConfig, options = {}) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch(e) {
    console.log( `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}` );
  }

  let opts = Object.assign({
    envApiKey: "TRANSISTOR_FM_API_KEY",
    envApiKeyRequired: false,
    data: "transistorfm.episodes",
  }, options);

  let apiKey = process.env[opts.envApiKey];
  if(opts.envApiKeyRequired && !apiKey) {
    throw new Error(`The environment variable ${opts.envApiKey} is missing. Do you have an .env file?`)
  }

  eleventyConfig.addGlobalData(opts.data, async function() {
    return TransistorFm({
      apiKey
    });
  });
};
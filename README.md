# Eleventy Data Plugin: Transistor.fm

API Docs: https://developers.transistor.fm/#episodes

## Installation:

```sh
npm install @11ty/eleventy-data-transistor-fm
```

## Usage

```js
const TransistorFmPlugin = require("@11ty/eleventy-data-transistor-fm");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(TransistorFmPlugin);
};
```

### In a template

By default, the episodes are stored in `transistorfm.episodes` (this is configurable).

```
{% for episode in transistorfm.episodes %}
  {{ episode.title }}
{% endfor %}
```

### Use with an API key

By default, a Transistor FM API key is optional. If you want to use one, create a `.env` file and add an entry for `TRANSISTOR_FM_API_KEY`:

```
TRANSISTOR_FM_API_KEY=This is my key
```

You can make the key required or even change the name of the environment variable by passing options to your plugin.


### Pass in options


```js
const TransistorFmPlugin = require("@11ty/eleventy-data-transistor-fm");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(TransistorFmPlugin, {
    envApiKey: "TRANSISTOR_FM_API_KEY", // the name of the environment variable for the API key

    envApiKeyRequired: false, // fail if the environment variable is missing?

    data: "transistorfm.episodes", // where in Eleventy to store the return data
  });
};
```


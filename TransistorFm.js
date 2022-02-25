const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function(options = {}) {
  let { apiKey } = options;

  const request = await EleventyFetch('https://api.transistor.fm/v1/episodes', {
    duration: "1d",
    type: "json",
    fetchOptions: {
      headers: {
        "X-API-KEY": apiKey
      }
    }
  })

  const data = request.data.filter(episode => {
    return episode.attributes.status === "published";
  }).map(episode => {
    const { attributes } = episode;
    return {
      title: attributes.title,
      meta: {
        date: attributes.formatted_published_at,
        duration: attributes.duration_in_mmss.slice(0, 2) + " minutes",
        season: attributes.season,
        episode: attributes.number,
      },
      summary: attributes.formatted_summary,
      url: attributes.share_url,
      media: `${attributes.media_url}?src=site`,
      download: `${attributes.media_url}?download=true&src=site`,
      full_description: attributes.description,
    }
  });

  return data;
}
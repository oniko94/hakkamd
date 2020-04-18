const helpers = require('./helpers.js');

const MediaTags = {
    Image(link) {
        const { text, url } = helpers.separateTextAndURL(link.slice(1));
        return `<img src="${url}" alt="${text}"/>`;
    },
    Link(link) {
        const { text, url } = helpers.separateTextAndURL(link);
        return `<a href="${url}">${text}</a>`;
    }
};

module.exports = MediaTags;

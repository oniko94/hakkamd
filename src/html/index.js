const BasicTags = require('./BasicTags.js');
const FormattingTags = require('./FormattingTags.js');
const helpers = require('./helpers.js');
const MediaTags = require('./MediaTags.js');

const mdToHTMLMap = {
    '#': BasicTags.Heading,
    '-': BasicTags.List,
    '!': MediaTags.Image,
    '*': FormattingTags.Bold,
    '_': FormattingTags.Italic,
    '[': MediaTags.Link,
    '>': FormattingTags.Blockquote,
    '~': FormattingTags.Strikethrough,
    '@': FormattingTags.Spoiler,
    '`': FormattingTags.Code,
    '\\': function(line) {
        if (line.startsWith('\\')) {
            return line.slice(1, line.length);
        } else {
            return line;
        }
    },
    'default': BasicTags.Paragraph
};

module.exports = { BasicTags, FormattingTags, helpers, mdToHTMLMap, MediaTags };

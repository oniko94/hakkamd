const helpers = require('./helpers.js');
const html = require('../html');
/**
 * Transpile Markdown line to HTML tag
 * @param char {string} First character of the MD line
 * @param line {string} Markdown line
 * @returns {string} HTML
 */
function toHTML(char, line) {
    let tags = {
        '#': html.BasicTags.Heading,
        '-': html.BasicTags.List,
        '!': html.MediaTags.Image,
        '*': html.FormattingTags.Bold,
        '_': html.FormattingTags.Italic,
        '[': html.MediaTags.Link,
        '>': html.FormattingTags.Blockquote,
        '~': html.FormattingTags.Strikethrough,
        '@': html.FormattingTags.Spoiler,
        '`': html.FormattingTags.Code,
        'default': html.BasicTags.Paragraph
    };
    let isOrdered = helpers.isOrderedListItem(line);
    if (isOrdered) {
        return html.BasicTags.List(line, isOrdered);
    }
    if (tags[char]) {
        try {
            return tags[char](line);
        } catch (e) {
            return line;
        }
    }
    return tags['default'](line);
}

function generateHTMLText(textlines) {
    return textlines.join('\n');
}

module.exports = { toHTML, generateHTMLText };

const helpers = require('./helpers.js');
const html = require('../html');
/**
 * Transpile Markdown line to HTML tag
 * @param char {string} First character of the MD line
 * @param line {string} Markdown line
 * @returns {string} HTML
 */
function toHTML(char, line) {
    let isOrdered = helpers.isOrderedListItem(line);
    if (isOrdered) {
        return html.BasicTags.List(line, isOrdered);
    }
    if (html.mdToHTMLMap[char]) {
        try {
            return html.mdToHTMLMap[char](line);
        } catch (e) {
            return line;
        }
    }
    return html.mdToHTMLMap['default'](line);
}

function generateHTMLText(textlines) {
    return textlines.join('\n');
}

module.exports = { toHTML, generateHTMLText };

const helpers = require('../helpers.js');
const output = require('../output.js');
const processString = require('./processString.js');

/**
 * Top level parsing of each line
 * @param line {string}
 * @param tags {string[]}
 * @returns {string}
 */
function processLine(line, tags) {
    const firstChar = line.charAt(0);
    const words = processString(line);
    // If the line starts with one of the tags proceed to parsing
    if (tags.includes(firstChar) || helpers.isOrderedListItem(line)) {
        return output.toHTML(firstChar, line);
    }
    // Parse the strikethrough, spoiler and code tags if spotted outside of the paragraph
    if (['~', '@', '`'].includes(firstChar)) {
        // There's only one tag in the line, turn it into HTML
        if (words.length <= 1) {
            return output.toHTML(firstChar, line);
            // Process each separate entry in the line
        } else {
            return words.map(word => output.toHTML(word.charAt(0), word)).join('\n');
        }
    }
    // No special characters in the beginning of the line, so this is a regular paragraph
    if (words.length <= 1) {
        return line;
    } else {
        // Process each word from the string
        const p = words.map(word => processLine(word, ['*', '_', '[', '>', '@', '~', '`']));
        return output.toHTML(firstChar, p.join(' '));
    }
}

module.exports = processLine;

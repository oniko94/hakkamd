const Core = require('./Core');
const helpers = require('./helpers');

/**
 * Top level parsing of each line
 * @param line {string}
 * @param tags {string[]}
 * @returns {string}
 */
function parseLine(line, tags) {
    const firstChar = line.charAt(0);
    const words = Core.splitWords(line);
    // If the line starts with one of the tags proceed to parsing
    if (tags.includes(firstChar) || helpers.isNumeric(firstChar)) {
        return Core.buildHTML(firstChar, line);
    }
    // Parse the strikethrough, spoiler and code tags if spotted outside of the paragraph
    if (['~', '@', '`'].includes(firstChar)) {
        // There's only one tag in the line, turn it into HTML
        if (words.length <= 1) {
            return Core.buildHTML(firstChar, line);
        // Process each separate entry in the line
        } else {
            return words.map(word => Core.buildHTML(word.charAt(0), word)).join('\n');
        }
    }
    // No special characters in the beginning of the line, so this is a regular paragraph
    if (words.length <= 1) {
        return line;
    } else {
        // Process each word from the string
        const p = words.map(word => parseLine(word, ['*', '_', '[', '>', '@', '~', '`']));
        return Core.buildHTML(firstChar, p.join(' '));
    }
}

/**
 * Entry point of parser
 * @param input {string}
 * @returns {string}
 */
function parse(input) {
    const lines = input.split('\n\n');
    return lines.map(line => parseLine(line, ['#', '-', '!'])).join('\n');
}

module.exports = {
    parse
};

const Core = require('./Core');
const helpers = require('./helpers');

/**
 * Top level parsing of each line
 * @param line {string}
 * @returns {string}
 */
function processString(line, tags) {
    const firstChar = line.charAt(0);
    // If the line starts with one of the tags proceed to parsing
    if (tags.includes(firstChar) || helpers.isNumeric(firstChar)) {
        return Core.parseMarkdown(firstChar, line);
    // Parse the strikethrough, spoiler and code tags if spotted outside of the paragraph
    } else if (['~', '@', '`'].includes(firstChar)) {
        const words = Core.splitWords(line);
        // There's only one tag in the line, turn it into HTML
        if (words.length <= 1) {
            return Core.parseMarkdown(firstChar, line);
        // Process each separate entry in the line
        } else {
            return words.map(word => Core.parseMarkdown(word.charAt(0), word)).join('\n');
        }
    } else {
        // It's a line of text, need to break it up into words to parse each one
        const words = Core.splitWords(line);
        // It's a single word
        if (words.length <= 1) {
            return line;
        } else {
            // Process each word from the string and display them as a paragraph
            let para = words.map(word => processString(word, ['*', '_', '[', '>', '@', '~', '`']));
            return `<p>${para.join(' ')}</p>`;
        }
    }
}

/**
 * Entry point of parser
 * @param input {string}
 * @returns {string}
 */
function parse(input) {
    const lines = input.split('\n\n');
    return lines.map(line => processString(line, ['#', '-', '!'])).join('\n');
}

module.exports = {
    parse
};

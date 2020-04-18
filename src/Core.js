const BasicTags = require('./BasicTags.js');
const FormatTags = require('./FormattingTags.js');
const helpers = require('./helpers');
const MediaTags = require('./MediaTags.js');

const Core = {
    /**
     * Parses the Markdown syntax
     * @param char {string} First character of the MD line
     * @param line {string} Markdown line
     * @returns {string} HTML
     */
    buildHTML(char, line) {
        const num = helpers.isNumeric(char) ? char : false;
        let tags = {
            '#': BasicTags.Heading,
            '-': BasicTags.List,
            [num]: BasicTags.List,
            '!': MediaTags.Image,
            '*': FormatTags.Bold,
            '_': FormatTags.Italic,
            '[': MediaTags.Link,
            '>': FormatTags.Blockquote,
            '~': FormatTags.Strikethrough,
            '@': FormatTags.Spoiler,
            '`': FormatTags.Code,
            'default': BasicTags.Paragraph
        };
        if (char === '-' || num) {
            return tags[char](line, helpers.isNumeric(char));
        }
        return (tags[char] || tags['default'])(line);
    },
    /**
     * Builds a valid Markdown string from characters
     * @param array {string[]} An array of characters from the line
     * @param index {number} The index of current character in the array
     * @param word {string} The word to build
     * @param closingChar {string} The last character of a Markdown tag
     * @returns {*[]} Returns a built word and the actual index for the loop
     */
    parseWord(array, index, word, closingChar) {
        let i = index;
        for (i; i <= array.length -1; ++i) {
            word += array[i];
            if (array[i + 1] === closingChar) break;
        }
        word += closingChar;
        index = i + 1;
        i = 0;
        return [word, index];
    },
    /**
     * Breaks down a single line to an array of separate words including valid Markdown
     * @param str {string} a single line of markdown input
     * @returns {string[]} individual words from the line
     */
    splitWords(str) {
        const charArr = str.split('');
        let result = [],
            word= '',
            i = 0;

        // Double-check that it's an actual word.
        const storeWord = (word) => {
            if (word && word !== '') {
                result.push(word);
            }
        };

        for (i; i <= charArr.length -1; ++i) {
            // Test whether it's plain text or Markdown
            if ( /[\*_\~\@\[\`]/.test(charArr[i])) {
                // If it starts with a square bracket it's a part of a link or an image tag, then close it with round one
                // Otherwise close it with the same character
                let closing = charArr[i] === '[' ? ')' : charArr[i];
                [word, i] = Core.parseWord(charArr, i, word, closing);
                storeWord(word);
                word = '';
                continue;
            }
            // Whitespace met, store the current word and start processing another
            if (charArr[i] === ' ' || charArr[i] === '\n') {
                storeWord(word);
                word = '';
                continue;
            }
            // The line is fully processed, store the last word and finish
            if (i === charArr.length - 1) {
                storeWord(word);
                word = '';
                break;
            } else {
                word += charArr[i];
            }
        }
        return result;
    }
};

module.exports = Core;

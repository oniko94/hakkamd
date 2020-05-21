import * as helpers from "../helpers";
import processWord from "./processWord";

/**
 * Splits a given string into characters to separate Markdown from other words
 * @param str {string} A line or a single word that may contain inner Markdown
 * @returns {string[]} Array of words in the line
 */
function processString(str) {
    const charArr = str.split('');
    let result = [],
        word= '',
        i = 0;

    // Double-check that it's an actual word.
    const storeWord = (word) => {
        if (word && word !== '') {
            result.push(word.trim());
        }
    };

    for (i; i <= charArr.length -1; ++i) {
        // Test whether it's plain text or Markdown
        if ( /[\*_\~\@\[\`]/.test(charArr[i])) {
            // If it starts with a square bracket it's a part of a link or an image tag, then close it with round one
            // Otherwise close it with the same character
            let closing = charArr[i] === '[' ? ')' : charArr[i];
            // If it's Markdown, we need to save it as a separate word with Markdown characters included
            [word, i] = processWord(charArr, i, word, closing);
            storeWord(word);
            word = '';
            continue;
        }
        // Process a numerical or an escaped string as a single word
        // Example result: ['6.000.000', 'of', 'selves']
        if (helpers.isNumeric(charArr[i]) || charArr[i] === '\\') {
            [word, i] = processWord(charArr, i, word, ' ');
            storeWord(word);
            word = '';
            continue;
        }
        // Whitespace met, store the current word and start processing another
        if (helpers.wordEndings.includes(charArr[i])) {
            storeWord(word);
            word = '';
            continue;
        }
        // The line is fully processed, store the last word and finish
        if (i === charArr.length - 1) {
            word += charArr[i];
            storeWord(word);
            word = '';
            break;
        } else {
            word += charArr[i];
        }
    }
    return result;
}

export default processString;

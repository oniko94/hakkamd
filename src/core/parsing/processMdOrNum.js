/**
 * Parses a Markdown string or numerical string
 * @param array {string[]} An array of characters from the line
 * @param index {number} The index of current character in the array
 * @param word {string} The word to build
 * @param closingChar {string} The last character of a Markdown tag
 * @returns {*[]} Returns a built word and the actual index for the loop
 */
function processMdOrNum(array, index, word, closingChar) {
    let i = index;
    for (i; i <= array.length -1; ++i) {
        const reachedClosingChar = closingChar !== '' && array[i + 1] === closingChar;
        word += array[i];
        if (reachedClosingChar) {
            word += array[i + 1];
            break;
        }
    }
    index = i + 1;
    return [word, index];
}

module.exports = processMdOrNum;

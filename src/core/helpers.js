/**
 * Checks whether the character is numeric
 * @param char {string}
 * @returns {boolean}
 */
function isNumeric(char) {
    return !isNaN(parseInt(char, 10));
}

function isOrderedListItem(line) {
    const isOrderedItem = isNumeric(line.charAt(0)) && line.charAt(1) === '.';
    const isFraction = isNumeric(line.charAt(2));
    return isOrderedItem && !isFraction;
}

const wordEndings = [' ', '\n'];

export { isNumeric, isOrderedListItem, wordEndings };

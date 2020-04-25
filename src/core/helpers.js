module.exports = {
    /**
     * Checks whether the character is numeric
     * @param char {string}
     * @returns {boolean}
     */
    isNumeric(char) {
        return !isNaN(parseInt(char, 10));
    },
    isOrderedListItem(line) {
        const isOrderedItem = this.isNumeric(line.charAt(0)) && line.charAt(1) === '.';
        const isFraction = this.isNumeric(line.charAt(2));
        return isOrderedItem && !isFraction;
    },
    wordEndings: [' ', '\n']
};

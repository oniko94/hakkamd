module.exports = {
    /**
     * Used for <a> and <img> tags. Text: alt or link text;
     * @param link {string} Markdown link
     * @returns {{text: string, url: string}}
     */
    separateTextAndURL(link) {
        const parts = link.split(']');
        const text = parts[0].slice(1);
        const url = parts[1].slice(1, -1);
        return { text, url };
    },
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
    }
};

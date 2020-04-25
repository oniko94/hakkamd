class InvalidLinkFormatError extends Error {
    constructor() {
        super();
        this.message = 'Link format is invalid.';
        this.name = 'InvalidLinkFormatError';
    }
}

module.exports = {
    /**
     * Used for <a> and <img> tags. Text: alt or link text;
     * @param link {string} Markdown link
     * @returns {{text: string, url: string}}
     */
    separateTextAndURL(link) {
        // Test text part contained in square brackets
        const text = link.match(/\[(.*?)\]/);
        // Test URL part contained in round brackets
        const url = link.match(/\((.*?)\)/);
        if (text && url) {
            return { text: text[1], url: url[1] };
        }
        throw new InvalidLinkFormatError();
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
    },
    InvalidLinkFormatError
};

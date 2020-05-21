class InvalidLinkFormatError extends Error {
    constructor() {
        super();
        this.message = 'Link format is invalid.';
        this.name = 'InvalidLinkFormatError';
    }
}

/**
 * Used for <a> and <img> tags. Text: alt or link text;
 * @param link {string} Markdown link
 * @returns {{text: string, url: string}}
 */
function separateTextAndURL(link) {
    // Test text part contained in square brackets
    const text = link.match(/\[(.*?)\]/);
    // Test URL part contained in round brackets
    const url = link.match(/\((.*?)\)/);
    if (text && url) {
        return {text: text[1], url: url[1]};
    }
    throw new InvalidLinkFormatError();
}

export {
    separateTextAndURL,
    InvalidLinkFormatError
};

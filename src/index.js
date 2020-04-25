const core = require('./core');

/**
 * Entry point of parser
 * @param input {string}
 * @returns {string}
 */
function parse(input) {
    return core.processMarkdownText(input);
}

module.exports = { parse };

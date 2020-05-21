import { processMarkdownText } from './core';

/**
 * Entry point of parser
 * @param input {string}
 * @returns {string}
 */
export function parse(input) {
    return processMarkdownText(input);
}

import * as helpers from './helpers';
import { BasicTags, mdToHTMLMap } from '../html';
/**
 * Transpile Markdown line to HTML tag
 * @param char {string} First character of the MD line
 * @param line {string} Markdown line
 * @returns {string} HTML
 */
function toHTML(char, line) {
    let isOrdered = helpers.isOrderedListItem(line);
    if (isOrdered) {
        return BasicTags.List(line, isOrdered);
    }
    if (mdToHTMLMap[char]) {
        try {
            return mdToHTMLMap[char](line);
        } catch (e) {
            return line;
        }
    }
    return mdToHTMLMap['default'](line);
}

function generateHTMLText(textlines) {
    return textlines.join('\n');
}

export { toHTML, generateHTMLText };

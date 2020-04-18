const FormattingTags = {
    parseBold(text) {
        return `<b>${text.slice(1, -1)}</b>`;
    },
    parseCode(text) {
        let apostrophes = 0,
            template = '';
        while (text.startsWith('`')) {
            text = text.slice(1);
            apostrophes++;

            if (apostrophes >= 3) {
                template = `<pre>${text.slice(3, -3)}</pre>`;
                break;
            }
            template = `<code>${text.slice(1, -1)}</code>`;
        }
        return template;
    },
    parseItalic(text) {
        return `<i>${text.slice(1, -1)}</i>`;
    },
    parseSpoiler(text) {
        return `<span class="spoiler">${text.slice(1, -1)}</span>`;
    },
    parseStrikethru(text) {
        return `<s>${text.slice(1, -1)}</s>`;
    },
    parseQuote(text) {
        return `<blockquote>${text.slice(1)}</blockquote>`;
    }
};

module.exports = FormattingTags;

const FormattingTags = {
    Blockquote(text) {
        return `<blockquote>${text.slice(1)}</blockquote>`;
    },
    Bold(text) {
        return `<b>${text.slice(1, -1)}</b>`;
    },
    Code(text) {
        let apostrophes = 0,
            template = '';
        while (text.startsWith('`')) {
            text = text.slice(1);
            apostrophes++;

            if (apostrophes >= 3) {
                template = `<pre>${text.slice(3, -3)}</pre>`;
                break;
            } else {
                template = `<code>${text.slice(1, -1)}</code>`;
            }
        }
        return template;
    },
    Italic(text) {
        return `<i>${text.slice(1, -1)}</i>`;
    },
    Spoiler(text) {
        return `<span class="spoiler">${text.slice(1, -1)}</span>`;
    },
    Strikethrough(text) {
        return `<s>${text.slice(1, -1)}</s>`;
    }
};

module.exports = FormattingTags;

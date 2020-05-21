const FormattingTags = {
    Blockquote(text) {
        return `<blockquote>${text.slice(1).trim()}</blockquote>`;
    },
    Bold(text) {
        return `<b>${text.slice(1, -1).trim()}</b>`;
    },
    Code(text) {
        let i = 0,
            template = '';
        text = text.trim();

        while (text.startsWith('`')) {
            text = text.slice(1);
            if (text.endsWith('`')) {
                text = text.slice(0, -1);
            }
            i++;

            template = `<code>${text}</code>`;

            if (i === 3) {
                template = `<pre>${text}</pre>`;
                break;
            }
        }
        return template;
    },
    Italic(text) {
        return `<i>${text.slice(1, -1).trim()}</i>`;
    },
    Spoiler(text) {
        return `<span class="spoiler">${text.slice(1, -1).trim()}</span>`;
    },
    Strikethrough(text) {
        return `<s>${text.slice(1, -1).trim()}</s>`;
    }
};

export default FormattingTags;

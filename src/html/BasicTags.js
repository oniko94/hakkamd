const BasicTags = {
    /**
     * Parses Markdown headings to valid HTML headings
     * @param h {string} Markdown heading
     * @returns {string} HTML heading
     */
    Heading(h) {
        let hType = 0;
        while(h.startsWith('#')) {
            h = h.slice(1);
            hType++;

            if (hType >= 6) break;
        }

        return `<h${hType}>${h.trim()}</h${hType}>`;
    },
    /**
     * Parses Markdown lists to valid HTML ones.
     * @param list {string} Markdown list
     * @param ordered {boolean}
     * @returns {string} Ordered or unordered HTML list.
     */
    List(list, ordered=false) {
        let result = [];
        if (ordered) {
            list = list.replace(/[0-9]\./g, '');
            result.push('<ol>', '</ol>');
        } else {
            result.push('<ul>', '</ul>');
        }
        const items = list.trim().split('\n').map(item => {
            if (item.startsWith('-')) {
                item = item.slice(1);
            }
            return `<li>${item.trim()}</li>`;
        });
        result.splice(1, 0, ...items);
        return result.join('\n');
    },
    Paragraph(p) {
        return `<p>${p}</p>`;
    }
};

export default BasicTags;

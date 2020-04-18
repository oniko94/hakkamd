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

        return `<h${hType}>${h}</h${hType}>`;
    },
    /**
     * Parses Markdown lists to valid HTML ones.
     * @param list {string} Markdown list
     * @param ordered {boolean}
     * @returns {string} Ordered or unordered HTML list.
     */
    List(list, ordered=false) {
        let result = list.split('\n').map(item => {
            return `<li>${item.slice(2)}</li>`;
        });
        if (ordered) {
            result.unshift('<ol>');
            result.push('</ol>');
        } else {
            result.unshift('<ul>');
            result.push('</ul>');
        }
        return result.join('\n');
    },
    Paragraph(p) {
        return `<p>${p}</p>`;
    }
};

module.exports = BasicTags;

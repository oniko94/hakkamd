import { separateTextAndURL } from './helpers';

const MediaTags = {
    /**
     * @return {string}
     */
    Image(link) {
        try {
            const linkParts = separateTextAndURL(link);
            return `<img src="${linkParts.url}" alt="${linkParts.text}"/>`;
        } catch (e) {
            console.error('Parsing error: invalid image format.');
            throw e;
        }
    },
    /**
     * @return {string}
     */
    Link(link) {
        try {
            const linkParts = separateTextAndURL(link);
            return `<a href="${linkParts.url}">${linkParts.text}</a>`;
        } catch (e) {
            console.error('Parsing error: invalid anchor tag format.');
            throw e;
        }
    }
};

export default MediaTags;
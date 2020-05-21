import { separateTextAndURL } from "./helpers";

const MediaTags = {
    Image(link) {
        try {
            const linkParts = separateTextAndURL(link);
            return `<img src="${linkParts.url}" alt="${linkParts.text}"/>`;
        } catch (e) {
            throw e;
        }
    },
    Link(link) {
        try {
            const linkParts = separateTextAndURL(link);
            return `<a href="${linkParts.url}">${linkParts.text}</a>`;
        } catch (e) {
            throw e;
        }
    }
};

export default MediaTags;
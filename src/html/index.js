import BasicTags  from './BasicTags';
import FormattingTags from './FormattingTags';
import * as helpers from './helpers';
import MediaTags from './MediaTags';

const mdToHTMLMap = {
    '#': BasicTags.Heading,
    '-': BasicTags.List,
    '!': MediaTags.Image,
    '*': FormattingTags.Bold,
    '_': FormattingTags.Italic,
    '[': MediaTags.Link,
    '>': FormattingTags.Blockquote,
    '~': FormattingTags.Strikethrough,
    '@': FormattingTags.Spoiler,
    '`': FormattingTags.Code,
    '\\': function(line) {
        if (line.startsWith('\\')) {
            return line.slice(1, line.length);
        } else {
            return line;
        }
    },
    'default': BasicTags.Paragraph
};

export { BasicTags, FormattingTags, helpers, mdToHTMLMap, MediaTags };

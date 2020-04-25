const assert = require('assert');
const { FormattingTags } = require('../../src/html');

describe('FormattingTags', function() {
    describe('Blockquote', function() {
        it('Should create a `<blockquote>` HTML tag from given Markdown', function() {
            const md = '> This is a quote';
            const expected = '<blockquote>This is a quote</blockquote>';
            assert.equal(FormattingTags.Blockquote(md), expected);
        });
    });
    describe('Bold', function() {
        it('Should create a `<b>` HTML tag from given Markdown', function() {
            const md = '* This text is bold*';
            const expected = '<b>This text is bold</b>';
            assert.equal(FormattingTags.Bold(md), expected);
        });
    });
    describe('Code', function() {
        it('Should create a `<pre>` HTML tag if 3 apostrophes', function() {
            const md = '```\n' +
                        'int main() {\n' +
                        '  puts("Hello, world!");\n' +
                        '  return 0;\n' +
                        '}\n```';
            const expected = '<pre>\n' +
                             'int main() {\n' +
                             '  puts("Hello, world!");\n' +
                             '  return 0;\n' +
                             '}\n</pre>';
            assert.equal(FormattingTags.Code(md), expected);
        });
        it('Should create a `<code>` HTML tag if 1 apostrophe', function() {
            const md = '`div#test`';
            const expected = '<code>div#test</code>';
            assert.equal(FormattingTags.Code(md), expected);
        });
        it('Should create a `<code>` HTML tag if 1 <= apostrophes < 3 and remove the excess', function() {
            const md='``div#test``';
            const expected = '<code>div#test</code>';
            assert.equal(FormattingTags.Code(md), expected);
        });
    });
    describe('Italic', function() {
        it('Should create an `<i>` HTML tag from given Markdown', function() {
            const md = '_This is italicized text_';
            const expected = '<i>This is italicized text</i>';
            assert.equal(FormattingTags.Italic(md), expected);
        });
    });
    describe('Spoiler', function() {
        it('Should create a `<span class="spoiler">` tag from given Markdown', function() {
            const md = '@ This is a spoiler@';
            const expected = '<span class="spoiler">This is a spoiler</span>';
            assert.equal(FormattingTags.Spoiler(md), expected);
        });
    });
    describe('Strikethrough', function () {
       it('Should create a `<s>` tag from given Markdown', function() {
           const md = '~ This text is wrong ~';
           const expected = '<s>This text is wrong</s>';
           assert.equal(FormattingTags.Strikethrough(md), expected);
       })
    });
});

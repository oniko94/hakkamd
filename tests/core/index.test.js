import assert from 'assert';
import * as core from '../../src/core';

describe('Core', function () {
    describe('processMarkdownText', function () {
        it('Should transpile multiline MD text to HTML', function() {
            const md = '# Test\n\n' +
                       'This is *test* _Markdown_.\n\n' +
                       '### It\'s:\n\n' +
                       '- fast\n' +
                       '- simple\n' +
                       '- awesome';

            const expected = '<h1>Test</h1>\n' +
                             '<p>This is <b>test</b> <i>Markdown</i> .</p>\n' +
                             '<h3>It\'s:</h3>\n' +
                             '<ul>\n' +
                             '<li>fast</li>\n' +
                             '<li>simple</li>\n' +
                             '<li>awesome</li>\n' +
                             '</ul>';
            assert.equal(core.processMarkdownText(md), expected);
        });
        it('Should transpile correctly lines starting with an escaped character', function () {
            const md = '\\#test \\#test';
            const expected = '<p>#test #test</p>';
            assert.equal(core.processMarkdownText(md), expected);
        });
        it('Should transpile correctly lines with escaped characters inside', function () {
            const md = 'Test \\>test \\* test \\#test \\- test';
            const expected = '<p>Test >test * test #test - test</p>';
            assert.equal(core.processMarkdownText(md), expected);
        });
        it('Should transpile one-line MD text to HTML', function () {
            const md = 'This is a paragraph with *bold*, _italic_ and ~strikethrough~';
            const expected = '<p>This is a paragraph with <b>bold</b> , <i>italic</i> and <s>strikethrough</s></p>';
            assert.equal(core.processMarkdownText(md), expected);
        });
    });
});

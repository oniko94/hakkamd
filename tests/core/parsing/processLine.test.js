const assert = require('assert');
const { parsing } = require('../../../src/core');

describe('Core.Parsing', function() {
    describe('processLine', function() {
        it('Should process MD to HTML if firstChar in given tags', function() {
            const md = '# Header go broom';
            const expected = '<h1>Header go broom</h1>';
            assert.equal(parsing.processLine(md, ['#']), expected);
        });
        it('Should process the ordered list on spot even if no tags given', function () {
            const md = '1. One\n1.Two\n1.Three';
            const expected = '<ol>\n' +
                             '<li>One</li>\n' +
                             '<li>Two</li>\n' +
                             '<li>Three</li>\n' +
                             '</ol>';
            assert.equal(parsing.processLine(md, []), expected);
        });
        it('Should process strikethrough and spoiler outside paragraph', function() {
            const md = '~Strikethrough~\n\n@spoiler@';
            const expected = '<s>Strikethrough</s>\n<span class="spoiler">spoiler</span>';
            assert.equal(parsing.processLine(md, ['#']), expected);
        });
        it('Should process nested Markdown', function () {
            const md = 'Test *test* _test_ `test`';
            const expected = '<p>Test <b>test</b> <i>test</i> <code>test</code></p>';
            assert.equal(parsing.processLine(md, ['#']), expected)
        });
    });
});

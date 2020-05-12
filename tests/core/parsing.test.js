const assert = require('assert');
const { parsing } = require('../../src/core');

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
    describe('processString', function () {
        it('Should process Markdown as a separate word', function() {
            const md = 'This is a *bold text*';
            const expected = ['This', 'is', 'a', '*bold text*'];
            assert.deepEqual(parsing.processString(md), expected);
        });
        it('Should process numeric as a separate word', function() {
            const md = 'There are 100000000 stars';
            const expected = ['There', 'are', '100000000', 'stars'];
            assert.deepEqual(parsing.processString(md), expected);
        });
        it('Should store a word when meeting a whitespace or new line', function() {
            const md = 'Nowhitespacehere\n'
            const expected = ['Nowhitespacehere'];
            assert.deepEqual(parsing.processString(md), expected);
        });
        it('Should store the last character met before return', function() {
            const md = 'Test, test, [test], test!';
            const expectedChar = '!';
            const result = parsing.processString(md);
            const lastWord = result[result.length - 1];
            assert.equal(lastWord[lastWord.length - 1], expectedChar);
        });
    });
    describe('processWord', function() {
        it('Should process chars in arr as a single word starting from given index and up to given final char', function() {
            const arr = 'Test string. Test'.split('');
            const result = [];
            const expected = ['T', 'e', 's', 't', ' ', 'string.', ' ', 'T', 'e', 's', 't'];
            let word = '', i = 0;
            for (i; i <= arr.length - 1; ++i) {
                if (i === 5) {
                    [word, i] = parsing.processWord(arr, i, word, '.');
                    result.push(word);
                } else {
                    result.push(arr[i]);
                }
            }
            assert.deepEqual(result, expected);
        });
    });
});

const assert = require('assert');
const { parsing } = require('../../../src/core');

describe('Core.Parsing', function() {
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
});

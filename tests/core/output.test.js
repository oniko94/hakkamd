const assert = require('assert');
const expect = require('chai').expect;
const { output } = require('../../src/core');

describe('Core.Output', function() {
   describe('toHTML', function() {
       it('Should transpile given MD to respective HTML tag', function() {
           const md = '> This is a blockquote';
           const firstChar = '>';
           const expected = '<blockquote>This is a blockquote</blockquote>';
           assert.equal(output.toHTML(firstChar, md), expected);
       });
       it('Should transpile given MD to HTML paragraph if firstChar is non-special', function() {
           let md = 'This is a regular paragraph',
               firstChar = 'T',
               expected = '<p>This is a regular paragraph</p>';
           assert.equal(output.toHTML(firstChar, md), expected);
           md = '$100 fine if this is not a paragraph';
           firstChar = '$';
           expected = '<p>$100 fine if this is not a paragraph</p>';
           assert.equal(output.toHTML(firstChar, md), expected);
       });
   });
   describe('generateHTMLText', function() {
       it('Should compile HTML lines to single HTML text', function() {
           const testUL = '<ul>\n' +
                          '<li>One</li>\n' +
                          '<li>Two</li>\n' +
                          '<li>Three</li>\n' +
                          '</ul>';
           const textlines = ['<h1>Header</h1>', '<p>Fancy <i>paragraph</i></p>', testUL];
           const expected = '<h1>Header</h1>\n' +
                            '<p>Fancy <i>paragraph</i></p>\n' +
                            testUL;
           assert.equal(output.generateHTMLText(textlines), expected);
       });
   });
});

const assert = require('assert');
const expect = require('chai').expect;
const { BasicTags } = require('../../src/html');
const { parse } = require('../../src');

describe('BasicTags', function() {
    describe('List', function() {
       it('Should create an unordered list', function() {
           const md = '- one\n' +
                      '- two\n' +
                      '- three\n';
           const expected = '<ul>\n' +
                            '<li>one</li>\n' +
                            '<li>two</li>\n' +
                            '<li>three</li>\n' +
                            '</ul>';
           assert.equal(BasicTags.List(md), expected);
       });
       it('Should create an ordered list', function() {
           const md = '1. one\n' +
                      '1. two\n' +
                      '1. three\n';
           const expected = '<ol>\n' +
                            '<li>one</li>\n' +
                            '<li>two</li>\n' +
                            '<li>three</li>\n' +
                            '</ol>';
           assert.equal(BasicTags.List(md, true), expected);
       });
       it('Should not create an ordered list in place of text starting with a fraction', function () {
          const text = '3.5 dollars' ;
          const unexpected = '<ol>';
          const result = parse(text);
          expect(result.startsWith(unexpected)).to.be.false;
       });
    });
});

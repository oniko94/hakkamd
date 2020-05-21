import assert from 'assert';
import { helpers } from '../../src/html';

describe('HTML.helpers', function() {
    describe('separateTextAndURL', function() {
        it('Should break a Markdown piece into text and url', function() {
            const md = '[text](url)';
            const expected = { text: 'text', url: 'url' };
            assert.deepEqual(helpers.separateTextAndURL(md), expected);
        });
        it('Should raise an exception if link is invalid', function() {
            assert.throws(function() {
                helpers.separateTextAndURL('[justSomeText]');
            }, helpers.InvalidLinkFormatError);
            assert.throws(function() {
                helpers.separateTextAndURL('[missingBracket(link)');
            }, helpers.InvalidLinkFormatError);
            assert.throws(function() {
                helpers.separateTextAndURL('<invalid${Characters}');
            }, helpers.InvalidLinkFormatError);
        });
    });
});

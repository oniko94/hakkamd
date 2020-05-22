import assert from 'assert';
import { MediaTags, helpers } from '../../src/html';

describe('MediaTags', function() {
    describe('Image', function() {
        it('Should create an image tag from given Markdown', function() {
            const md = '![imgAlt](imgUrl)';
            const expected = '<img src="imgUrl" alt="imgAlt"/>';
            assert.equal(MediaTags.Image(md), expected);
        });
        it('Should throw an exception if invalid input is passed', function() {
            assert.throws(function() {
                MediaTags.Image('[invalid(Image)');
            }, helpers.InvalidLinkFormatError);
        });
    });
    describe('Link', function() {
        it('Should create an anchor tag from given Markdown', function() {
            const md = '[linkText](linkUrl)';
            const expected = '<a href="linkUrl">linkText</a>';
            assert.equal(MediaTags.Link(md), expected);
        });
        it('Should throw an exception if invalid input is passed', function() {
            assert.throws(function() {
                MediaTags.Link('[invalid(Link)');
            }, helpers.InvalidLinkFormatError);
        });
    });
});

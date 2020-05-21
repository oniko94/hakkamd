import assert from 'assert';
import { MediaTags } from '../../src/html';

describe('MediaTags', function() {
    describe('Image', function() {
        it('Should create an image tag from given Markdown', function() {
            const md = '![imgAlt](imgUrl)';
            const expected = '<img src="imgUrl" alt="imgAlt"/>';
            assert.equal(MediaTags.Image(md), expected);
        });
    });
    describe('Link', function() {
        it('Should create an anchor tag from given Markdown', function() {
            const md = '[linkText](linkUrl)';
            const expected = '<a href="linkUrl">linkText</a>';
            assert.equal(MediaTags.Link(md), expected);
        })
    });
});

import { expect } from 'chai';
import * as helpers from "../../src/core/helpers";

describe('Core.helpers', function() {
    describe('isNumeric',function() {
        it('Should return true if a number is passed', function() {
            expect(helpers.isNumeric('1')).to.be.true;
        });
        it('Should return false if any other character is passed', function() {
            expect(helpers.isNumeric('@')).to.be.false;
            expect(helpers.isNumeric('A')).to.be.false;
        });
    });
    describe('isOrderedListItem', function() {
        it('Should return true if it\'s an ordered list entry starting with number + dot', function () {
            expect(helpers.isOrderedListItem('1. First step')).to.be.true;
        });
        it('Should return false if it\'s just an integer', function() {
            expect(helpers.isOrderedListItem("15 men on the dead man's chest")).to.be.false;
        });
        it('Should return false if it\'s a fraction', function() {
            expect(helpers.isOrderedListItem('3.14 is Pi'));
        })
    });
});

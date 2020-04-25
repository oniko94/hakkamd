const assert = require('assert');
const { parsing } = require('../../../src/core');

describe('Core.Parsing', function() {
    describe('processMdOrNum', function() {
        it('Should process chars in arr as a single word starting from given index and up to given final char', function() {
            const arr = 'Test string. Test'.split('');
            const result = [];
            const expected = ['T', 'e', 's', 't', ' ', 'string.', ' ', 'T', 'e', 's', 't'];
            let word = '', i = 0;
            for (i; i <= arr.length - 1; ++i) {
                if (i === 5) {
                    [word, i] = parsing.processMdOrNum(arr, i, word, '.');
                    result.push(word);
                } else {
                    result.push(arr[i]);
                }
            }
            assert.deepEqual(result, expected);
        });
    });
});

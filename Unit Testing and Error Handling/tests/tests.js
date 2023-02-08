const {expect} = require('chai');

const isOddOrEven = require('../test');

describe('isOddOrEven', () => {
    it('isString', () => {
        expect(isOddOrEven(3)).to.undefined;
    });
    
});
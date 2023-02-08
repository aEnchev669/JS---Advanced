const {expect} = require('chai');

const isOddOrEven = require('../tess.js');

describe('isOddOrEven', () => {
    it('isString', () => {
        expect(isOddOrEven(3)).to.undefined;
    });
    
});
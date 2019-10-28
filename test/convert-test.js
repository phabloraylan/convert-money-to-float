const chai = require('chai');
const moneyToFloat = require('./../index');

const assert = chai.assert;

describe('Tests', () => {
    it('Test: (R$) Convert money to float', () => {
        assert.equal(moneyToFloat("R$ 1.000,00"), 1000.00);
    });
    it('Test: (US$) Convert money to float', () => {
        assert.equal(moneyToFloat("US$ 1.000,00"), 1000.00);
    });
    it('Test: Convert money to float without symbol', () => {
        assert.equal(moneyToFloat("1.000,00"), 1000.00);
    });
});
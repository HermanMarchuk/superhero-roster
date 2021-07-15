const {pow} = require('../dev/functions')
const {expect} = require('chai');

describe('Pow', () => {

  it('C123', () => {
    const expectedResult = 27;
    const actualResult = pow(3,3);

    expect(expectedResult).to.eql(actualResult);
  });

  it('C124', () => {
    const powResult = pow(2,2);
    const expectedType = 'number';
    const actualType = typeof powResult;

    expect(expectedType).to.eql(actualType);
  });

  it('C125', () => {
    const powResult = pow(-2, -2);

    expect(powResult).to.be.lessThan(0);
  });
});

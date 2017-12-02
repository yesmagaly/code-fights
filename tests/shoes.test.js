const pairOfShoes = require('../shoes');
describe('pairOfShoes', () => {
  it('should find a pair of shoes', () => {
    const arr = [[0, 21]]
    expect(pairOfShoes(arr)).toBe(false);
  });

});

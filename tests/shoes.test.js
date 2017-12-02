const pairOfShoes = require('../shoes');
describe('pairOfShoes', () => {
  it('should find a pair of shoes: [[1, 21]]', () => {
    const arr = [[1, 21]]
    expect(pairOfShoes(arr)).toBe(false);
  });

  it('should find a pair of shoes: [[1, 21], [0, 21]]', () => {
    const arr = [[1, 21], [0, 21]]
    expect(pairOfShoes(arr)).toBe(true);
  });

  it('should find a pair of shoes: [[0,23], [1,21], [1,23], [0,21], [1,22], [0,22]]', () => {
    const arr = [
      [0,23],
      [1,21],
      [1,23],
      [0,21],
      [1,22],
      [0,22]
    ]

    expect(pairOfShoes(arr)).toBe(true);
  });

  it('should find a pair of shoes: [[0,23], [1,21], [1,23], [0,21]]', () => {
    const arr = [
      [0,23],
      [1,21],
      [1,23],
      [0,21]
    ]

    expect(pairOfShoes(arr)).toBe(true);
  });
});

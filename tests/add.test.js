const add = require('../add');
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should add two numbers', () => {
    expect(add(5, 8)).toBe(13);
  });
});

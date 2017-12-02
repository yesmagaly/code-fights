const centuryFromYear = require('../centuryFromYear');
describe('centuryFromYear', () => {
  it('should get century from: 50 ', () => {
    expect(centuryFromYear(50)).toBe(1);
  });

  it('should get century from: 100 ', () => {
    expect(centuryFromYear(100)).toBe(1);
  });

  it('should get century from: 130 ', () => {
    expect(centuryFromYear(130)).toBe(2);
  });

  it('should get century from: 200 ', () => {
    expect(centuryFromYear(200)).toBe(2);
  });
  it('should get century from: 1905 ', () => {
    expect(centuryFromYear(1905)).toBe(20);
  });

  it('should get century from: 1700 ', () => {
    expect(centuryFromYear(1700)).toBe(17);
  });

  it('should get century from: 2005 ', () => {
    expect(centuryFromYear(2005)).toBe(21);
  });

  it('should get century from: 2006 ', () => {
    expect(() => {centuryFromYear(2006)}).toThrow('Invalid year');
  });

 //  expect(() => {
 //   drinkFlavor('octopus');
 // }).toThrow()
 
});

const task = require('./task');

describe('Task', () => {

  it('Should return properly sorted array of numbers', () => {
    const testArray= [20, 35, 40, 45];
    const sortedArray = [20, 35, 40, 45];
    const result = task(testArray);
    expect(result).toEqual(sortedArray);
  });

  it('Should return properly sorted array of numbers', () => {
    const testArray = [20, 15, 10, 2];
    const sortedArray = [2, 10, 15, 20];
    const result = task(testArray);
    expect(result).toEqual(sortedArray);
  });

  it('Should return properly sorted array of numbers as strings', () => {
    const testArray = ['-15', '-10', '-20', '-2'];
    const sortedArray = ['-20', '-15', '-10', '-2'];
    const result = task(testArray);
    expect(result).toEqual(sortedArray);
  });
});

const task = require('./task');

describe('Task', () => {
  it('Should return 1', () => {
    const result = task();
    expect(result).toEqual(1);
  })
});

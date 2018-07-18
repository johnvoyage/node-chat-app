const expect = require('expect')

const { isRealString } = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const testResult = isRealString(true);

    expect(testResult).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const testResult = isRealString('     ');

    expect(testResult).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const testResult = isRealString('LOTR');

    expect(testResult).toBe(true);
  });
});

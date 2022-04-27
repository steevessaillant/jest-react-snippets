import isMultipleOf10 from './logic/math/isMultipleOf10'

describe("isMultipleOf10 should return a boolean value", () => {
  test('should be true or', () => {
    expect(isMultipleOf10(20)).toBeTruthy();
  });
  test('should be false', () => {
    expect(isMultipleOf10(9)).toBeFalsy();
  });
  
});

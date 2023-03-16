function analyzeArray(arr) {
  if (arr.length === 0) {
    throw new Error('Cannot analyze an empty array.');
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const { length } = arr;

  return {
    average: avg, min, max, length,
  };
}

// Jest tests
describe('analyzeArray', () => {
  test('returns correct object for array of positive integers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test('returns correct object for array of negative integers', () => {
    expect(analyzeArray([-5, -4, -3, -2, -1])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });

  test('returns correct object for array of mixed integers', () => {
    expect(analyzeArray([-3, 0, 3, -2, 2])).toEqual({
      average: 0,
      min: -3,
      max: 3,
      length: 5,
    });
  });

  test('throws error for empty array', () => {
    expect(() => analyzeArray([])).toThrow('Cannot analyze an empty array.');
  });
});

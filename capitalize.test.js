import capitalize from './capitalize';

test('capitalize a string', () => {
  expect(capitalize('abc')).toBe('ABC');
  expect(capitalize('mclAren')).toBe('MCLAREN');
});

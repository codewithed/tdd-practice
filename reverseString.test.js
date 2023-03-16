import reverseString from './reverseString';

test('check if string has been reversed', () => {
  expect(reverseString('racecar')).toBe('racecar');
  expect(reverseString('varia')).toBe('airav');
});

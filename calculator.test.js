import calculator from './calculator';

test('tests calculator methods', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.subtract(2, 2)).toBe(0);
});

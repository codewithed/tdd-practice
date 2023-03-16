// Caesar cipher implementation
function caesarCipher(str, shift) {
  if (shift < 0) {
    shift += 26;
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
}

// Jest tests
describe('caesarCipher', () => {
  test('shift of 0 returns the same string', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
  });

  test('shift of 3 returns shifted string', () => {
    expect(caesarCipher('abcxyz', 3)).toBe('defabc');
  });

  test('shift of -3 returns shifted string', () => {
    expect(caesarCipher('defabc', -3)).toBe('abcxyz');
  });

  test('handles uppercase letters', () => {
    expect(caesarCipher('HELLO', 5)).toBe('MJQQT');
  });

  test('ignores non-alphabetic characters', () => {
    expect(caesarCipher('hello, world!', 7)).toBe('olssv, dvysk!');
  });
});

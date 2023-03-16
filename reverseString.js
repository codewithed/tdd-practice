function reverseString(string) {
  const splitStr = string.split('');
  const reversed = splitStr.reverse().join('');
  return reversed;
}

module.exports = reverseString;

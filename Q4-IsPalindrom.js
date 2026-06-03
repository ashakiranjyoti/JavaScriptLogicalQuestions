
function isPalindrom(str) {
  const reverse = str.split('').reverse().join('');

  return str === reverse;
}

console.log(isPalindrom('madam'));

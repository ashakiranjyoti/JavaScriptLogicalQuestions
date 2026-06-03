
function isPalindrom(str) {
  const reverse = str.split('').reverse().join('');

  str === reverse;
}

console.log(isPalindrome('madam'));


function isPalindrome(str) {
  let toLowerCase = str.ToLowerCase();

  let palindrome = toLowerCase.split('').reverse().join('');

  return toLowerCase === palindrome;
}

console.log(isPalindrome("MaDam"));

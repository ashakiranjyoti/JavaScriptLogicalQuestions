// Question:
// Write a JavaScript program to check whether a number is Even or Odd.

// Even → remainder should be 0
function isEven(num) {
    return num % 2 === 0;
}

// Odd → remainder should NOT be 0
function isOdd(num) {
    return num % 2 !== 0;
}

// 4 % 2 = 0 → true
console.log(isEven(4));

// 7 % 2 = 1 → true
console.log(isOdd(7));

// 5 % 2 = 1 → false
console.log(isEven(5));

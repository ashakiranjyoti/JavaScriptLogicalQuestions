
function isEven(num) {
    return num % 2 === 0;  // remainder 0 hai to even
}

function isOdd(num) {
    return num % 2 !== 0;  // remainder 1 hai to odd
}

console.log(isEven(4));   // true
console.log(isOdd(7));    // true
console.log(isEven(5));   // false

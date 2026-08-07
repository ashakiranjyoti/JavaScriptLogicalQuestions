// Question:
// Write a JavaScript program to find the largest number in an array
// using the Math.max() method.

// Math.max() returns the largest value from given numbers.
// The spread operator (...) converts array elements into separate values.
//
// Example:
// Math.max(3, 7, 2, 4, 9) → 9

function findLargestNum(arr) {

    // Step 1: Use spread operator (...) to unpack array values.
    // [3, 7, 2, 4, 9]
    // becomes:
    // 3, 7, 2, 4, 9
    //
    // Step 2: Math.max() compares all values
    // and returns the biggest number.
    return Math.max(...arr);
}

// Test Case
console.log(findLargestNum([3, 7, 2, 4, 9]));

/*
Dry Run:

Input:
arr = [3, 7, 2, 4, 9]

Spread Operator:
...arr

Changes:
[3, 7, 2, 4, 9]
        ↓
3, 7, 2, 4, 9

Math.max():
Compare all numbers

3 < 7
7 > 2
7 > 4
9 > 7

Largest Number = 9

Output:
9
*/

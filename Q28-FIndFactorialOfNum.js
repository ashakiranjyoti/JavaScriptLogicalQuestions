// Question:
// Write a JavaScript program to find
// the factorial of a number.

// Example:
// 5! = 5 × 4 × 3 × 2 × 1
//    = 120


function factorial(num) {

    // Step 1:
    // Initialize result with 1.
    let result = 1;


    // Step 2:
    // Multiply result with every number
    // from 1 to num.
    for(let i = 1; i <= num; i++) {

        result = result * i;
    }


    // Step 3:
    // Return final factorial.
    return result;
}


console.log(factorial(5));


/*
Dry Run:

num = 5

Initial:
result = 1

i = 1:
result = 1 × 1 = 1

i = 2:
result = 1 × 2 = 2

i = 3:
result = 2 × 3 = 6

i = 4:
result = 6 × 4 = 24

i = 5:
result = 24 × 5 = 120

Output:
120
*/

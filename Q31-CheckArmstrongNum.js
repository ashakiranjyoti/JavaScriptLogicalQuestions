// Question:
// Write a JavaScript program to check whether
// a number is an Armstrong number.

// Example:
// 153
//
// 1³ + 5³ + 3³
// = 1 + 125 + 27
// = 153
//
// Therefore, 153 is an Armstrong number.


function isArmstrong(num) {

    // Step 1:
    // Store original number because
    // num will change during calculation.
    let original = num;


    // Step 2:
    // Find total number of digits.
    let digits = String(num).length;


    // Step 3:
    // Initialize sum with 0.
    let sum = 0;


    // Step 4:
    // Extract each digit and calculate
    // digit raised to number of digits.
    while(num > 0) {

        // Get last digit.
        let digit = num % 10;


        // Add digit^digits to sum.
        sum = sum + digit ** digits;


        // Remove last digit.
        num = Math.floor(num / 10);
    }


    // Step 5:
    // Compare calculated sum with original number.
    return sum === original;
}


console.log(isArmstrong(153));
console.log(isArmstrong(123));


/*
Dry Run:

Input:
153

Original:
153

Number of digits:
3


First digit:

153 % 10 = 3

sum = 0 + 3³
    = 27

num = Math.floor(153 / 10)
    = 15


Second digit:

15 % 10 = 5

sum = 27 + 5³
    = 27 + 125
    = 152

num = Math.floor(15 / 10)
    = 1


Third digit:

1 % 10 = 1

sum = 152 + 1³
    = 153

num = Math.floor(1 / 10)
    = 0


Comparison:

sum === original

153 === 153

true


Output:
true
*/

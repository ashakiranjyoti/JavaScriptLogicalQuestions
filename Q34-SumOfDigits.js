// Question:
// Write a JavaScript program to find the sum
// of all digits of a number.
//
// Example:
// 1234 → 1 + 2 + 3 + 4 = 10


function sumOfDigits(num) {

    // Step 1:
    // Initialize sum with 0.
    let sum = 0;


    // Step 2:
    // Extract each digit.
    while(num > 0) {

        // Get last digit.
        let digit = num % 10;


        // Add digit to sum.
        sum += digit;


        // Remove last digit.
        num = Math.floor(num / 10);
    }


    // Step 3:
    // Return final sum.
    return sum;
}


console.log(sumOfDigits(1234));


/*
Dry Run:

num = 1234

4 → sum = 4
3 → sum = 4 + 3 = 7
2 → sum = 7 + 2 = 9
1 → sum = 9 + 1 = 10

Output:
10
*/

// Question:
// Write a JavaScript program to reverse a number.
//
// Example:
// 1234 → 4321


function reverseNumber(num) {

    // Step 1:
    // Store reversed number as 0.
    let reverse = 0;


    // Step 2:
    // Extract digits until number becomes 0.
    while(num > 0) {

        // Get the last digit.
        let digit = num % 10;


        // Add digit to reversed number.
        reverse = reverse * 10 + digit;


        // Remove the last digit.
        num = Math.floor(num / 10);
    }


    // Step 3:
    // Return reversed number.
    return reverse;
}


console.log(reverseNumber(1234));


/*
Dry Run:

num = 1234
reverse = 0

1234 % 10 = 4
reverse = 0 * 10 + 4
        = 4

num = 123


123 % 10 = 3
reverse = 4 * 10 + 3
        = 43

num = 12


12 % 10 = 2
reverse = 43 * 10 + 2
        = 432

num = 1


1 % 10 = 1
reverse = 432 * 10 + 1
        = 4321

num = 0

Output:
4321
*/

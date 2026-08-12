// Question:
// Write a JavaScript program to check whether
// a number is a palindrome.
//
// Example:
// 121 → 121 → Palindrome
// 123 → 321 → Not Palindrome


function isPalindromeNumber(num) {

    // Step 1:
    // Store original number because
    // num will change while reversing.
    let original = num;


    // Step 2:
    // Initialize reverse as 0.
    let reverse = 0;


    // Step 3:
    // Reverse the number.
    while(num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }


    // Step 4:
    // Compare reversed number with original.
    return original === reverse;
}


console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(123));


/*
Dry Run:

Input:
121

Original:
121

Reverse:

1 → reverse = 1
2 → reverse = 12
1 → reverse = 121

Comparison:

121 === 121

Output:
true
*/

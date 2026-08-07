// Question:
// Write a JavaScript program to check whether a given string is a palindrome
// (case-insensitive).

// A palindrome reads the same forward and backward.
// Examples:
// "madam"  → true
// "MaDam"  → true (after converting to lowercase)
// "hello"  → false

function isPalindrome(str) {

    // Step 1: Convert the string to lowercase.
    // This makes the comparison case-insensitive.
    // "MaDam" → "madam"
    let toLowerCase = str.toLowerCase();

    // Step 2: Split the string into an array.
    // "madam" → ["m", "a", "d", "a", "m"]
    let palindrome = toLowerCase
        .split('')

        // Step 3: Reverse the array.
        // ["m", "a", "d", "a", "m"] → ["m", "a", "d", "a", "m"]
        .reverse()

        // Step 4: Join the array back into a string.
        // ["m", "a", "d", "a", "m"] → "madam"
        .join('');

    // Step 5: Compare the original lowercase string
    // with the reversed string.
    // If both are equal, return true.
    return toLowerCase === palindrome;
}

// Test Case
console.log(isPalindrome("MaDam"));

/*
Dry Run

Input:
"MaDam"

Step 1:
toLowerCase = "madam"

Step 2:
split()
["m", "a", "d", "a", "m"]

Step 3:
reverse()
["m", "a", "d", "a", "m"]

Step 4:
join()
"madam"

Step 5:
"madam" === "madam"
true

Output:
true
*/

// Question:
// Write a JavaScript program to check whether a given string is a palindrome.

// A palindrome is a word that reads the same
// from left to right and right to left.
// Examples: "madam", "level", "racecar"

function isPalindrome(str) {

    // Step 1: Split the string into an array of characters.
    // "madam" → ["m", "a", "d", "a", "m"]
    const reverse = str
        .split('')

        // Step 2: Reverse the array.
        // ["m", "a", "d", "a", "m"] → ["m", "a", "d", "a", "m"]
        .reverse()

        // Step 3: Join the array back into a string.
        // ["m", "a", "d", "a", "m"] → "madam"
        .join('');

    // Step 4: Compare the original string with the reversed string.
    // If both are the same, return true.
    // Otherwise, return false.
    return str === reverse;
}

// Test Case
console.log(isPalindrome("madam"));

/*
Dry Run

Input:
str = "madam"

split():
["m", "a", "d", "a", "m"]

reverse():
["m", "a", "d", "a", "m"]

join():
"madam"

Comparison:
"madam" === "madam"
true

Output:
true
*/

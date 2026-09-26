// Question:
// Write a JavaScript program to reverse a given string without using built-in methods like reverse().

function reverseString(str) {

    // Step 1: Create an empty string to store the reversed result.
    let reverse = "";

    // Step 2: Start from the last character of the string.
    // Loop continues until the first character.
    for (let i = str.length - 1; i >= 0; i--) {

        // Step 3: Add each character to the 'reverse' string.
        reverse += str[i];
    }

    // Step 4: Return the reversed string.
    return reverse;
}

// Test Case
console.log(reverseString("BTS"));

// Dry Run:
//
// Input: "BTS"
//
// Initial:
// reverse = ""
// i = 2 (last index)
//
// Iteration 1:
// str[2] = "S"
// reverse = "" + "S" = "S"
//
// Iteration 2:
// i = 1
// str[1] = "T"
// reverse = "S" + "T" = "ST"
//
// Iteration 3:
// i = 0
// str[0] = "B"
// reverse = "ST" + "B" = "STB"
//
// Loop ends because i becomes -1.
//
// Returned Value:
// "STB"
//
// Output:
// STB

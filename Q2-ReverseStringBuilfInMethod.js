// Question:
// Write a JavaScript program to reverse a given string.

function reverseString(str) {

    // Step 1: Convert the string into an array of characters
    // "BTS" → ["B", "T", "S"]
    return str

        .split('')

        // Step 2: Reverse the array
        // ["B", "T", "S"] → ["S", "T", "B"]
        .reverse()

        // Step 3: Join the array back into a string
        // ["S", "T", "B"] → "STB"
        .join('');
}

// Test Case
console.log(reverseString("BTS"));

// Execution:
// Input  : "BTS"
// split  : ["B", "T", "S"]
// reverse: ["S", "T", "B"]
// join   : "STB"
// Output : STB

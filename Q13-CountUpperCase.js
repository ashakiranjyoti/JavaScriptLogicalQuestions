// Question:
// Write a JavaScript program to count the number of uppercase letters
// present in a given string.

// Example:
// "JavaASScript"
// Uppercase letters: J, A, S, S
// Count = 4


function countUpperCase(str) {

    // Step 1: Create a variable to store uppercase letter count.
    // Initially count is 0.
    let count = 0;


    // Step 2: Loop through every character of the string.
    for (let i = 0; i < str.length; i++) {


        // Step 3: Check if the current character is between 'A' and 'Z'.
        //
        // In JavaScript, characters have Unicode values.
        // Uppercase letters fall in the range A-Z.
        if (str[i] >= 'A' && str[i] <= 'Z') {

            // Step 4: Increase count when an uppercase letter is found.
            count++;
        }
    }


    // Step 5: Return the total uppercase letter count.
    return count;
}


// Test Case
console.log(countUpperCase("JavaASScript"));



/*
Dry Run:

Input:
"JavaASScript"


Characters:

J → Uppercase ✅
count = 1

a → lowercase ❌

v → lowercase ❌

a → lowercase ❌

A → Uppercase ✅
count = 2

S → Uppercase ✅
count = 3

S → Uppercase ✅
count = 4

c → lowercase ❌

r → lowercase ❌

i → lowercase ❌

p → lowercase ❌

t → lowercase ❌


Final Count:
4


Output:
4
*/

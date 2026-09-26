// Question:
// Write a JavaScript program to find the first
// non-repeating character in a string.


function firstNonRepeatingChar(str) {

    // Step 1:
    // Create an object to store
    // frequency of each character.
    let frequency = {};


    // Step 2:
    // Count frequency of every character.
    for(let char of str) {

        if(frequency[char]) {

            frequency[char]++;
        }

        else {

            frequency[char] = 1;
        }
    }


    // Step 3:
    // Traverse the original string again.
    for(let char of str) {

        // First character with frequency 1
        // is non-repeating.
        if(frequency[char] === 1) {

            return char;
        }
    }


    // Step 4:
    // Return null if no such character exists.
    return null;
}


console.log(firstNonRepeatingChar("aabbcde"));


/*
Dry Run:

String:
"aabbcde"

Frequency:

a → 2
b → 2
c → 1
d → 1
e → 1

Traverse again:

a → 2 → skip
a → 2 → skip
b → 2 → skip
b → 2 → skip
c → 1 → return c

Output:
c
*/

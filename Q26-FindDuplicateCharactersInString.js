// Question:
// Write a JavaScript program to find
// duplicate characters in a string.


function findDuplicateCharacters(str) {

    // Step 1:
    // Create an object to store
    // frequency of each character.
    let frequency = {};


    // Step 2:
    // Traverse through every character.
    for(let char of str) {

        // If character already exists,
        // increase its count.
        if(frequency[char]) {

            frequency[char]++;
        }

        // First occurrence of character.
        else {

            frequency[char] = 1;
        }
    }


    // Step 3:
    // Create an array to store duplicates.
    let duplicates = [];


    // Step 4:
    // Check frequency of every character.
    for(let char in frequency) {

        // Frequency greater than 1
        // means character is duplicate.
        if(frequency[char] > 1) {

            duplicates.push(char);
        }
    }


    // Step 5:
    // Return duplicate characters.
    return duplicates;
}


console.log(findDuplicateCharacters("programming"));


/*
Dry Run:

String:
"programming"

Frequency:

p → 1
r → 2
o → 1
g → 2
a → 1
m → 2
i → 1
n → 1

Frequency > 1:

r
g
m

Output:
[ 'r', 'g', 'm' ]
*/

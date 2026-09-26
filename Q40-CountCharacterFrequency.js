// Question:
// Write a JavaScript program to count the frequency
// of each character in a string.
//
// Example:
// "hello"
//
// h → 1
// e → 1
// l → 2
// o → 1


function countCharacterFrequency(str) {

    // Step 1:
    // Create object to store character frequency.
    let frequency = {};


    // Step 2:
    // Traverse through every character.
    for(let char of str) {

        // If character exists,
        // increase its count.
        if(frequency[char]) {

            frequency[char]++;
        }

        // Otherwise initialize count with 1.
        else {

            frequency[char] = 1;
        }
    }


    // Step 3:
    // Return frequency object.
    return frequency;
}


console.log(countCharacterFrequency("hello"));


/*
Dry Run:

h → 1
e → 1
l → 1
l → 2
o → 1

Output:

{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
*/

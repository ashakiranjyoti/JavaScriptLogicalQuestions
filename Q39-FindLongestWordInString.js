// Question:
// Write a JavaScript program to find
// the longest word in a string.
//
// Example:
// "I am learning JavaScript"
// Longest word → JavaScript


function findLongestWord(str) {

    // Step 1:
    // Split string into individual words.
    let words = str.split(" ");


    // Step 2:
    // Assume first word is longest.
    let longest = words[0];


    // Step 3:
    // Compare length of every word.
    for(let word of words) {

        if(word.length > longest.length) {

            longest = word;
        }
    }


    // Step 4:
    // Return longest word.
    return longest;
}


console.log(findLongestWord(
    "I am learning JavaScript"
));


/*
Dry Run:

Words:

I
am
learning
JavaScript

I → length 1
am → length 2 → longest
learning → length 8 → longest
JavaScript → length 10 → longest

Output:
JavaScript
*/

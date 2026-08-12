// Question:
// Write a JavaScript program to count
// the number of words in a string.


function countWords(str) {

    // Step 1:
    // trim() removes extra spaces from
    // beginning and end.
    str = str.trim();


    // Step 2:
    // split(/\s+/) separates the string
    // wherever whitespace occurs.
    let words = str.split(/\s+/);


    // Step 3:
    // length gives total number of words.
    return words.length;
}


console.log(countWords("I am learning JavaScript"));


/*
Dry Run:

Input:
"I am learning JavaScript"

After split():

[
    "I",
    "am",
    "learning",
    "JavaScript"
]

Number of words:
4

Output:
4
*/

// Question:
// Write a JavaScript program to remove
// all spaces from a string.


function removeSpaces(str) {

    // Step 1:
    // Use replace() to find whitespace.
    // \s → whitespace character
    // g → replace all occurrences


    // Step 2:
    // Replace every whitespace with
    // an empty string.
    return str.replace(/\s/g, '');
}


console.log(removeSpaces("Hello World JavaScript"));


/*
Dry Run:

Input:
"Hello World JavaScript"

Spaces:
Hello[ ]World[ ]JavaScript

Replace spaces with "":
HelloWorldJavaScript

Output:
HelloWorldJavaScript
*/

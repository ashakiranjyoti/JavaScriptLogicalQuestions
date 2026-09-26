// Question:
// Write a JavaScript program to count the number of letters in a string
// by removing spaces.

// Example:
// "Hey h"
// Remove space → "Heyh"
// Count letters → 4


function countLetters(str) {

    // Step 1: Split the string wherever a space is found.
    //
    // Example:
    // "Hey h"
    // split(' ') creates:
    // ["Hey", "h"]
    
    // Step 2: Join all parts without spaces.
    //
    // ["Hey", "h"]
    // join('')
    // "Heyh"
    //
    // Step 3: Find the length of the final string.
    return str.split(' ').join('').length;
}


// Test Case
console.log(countLetters("Hey h"));



/*
Dry Run:

Input:
"Hey h"


Step 1:
split(' ')

"Hey h"
   ↓
["Hey", "h"]


Step 2:
join('')

["Hey", "h"]
      ↓
"Heyh"


Step 3:
length

"H e y h"
 1 2 3 4


Output:
4
*/

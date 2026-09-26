// Question:
// Write a JavaScript program to remove duplicate values from an array
// using the Set object.

// Set stores only unique values.
// If the array has repeated values, Set automatically removes them.

function removeDuplicate(arr) {

    // Step 1: Convert array into Set.
    // Set removes duplicate values automatically.
    //
    // Example:
    // [4, 8, 2, 4, 3, 9, 2]
    //
    // becomes:
    // Set {4, 8, 2, 3, 9}
    
    // Step 2: Convert Set back into an array using spread operator (...)
    return [...new Set(arr)];
}


// Test Case
console.log(removeDuplicate([4, 8, 2, 4, 3, 9, 2]));


/*
Dry Run:

Input:
arr = [4, 8, 2, 4, 3, 9, 2]


Step 1:
new Set(arr)

Duplicates removed:

Set {
  4,
  8,
  2,
  3,
  9
}


Step 2:
[...Set]

Convert Set back to Array:

[4, 8, 2, 3, 9]


Output:
[4, 8, 2, 3, 9]
*/

// Question:
// Write a JavaScript program to check whether
// two arrays contain the same elements.


function areArraysEqual(arr1, arr2) {

    // Step 1:
    // If lengths are different,
    // arrays cannot be equal.
    if(arr1.length !== arr2.length) {

        return false;
    }


    // Step 2:
    // Compare each element.
    for(let i = 0; i < arr1.length; i++) {

        if(arr1[i] !== arr2[i]) {

            return false;
        }
    }


    // Step 3:
    // If all elements match,
    // arrays are equal.
    return true;
}


console.log(areArraysEqual(
    [1,2,3],
    [1,2,3]
));


/*
Dry Run:

Array 1:
[1,2,3]

Array 2:
[1,2,3]

Length:
3 === 3

Compare:

1 === 1 → true
2 === 2 → true
3 === 3 → true

Output:
true
*/

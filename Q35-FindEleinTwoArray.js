// Question:
// Write a JavaScript program to find common elements
// between two arrays.
//
// Example:
// [1,2,3,4]
// [3,4,5,6]
//
// Common → [3,4]


function findCommonElements(arr1, arr2) {

    // Step 1:
    // Create an array to store common elements.
    let common = [];


    // Step 2:
    // Traverse through first array.
    for(let num of arr1) {

        // Check whether current element
        // exists in second array.
        if(arr2.includes(num)) {

            // Add common element.
            common.push(num);
        }
    }


    // Step 3:
    // Return common elements.
    return common;
}


console.log(findCommonElements(
    [1,2,3,4],
    [3,4,5,6]
));


/*
Dry Run:

arr1:
[1,2,3,4]

arr2:
[3,4,5,6]

1 → exists in arr2? No
2 → exists in arr2? No
3 → exists in arr2? Yes → add 3
4 → exists in arr2? Yes → add 4

Output:
[3,4]
*/

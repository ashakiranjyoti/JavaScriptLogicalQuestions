// Question:
// Write a JavaScript program to find elements
// that are present in the first array
// but not present in the second array.
//
// Example:
// [1,2,3,4]
// [2,4]
//
// Result:
// [1,3]


function findDifference(arr1, arr2) {

    // Step 1:
    // Create array to store differences.
    let result = [];


    // Step 2:
    // Traverse first array.
    for(let num of arr1) {

        // If element does not exist
        // in second array, add it.
        if(!arr2.includes(num)) {

            result.push(num);
        }
    }


    // Step 3:
    // Return result.
    return result;
}


console.log(findDifference(
    [1,2,3,4],
    [2,4]
));


/*
Dry Run:

1 → exists in arr2? No → add 1
2 → exists? Yes → skip
3 → exists? No → add 3
4 → exists? Yes → skip

Output:
[1,3]
*/

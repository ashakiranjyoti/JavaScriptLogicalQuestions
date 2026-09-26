// Question:
// Write a JavaScript program to remove duplicate
// elements from an array without using Set.
//
// Example:
// [1,2,2,3,3,4]
// → [1,2,3,4]


function removeDuplicates(arr) {

    // Step 1:
    // Create an empty array for unique elements.
    let unique = [];


    // Step 2:
    // Traverse through each element.
    for(let num of arr) {

        // Check whether element already exists
        // in unique array.
        if(!unique.includes(num)) {

            // If not present, add it.
            unique.push(num);
        }
    }


    // Step 3:
    // Return unique elements.
    return unique;
}


console.log(removeDuplicates([1,2,2,3,3,4]));


/*
Dry Run:

1 → not present → add
unique = [1]

2 → not present → add
unique = [1,2]

2 → already present → skip

3 → not present → add
unique = [1,2,3]

3 → already present → skip

4 → not present → add
unique = [1,2,3,4]

Output:
[1,2,3,4]
*/

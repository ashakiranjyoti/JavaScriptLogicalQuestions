// Question:
// Write a JavaScript program to find the largest number in an array
// without using Math.max().

// Logic:
// 1. Assume the first element is the largest.
// 2. Compare each element with the current largest number.
// 3. If a bigger number is found, update largest.

function findLargest(arr) {

    // Step 1: Take the first element as the largest initially.
    // Example:
    // [2, 6, 4, 1, 9]
    // largest = 2
    let largest = arr[0];


    // Step 2: Start checking from the second element (index 1).
    for (let i = 1; i < arr.length; i++) {

        // Step 3: If current element is bigger than largest,
        // update the largest value.
        if (arr[i] > largest) {

            // Replace largest with the bigger number.
            largest = arr[i];
        }
    }

    // Step 4: Return the final largest number.
    return largest;
}


// Test Case
console.log(findLargest([2, 6, 4, 1, 9]));


/*
Dry Run:

Array:
[2, 6, 4, 1, 9]


Initial:
largest = 2


Loop 1:
i = 1
arr[i] = 6

6 > 2 ✅
largest = 6


Loop 2:
i = 2
arr[i] = 4

4 > 6 ❌
No change
largest = 6


Loop 3:
i = 3
arr[i] = 1

1 > 6 ❌
No change
largest = 6


Loop 4:
i = 4
arr[i] = 9

9 > 6 ✅
largest = 9


Final Output:
9
*/

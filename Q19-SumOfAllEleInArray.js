// Question:
// Write a JavaScript program to find the sum
// of all elements in an array.

// Example:
// [10,20,30,40] → 100


function findSum(arr) {

    // Step 1:
    // Initialize sum with 0.
    let sum = 0;


    // Step 2:
    // Traverse through each element of the array.
    for(let num of arr) {

        // Add current element to sum.
        sum += num;
    }


    // Step 3:
    // Return the final sum.
    return sum;
}


console.log(findSum([10,20,30,40]));


/*
Dry Run:

Array:
[10,20,30,40]

Initial:
sum = 0

10:
sum = 0 + 10
    = 10

20:
sum = 10 + 20
    = 30

30:
sum = 30 + 30
    = 60

40:
sum = 60 + 40
    = 100

Output:
100
*/

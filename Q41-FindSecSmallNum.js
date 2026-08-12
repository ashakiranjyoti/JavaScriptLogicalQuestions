// Question:
// Write a JavaScript program to find
// the second smallest number in an array.


function secondSmallest(arr) {

    // Step 1:
    // Sort numbers in ascending order.
    let sorted = [...arr].sort((a, b) => a - b);


    // Step 2:
    // Return element at index 1.
    return sorted[1];
}


console.log(secondSmallest([10,5,20,3,8]));


/*
Dry Run:

Original:
[10,5,20,3,8]

After sorting:
[3,5,8,10,20]

Index:
0 → 3
1 → 5

Second smallest:
5

Output:
5
*/

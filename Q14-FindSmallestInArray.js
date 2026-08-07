// Question:
// Write a JavaScript program to find the smallest number
// in an array without using Math.min().


function findSmallest(arr) {

    // Step 1:
    // Assume first element is the smallest initially.
    //
    // Example:
    // [5,2,8,1]
    // smallest = 5
    let smallest = arr[0];


    // Step 2:
    // Compare each element with current smallest value.
    for(let i = 1; i < arr.length; i++) {


        // Step 3:
        // If current element is smaller,
        // update smallest value.
        if(arr[i] < smallest) {

            smallest = arr[i];
        }
    }


    // Step 4:
    // Return final smallest number.
    return smallest;
}


console.log(findSmallest([5,2,8,1,9]));


/*
Dry Run:

Array:
[5,2,8,1,9]


Initial:
smallest = 5


i = 1
arr[i] = 2

2 < 5 ✅

smallest = 2


i = 2
arr[i] = 8

8 < 2 ❌
No change


i = 3
arr[i] = 1

1 < 2 ✅

smallest = 1


i = 4
arr[i] = 9

9 < 1 ❌


Final Answer:
1


Output:
1
*/

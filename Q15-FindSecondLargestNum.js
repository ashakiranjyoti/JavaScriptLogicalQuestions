// Question:
// Write a JavaScript program to find the second largest
// number from an array.


function secondLargest(arr) {

    // Step 1:
    // Store first two values initially.
    let largest = -Infinity;
    let secondLargest = -Infinity;


    // Step 2:
    // Loop through the array.
    for(let i = 0; i < arr.length; i++) {


        // Step 3:
        // If current number is greater than largest,
        // update both values.
        if(arr[i] > largest) {

            secondLargest = largest;
            largest = arr[i];

        }

        // Step 4:
        // Otherwise check if it is second largest.
        else if(arr[i] > secondLargest && arr[i] !== largest) {

            secondLargest = arr[i];
        }
    }


    return secondLargest;
}


console.log(secondLargest([10,5,8,20,15]));


/*
Dry Run:

Array:
[10,5,8,20,15]


Start:
largest = -Infinity
secondLargest = -Infinity


10:
largest = 10


5:
secondLargest = 5


8:
8 > 5

secondLargest = 8


20:
largest = 20
secondLargest = 10


15:
15 < 20
15 > 10

secondLargest = 15


Output:
15
*/

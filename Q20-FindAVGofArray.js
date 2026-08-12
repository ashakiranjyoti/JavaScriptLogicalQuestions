// Question:
// Write a JavaScript program to find the average
// of numbers in an array.

// Formula:
// Average = Sum / Number of elements


function findAverage(arr) {

    // Step 1:
    // Initialize sum with 0.
    let sum = 0;


    // Step 2:
    // Calculate the sum of all elements.
    for(let num of arr) {

        sum += num;
    }


    // Step 3:
    // Divide sum by array length
    // to get the average.
    return sum / arr.length;
}


console.log(findAverage([10,20,30,40]));


/*
Dry Run:

Array:
[10,20,30,40]

Sum:
10 + 20 + 30 + 40
= 100

Number of elements:
4

Average:
100 / 4
= 25

Output:
25
*/

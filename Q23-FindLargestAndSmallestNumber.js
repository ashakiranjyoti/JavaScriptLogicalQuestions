// Question:
// Write a JavaScript program to find both
// the largest and smallest number in an array.


function findMinMax(arr) {

    // Step 1:
    // Assume first element is both
    // smallest and largest.
    let smallest = arr[0];
    let largest = arr[0];


    // Step 2:
    // Compare every element with
    // smallest and largest.
    for(let num of arr) {

        // If current number is smaller,
        // update smallest.
        if(num < smallest) {

            smallest = num;
        }


        // If current number is larger,
        // update largest.
        if(num > largest) {

            largest = num;
        }
    }


    // Step 3:
    // Return smallest and largest.
    return {
        smallest: smallest,
        largest: largest
    };
}


console.log(findMinMax([25,10,45,5,30]));


/*
Dry Run:

Array:
[25,10,45,5,30]

Initial:
smallest = 25
largest = 25


10:
10 < 25
smallest = 10


45:
45 > 25
largest = 45


5:
5 < 10
smallest = 5


30:
30 < 45
No change


Final:
smallest = 5
largest = 45

Output:
{
    smallest: 5,
    largest: 45
}
*/

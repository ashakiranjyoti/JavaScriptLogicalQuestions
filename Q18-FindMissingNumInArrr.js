// Question:
// Write a JavaScript program to find the missing number
// from an array containing numbers from 1 to n.


function findMissing(arr) {


    // Step 1:
    // Find expected sum.
    let n = arr.length + 1;

    let total = n * (n + 1) / 2;


    // Step 2:
    // Find actual array sum.
    let sum = 0;

    for(let num of arr) {

        sum += num;
    }


    // Step 3:
    // Difference gives missing number.
    return total - sum;
}


console.log(findMissing([1,2,3,5]));


/*
Dry Run:

Array:
[1,2,3,5]


n = 5


Expected Sum:

5*(5+1)/2

= 15


Actual Sum:

1+2+3+5

= 11


Missing:

15 - 11

= 4


Output:
4
*/

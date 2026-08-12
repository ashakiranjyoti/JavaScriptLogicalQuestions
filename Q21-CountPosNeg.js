// Question:
// Write a JavaScript program to count positive
// and negative numbers in an array.


function countPositiveNegative(arr) {

    // Step 1:
    // Initialize counters for positive
    // and negative numbers.
    let positive = 0;
    let negative = 0;


    // Step 2:
    // Traverse through every number.
    for(let num of arr) {

        // If number is greater than 0,
        // increase positive count.
        if(num > 0) {

            positive++;
        }

        // If number is less than 0,
        // increase negative count.
        else if(num < 0) {

            negative++;
        }
    }


    // Step 3:
    // Return both counts.
    return {
        positive: positive,
        negative: negative
    };
}


console.log(countPositiveNegative([10,-5,20,-8,15]));


/*
Dry Run:

Array:
[10,-5,20,-8,15]

10 → positive → positive = 1

-5 → negative → negative = 1

20 → positive → positive = 2

-8 → negative → negative = 2

15 → positive → positive = 3


Final:

positive = 3
negative = 2

Output:
{
    positive: 3,
    negative: 2
}
*/

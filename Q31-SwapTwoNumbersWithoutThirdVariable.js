// Question:
// Write a JavaScript program to swap two numbers
// without using a third variable.


function swapNumbers(a, b) {

    // Step 1:
    // Use array destructuring to swap values.
    [a, b] = [b, a];


    // Step 2:
    // Return swapped values.
    return [a, b];
}


console.log(swapNumbers(10, 20));


/*
Dry Run:

Initial:

a = 10
b = 20

Destructuring:

[a, b] = [b, a]

[a, b] = [20, 10]

Therefore:

a = 20
b = 10

Output:
[20, 10]
*/

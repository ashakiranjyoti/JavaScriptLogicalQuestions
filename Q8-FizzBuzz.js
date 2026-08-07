// Question:
// Write a JavaScript program to print numbers from 1 to 100.
// For multiples of 3 print "Fizz".
// For multiples of 5 print "Buzz".
// For multiples of both 3 and 5 print "FizzBuzz".

function fizzBuzz() {

    // Step 1: Run a loop from 1 to 100.
    for (let i = 1; i <= 100; i++) {


        // Step 2: Check if the number is divisible by both 3 and 5.
        // Example:
        // 15 % 3 = 0 and 15 % 5 = 0
        // So output will be "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {

            console.log("FizzBuzz");


        // Step 3: Check if the number is divisible only by 3.
        // Example:
        // 9 % 3 = 0
        // Output: "Fizz"
        } else if (i % 3 === 0) {

            console.log("Fizz");


        // Step 4: Check if the number is divisible only by 5.
        // Example:
        // 10 % 5 = 0
        // Output: "Buzz"
        } else if (i % 5 === 0) {

            console.log("Buzz");


        // Step 5: If the number is not divisible by 3 or 5,
        // print the original number.
        } else {

            console.log(i);
        }
    }
}


// Function call
fizzBuzz();


/*
Dry Run:

i = 1
1 is not divisible by 3 or 5
Output: 1


i = 3
3 % 3 = 0
Output: Fizz


i = 5
5 % 5 = 0
Output: Buzz


i = 15
15 % 3 = 0
15 % 5 = 0
Output: FizzBuzz


i = 16
Not divisible by 3 or 5
Output: 16


Loop continues until i = 100
*/

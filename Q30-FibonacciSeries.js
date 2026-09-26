// Question:
// Write a JavaScript program to print
// Fibonacci series.

// Fibonacci:
// 0, 1, 1, 2, 3, 5, 8...


function fibonacci(n) {

    // Step 1:
    // Initialize first two Fibonacci numbers.
    let a = 0;
    let b = 1;


    // Step 2:
    // Repeat n times.
    for(let i = 0; i < n; i++) {

        // Print current number.
        console.log(a);


        // Step 3:
        // Calculate next Fibonacci number.
        let next = a + b;


        // Move values forward.
        a = b;
        b = next;
    }
}


fibonacci(7);


/*
Dry Run:

Initial:
a = 0
b = 1

Iteration 1:
print 0
next = 0 + 1 = 1
a = 1
b = 1

Iteration 2:
print 1
next = 1 + 1 = 2
a = 1
b = 2

Iteration 3:
print 1
next = 1 + 2 = 3
a = 2
b = 3

Then:

2
3
5
8

Output:
0
1
1
2
3
5
8
*/

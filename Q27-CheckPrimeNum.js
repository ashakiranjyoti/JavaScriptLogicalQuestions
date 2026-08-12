// Question:
// Write a JavaScript program to check
// whether a number is Prime.

// Prime number:
// A number greater than 1 having only
// two factors: 1 and itself.


function isPrime(num) {

    // Step 1:
    // Numbers less than or equal to 1
    // are not prime.
    if(num <= 1) {

        return false;
    }


    // Step 2:
    // Check whether number is divisible
    // by any number from 2 to num - 1.
    for(let i = 2; i < num; i++) {

        // If remainder is 0,
        // number has another factor.
        if(num % i === 0) {

            return false;
        }
    }


    // Step 3:
    // If no factor is found,
    // number is prime.
    return true;
}


console.log(isPrime(7));
console.log(isPrime(8));


/*
Dry Run:

For 7:

7 % 2 → 1
7 % 3 → 1
7 % 4 → 3
7 % 5 → 2
7 % 6 → 1

No divisor found.

Output:
true


For 8:

8 % 2 → 0

Divisor found.

Output:
false
*/

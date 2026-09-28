let num = 7;

let prime = true;

if (num <= 1) {
    prime = false;
} else {

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

/*
HOW THIS FILE WORKS

I first handle numbers less than or equal to 1.

Then I check whether any number from 2 to num - 1 divides the number completely.

If I find a divisor, the number is not prime.

IMPORTANT KEYWORDS

boolean
-> In JavaScript, true and false are boolean values.

%
-> Returns the remainder.

break
-> Stops the loop.

prime
-> Stores whether the number is prime.

FLOW

Number -> <=1? -> Not Prime -> otherwise check divisors -> result
*/
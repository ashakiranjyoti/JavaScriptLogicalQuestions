let num = 7;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

/*
HOW THIS FILE WORKS

I start count from 0.

Then I loop from 1 to num.

If any number divides num completely, I increase count.

Finally, if count is exactly 2, the number is prime.

IMPORTANT KEYWORDS

count
-> Stores how many numbers divide num.

%
-> Returns the remainder.

===
-> Checks if two values are equal.

prime
-> A number with exactly 2 divisors (1 and itself).

FLOW

Number -> loop 1 to num -> count divisors -> count === 2? -> Prime : Not Prime
*/

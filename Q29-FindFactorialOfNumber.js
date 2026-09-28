let num = 5;

let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log(factorial);

/*
HOW THIS FILE WORKS

I start factorial with 1.

Then I multiply it by every number from 1 to num.

IMPORTANT KEYWORDS

for
-> Repeats multiplication.

*
-> Multiplication operator.

<=
-> Less-than-or-equal operator.

factorial
-> Stores the running result.

FLOW

1 -> multiply by 2 -> multiply by 3 -> ... -> factorial
*/
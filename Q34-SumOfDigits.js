let num = 1234;

let sum = 0;

while (num > 0) {

    let digit = num % 10;

    sum = sum + digit;

    num = Math.floor(num / 10);
}

console.log(sum);

/*
HOW THIS FILE WORKS

I take one digit at a time from the number and add it to sum.

The loop continues until the number becomes 0.

IMPORTANT KEYWORDS

%
-> Gets the last digit.

Math.floor()
-> Removes the last digit after division.

sum
-> Stores the running total.

while
-> Repeats the logic.

FLOW

1234 -> 4 -> 3 -> 2 -> 1 -> add digits -> 10
*/
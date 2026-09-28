let numbers = [2, 6, 4, 1, 9];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(largest);

/*
HOW THIS FILE WORKS

I assume the first number is the largest.

Then I compare every next number with largest.
If a bigger number is found, I update largest.

IMPORTANT KEYWORDS

if
-> Checks a condition.

>
-> Greater-than operator.

length
-> Gives the array length.

largest
-> Stores the current largest value.

FLOW

First value -> compare -> bigger? -> update -> final largest
*/
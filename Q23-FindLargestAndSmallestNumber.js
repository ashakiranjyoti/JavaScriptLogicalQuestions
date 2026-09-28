let numbers = [25, 10, 45, 5, 30];

let smallest = numbers[0];
let largest = numbers[0];

for (let num of numbers) {

    if (num < smallest) {
        smallest = num;
    }

    if (num > largest) {
        largest = num;
    }
}

console.log("Smallest: " + smallest);
console.log("Largest: " + largest);

/*
HOW THIS FILE WORKS

I use the first value as both the smallest and largest.

Then I compare every number and update the correct variable.

IMPORTANT KEYWORDS

smallest
-> Stores the current smallest value.

largest
-> Stores the current largest value.

if
-> Checks a condition.

for...of
-> Loops through array values.

FLOW

First value -> compare for smallest -> compare for largest -> update
*/
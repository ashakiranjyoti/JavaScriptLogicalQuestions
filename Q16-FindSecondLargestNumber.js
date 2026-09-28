let numbers = [10, 5, 8, 20, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of numbers) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);

/*
HOW THIS FILE WORKS

I keep two variables: largest and secondLargest.

When a new largest number is found, the old largest becomes secondLargest.

IMPORTANT KEYWORDS

-Infinity
-> A very small numeric value.

for...of
-> Loops directly through array values.

else if
-> Checks another condition.

&&
-> Logical AND.

FLOW

Number -> compare with largest -> update largest / secondLargest
*/
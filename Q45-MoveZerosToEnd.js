const numbers = [0, 1, 0, 3, 12];

const result = [];
let zeroCount = 0;

for (const number of numbers) {

    if (number === 0) {
        zeroCount++;
    } else {
        result.push(number);
    }
}

for (let i = 0; i < zeroCount; i++) {
    result.push(0);
}

console.log("Result:", result);

/*
HOW THIS FILE WORKS

I go through the array.

For every non-zero number, I add it to the result array.

For every zero, I only increase zeroCount.

After that, I add all zeros to the end.

Output:
Result: [1, 3, 12, 0, 0]

IMPORTANT KEYWORDS

for...of
-> Loops through array values.

if
-> Checks whether the number is zero.

push()
-> Adds an element to an array.

zeroCount
-> Stores how many zeros are present.

FLOW

Array -> Separate zeros -> Add non-zero values -> Add zeros -> Result
*/
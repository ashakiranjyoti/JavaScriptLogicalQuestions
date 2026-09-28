let numbers = [1, 2, 2, 3, 3, 4];

let unique = [];

for (let num of numbers) {

    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log(unique);

/*
HOW THIS FILE WORKS

I do not use Set here.

I keep the unique values inside an array.

Before adding a number, I check whether it is already present.
If it is not present, I add it.

IMPORTANT KEYWORDS

includes()
-> Checks whether a value exists in an array.

push()
-> Adds a value to the end of an array.

for...of
-> Loops through array values.

!
-> Logical NOT.

FLOW

Number -> already in unique array? -> yes: skip -> no: add
*/
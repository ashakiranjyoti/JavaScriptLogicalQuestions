let numbers = [1, 2, 3, 2, 4, 3];

let seen = new Set();

for (let num of numbers) {

    if (seen.has(num)) {
        console.log(num);
    } else {
        seen.add(num);
    }
}

/*
HOW THIS FILE WORKS

I use a Set to store the numbers that I have already seen.

If the number is already in the Set, it is a duplicate.

IMPORTANT KEYWORDS

Set
-> Stores unique values.

has()
-> Checks whether a value exists in the Set.

add()
-> Adds a value to the Set.

for...of
-> Loops through array values.

FLOW

Number -> already in Set? -> yes: duplicate -> no: add
*/
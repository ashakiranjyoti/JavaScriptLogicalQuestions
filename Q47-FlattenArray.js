const numbers = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = numbers.flat(Infinity);

console.log("Flattened array:", flattenedArray);

/*
HOW THIS FILE WORKS

I have an array containing nested arrays.

I use flat(Infinity) to remove all levels of nesting
and get one single array.

Output:
Flattened array: [1, 2, 3, 4, 5, 6]

IMPORTANT KEYWORDS

flat()
-> Removes nested array levels.

Infinity
-> Flattens all levels of nesting.

console.log()
-> Prints the output.

FLOW

Nested array -> flat(Infinity) -> Single array
*/
let numbers = [4, 8, 2, 4, 3, 9, 2];

let unique = [...new Set(numbers)];

console.log(unique);

/*
HOW THIS FILE WORKS

I use Set because Set stores only unique values.

Then I convert the Set back into an array using the spread operator.

IMPORTANT KEYWORDS

Set
-> Stores unique values.

new Set()
-> Creates a Set from the array.

...
-> Spread operator.

[]
-> Creates an array.

FLOW

Array -> Set -> duplicate values removed -> Array
*/
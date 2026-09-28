let numbers = [10, 5, 20, 3, 8];

numbers.sort((a, b) => a - b);

let secondSmallest = numbers[1];

console.log(secondSmallest);

/*
HOW THIS FILE WORKS

I sort the array in ascending order.

After sorting, index 0 is the smallest value and index 1 is the second smallest value.

IMPORTANT KEYWORDS

sort()
-> Sorts the array.

(a, b) => a - b
-> Numeric ascending sort.

[1]
-> Second array position because indexing starts from 0.

let
-> Declares a variable.

FLOW

Array -> sort ascending -> index 0 smallest -> index 1 second smallest
*/

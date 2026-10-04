const numbers = [5, 2, 8, 1, 3];

const sortedNumbers = numbers.sort((a, b) => a - b);

console.log("Sorted array:", sortedNumbers);

/*
HOW THIS FILE WORKS

I store numbers in an array.

Then I use sort() with (a, b) => a - b
to sort numbers in ascending order.

Output:
Sorted array: [1, 2, 3, 5, 8]

IMPORTANT KEYWORDS

sort()
-> Sorts the array.

(a, b) => a - b
-> Compares two numbers for ascending order.

console.log()
-> Prints the output.

FLOW

Array -> sort() -> Ascending order -> Output
*/
let numbers = [3, 7, 2, 4, 9];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    largest = Math.max(largest, numbers[i]);
}

console.log(largest);

/*
HOW THIS FILE WORKS

I take the first array value as the current largest number.

Then I compare it with each next number using Math.max().

IMPORTANT KEYWORDS

Math.max()
-> Returns the larger value.

length
-> Gives the number of array elements.

for
-> Loops through the array.

numbers[i]
-> Gets the current array element.

FLOW

First value -> compare with next value -> update largest -> repeat
*/
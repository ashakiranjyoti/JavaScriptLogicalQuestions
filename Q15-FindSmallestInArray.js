let numbers = [5, 2, 8, 1, 9];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(smallest);

/*
HOW THIS FILE WORKS

I assume the first number is the smallest.

Then I compare every next number with smallest.
If I find a smaller number, I update smallest.

IMPORTANT KEYWORDS

<
-> Less-than operator.

numbers[i]
-> Gets the current array value.

for
-> Loops through the array.

smallest
-> Stores the current smallest value.

FLOW

First value -> compare -> smaller? -> update -> final smallest
*/
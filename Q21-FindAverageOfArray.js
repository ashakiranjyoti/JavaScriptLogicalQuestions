let numbers = [10, 20, 30, 40];

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

let average = sum / numbers.length;

console.log(average);

/*
HOW THIS FILE WORKS

I first calculate the sum of all array elements.

Then I divide the sum by the number of elements to get the average.

IMPORTANT KEYWORDS

length
-> Number of array elements.

/
-> Division operator.

for...of
-> Loops through array values.

average
-> Stores the final average.

FLOW

Array -> calculate sum -> divide by length -> average
*/
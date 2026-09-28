let numbers = [1, 2, 3, 5];

let n = numbers.length + 1;

let total = n * (n + 1) / 2;

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

let missing = total - sum;

console.log(missing);

/*
HOW THIS FILE WORKS

I calculate the expected sum of numbers from 1 to n.

Then I calculate the actual array sum.

The difference between the expected sum and actual sum is the missing number.

IMPORTANT KEYWORDS

length
-> Number of array elements.

for...of
-> Loops through array values.

sum
-> Stores the running total.

/
-> Division operator.

FLOW

Expected sum -> actual sum -> subtract -> missing number
*/
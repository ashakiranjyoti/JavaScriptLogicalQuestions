let numbers = [10, 20, 30, 40];

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

console.log(sum);

/*
HOW THIS FILE WORKS

I start sum with 0.

Then I add every array element to sum.

Finally, I print the total.

IMPORTANT KEYWORDS

for...of
-> Loops through array values.

sum
-> Stores the total.

+
-> Addition operator.

=
-> Assignment operator.

FLOW

sum=0 -> add each number -> final sum
*/
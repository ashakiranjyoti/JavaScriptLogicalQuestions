const numbers = [2, 7, 4, 5, 3];
const target = 9;

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] + numbers[j] === target) {
            console.log("Pair:", numbers[i], numbers[j]);
        }
    }
}

/*
HOW THIS FILE WORKS

I use two loops to compare every possible pair.

If the sum of two numbers is equal to the target,
I print that pair.

Output:
Pair: 2 7
Pair: 4 5

IMPORTANT KEYWORDS

for loop
-> Repeats the code for array indexes.

numbers.length
-> Gives the array size.

i + 1
-> Starts the second loop after the current element.

===
-> Checks whether the pair sum equals the target.

FLOW

Array -> Select pair -> Add values -> Compare with target -> Print pair
*/
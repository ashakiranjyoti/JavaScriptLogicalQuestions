let numbers = [1, 2, 2, 3, 3, 3];

let frequency = {};

for (let num of numbers) {

    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log(frequency);

/*
HOW THIS FILE WORKS

I use an object to store each number and its frequency.

If the number already exists, I increase its count.
Otherwise, I create it with count 1.

IMPORTANT KEYWORDS

{}
-> Creates an object.

for...of
-> Loops through array values.

frequency[num]
-> Reads or stores the count for a number.

++
-> Increases a value by 1.

FLOW

Number -> key exists? -> increase count / add 1
*/
let numbers = [10, -5, 20, -8, 15];

let positive = 0;
let negative = 0;

for (let num of numbers) {

    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    }
}

console.log("Positive: " + positive);
console.log("Negative: " + negative);

/*
HOW THIS FILE WORKS

I use two counters.

If the number is greater than 0, I increase positive.
If the number is less than 0, I increase negative.

Zero is ignored.

IMPORTANT KEYWORDS

>
-> Greater-than operator.

<
-> Less-than operator.

else if
-> Checks another condition.

count++
-> Increases a counter.

FLOW

Number -> positive? -> positive++ -> negative? -> negative++
*/
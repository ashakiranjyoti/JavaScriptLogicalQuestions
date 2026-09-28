let str = "programming";

let frequency = {};

for (let ch of str) {

    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log("Duplicate characters:");

for (let ch in frequency) {

    if (frequency[ch] > 1) {
        console.log(ch);
    }
}

/*
HOW THIS FILE WORKS

I first count how many times each character appears.

Then I check the frequency object.
If a character appears more than once, I print it.

IMPORTANT KEYWORDS

for...of
-> Loops through characters.

for...in
-> Loops through object keys.

frequency[ch]
-> Stores the character count.

> 1
-> Means the character appeared more than once.

FLOW

String -> count characters -> frequency > 1 -> duplicate characters
*/
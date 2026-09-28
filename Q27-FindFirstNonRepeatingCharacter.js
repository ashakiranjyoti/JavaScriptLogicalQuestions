let str = "aabbcde";

let frequency = {};

for (let ch of str) {

    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

for (let ch of str) {

    if (frequency[ch] === 1) {
        console.log(ch);
        break;
    }
}

/*
HOW THIS FILE WORKS

First I count the frequency of each character.

Then I go through the original string again.

The first character with frequency 1 is the first non-repeating character.

IMPORTANT KEYWORDS

frequency
-> Stores character counts.

for...of
-> Loops through characters.

break
-> Stops the loop.

===
-> Strict equality operator.

FLOW

Count frequency -> check original order -> frequency 1 -> first non-repeating
*/
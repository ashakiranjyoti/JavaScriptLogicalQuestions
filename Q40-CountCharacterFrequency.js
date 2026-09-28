let str = "hello";

let frequency = {};

for (let ch of str) {

    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log(frequency);

/*
HOW THIS FILE WORKS

I use an object to store each character and its frequency.

If the character already exists, I increase its count.
Otherwise, I add it with count 1.

IMPORTANT KEYWORDS

object
-> Stores key-value data.

for...of
-> Loops through characters.

frequency[ch]
-> Stores the count for a character.

++
-> Increases the count.

FLOW

Character -> key exists? -> increase count / add 1
*/
let str = "I am learning JavaScript";

let words = str.split(" ");

let longest = words[0];

for (let word of words) {

    if (word.length > longest.length) {
        longest = word;
    }
}

console.log(longest);

/*
HOW THIS FILE WORKS

I split the sentence into separate words.

I assume the first word is the longest.

Then I compare the length of each word and update longest when I find a bigger word.

IMPORTANT KEYWORDS

split()
-> Splits the sentence into words.

length
-> Gives the length of a string.

for...of
-> Loops through each word.

longest
-> Stores the current longest word.

FLOW

Sentence -> split into words -> compare lengths -> longest word
*/
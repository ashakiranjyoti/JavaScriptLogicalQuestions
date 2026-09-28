let str = "I am learning JavaScript";

str = str.trim();

let words = str.split(/\s+/);

console.log(words.length);

/*
HOW THIS FILE WORKS

I first remove extra spaces from the beginning and end.

Then I split the string into words using whitespace.

The length of the resulting array is the number of words.

IMPORTANT KEYWORDS

trim()
-> Removes leading and trailing spaces.

split()
-> Splits a string into an array.

\\s+
-> One or more whitespace characters.

length
-> Number of words in the array.

FLOW

Sentence -> trim -> split into words -> length -> word count
*/
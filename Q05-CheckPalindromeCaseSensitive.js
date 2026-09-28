let str = "MaDam";

str = str.toLowerCase();

let reverse = str.split('').reverse().join('');

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

/*
HOW THIS FILE WORKS

I first convert the string to lowercase so the palindrome check ignores case.

Then I reverse the string and compare it with the lowercase value.

IMPORTANT KEYWORDS

toLowerCase()
-> Converts a string to lowercase.

if-else
-> Chooses the output based on a condition.

split()
-> Converts a string into an array.

reverse()
-> Reverses the array.

===
-> Strict comparison.

FLOW

Input -> lowercase -> reverse -> compare -> result
*/
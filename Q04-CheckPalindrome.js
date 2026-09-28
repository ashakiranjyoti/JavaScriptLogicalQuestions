let str = "madam";

let reverse = str.split('').reverse().join('');

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

/*
HOW THIS FILE WORKS

I create a reversed version of the string and compare it with the original string.

If both are equal, the string is a palindrome.

IMPORTANT KEYWORDS

if
-> Checks a condition.

else
-> Runs when the condition is false.

split()
-> Converts the string into an array.

reverse()
-> Reverses the array.

===
-> Strict comparison.

FLOW

Original string -> reverse -> compare -> Palindrome / Not Palindrome
*/
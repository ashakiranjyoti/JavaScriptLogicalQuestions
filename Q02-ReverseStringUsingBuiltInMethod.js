let str = "BTS";

let reverse = str.split('').reverse().join('');

console.log(reverse);

/*
HOW THIS FILE WORKS

I first convert the string into an array of characters.
Then I reverse the array and join it back into a string.

IMPORTANT KEYWORDS

split()
-> Converts a string into an array.

reverse()
-> Reverses the array.

join()
-> Converts the array back into a string.

let
-> Declares a variable.

FLOW

String -> split() -> reverse() -> join() -> output
*/
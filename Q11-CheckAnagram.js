let str1 = "listen";
let str2 = "silent";

let arr1 = str1.split('').sort().join('');
let arr2 = str2.split('').sort().join('');

if (arr1 === arr2) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}

/*
HOW THIS FILE WORKS

I convert both strings into arrays, sort their characters, and join them again.

If the sorted strings are equal, the two strings are anagrams.

IMPORTANT KEYWORDS

split()
-> Converts a string into an array.

sort()
-> Sorts the array.

join()
-> Converts the array back to a string.

===
-> Strict comparison.

FLOW

String -> split -> sort -> join -> compare -> result
*/
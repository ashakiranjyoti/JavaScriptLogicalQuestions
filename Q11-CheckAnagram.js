// Question:
// Write a JavaScript program to check whether two strings are Anagrams.
//
// Anagram means:
// Two strings contain the same characters with the same frequency,
// but the order of characters can be different.
//
// Examples:
// "listen" and "silent" → Anagram (true)
// "hello" and "world" → Not Anagram (false)


function isAnagram(str1, str2) {


    // Step 1: Split the first string into an array of characters.
    // "listen" → ["l", "i", "s", "t", "e", "n"]
    //
    // Step 2: Sort the characters alphabetically.
    // ["l","i","s","t","e","n"]
    // → ["e","i","l","n","s","t"]
    //
    // Step 3: Join the array back into a string.
    // ["e","i","l","n","s","t"]
    // → "eilnst"
    let sorter1 = str1.split('').sort().join('');


    // Same steps for second string.
    // "silent" → "eilnst"
    let sorter2 = str2.split('').sort().join('');


    // Step 4: Compare both sorted strings.
    // If both are same, strings are anagrams.
    return sorter1 === sorter2;
}


// Test Cases

console.log(isAnagram("listen", "silent"));

console.log(isAnagram("hey", "mnh"));



/*
Dry Run 1:

Input:
str1 = "listen"
str2 = "silent"


First String:
listen
 ↓ split()
["l","i","s","t","e","n"]
 ↓ sort()
["e","i","l","n","s","t"]
 ↓ join()
"eilnst"


Second String:
silent
 ↓ split()
["s","i","l","e","n","t"]
 ↓ sort()
["e","i","l","n","s","t"]
 ↓ join()
"eilnst"


Comparison:

"eilnst" === "eilnst"

Output:
true



Dry Run 2:

Input:
"hey"
"mnh"


Sorted:

"hey" → "ehy"
"mnh" → "hmn"


Comparison:

"ehy" === "hmn"

Output:
false
*/

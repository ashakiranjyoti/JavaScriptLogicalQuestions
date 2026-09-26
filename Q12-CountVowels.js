// Question:
// Write a JavaScript program to count the number of vowels
// present in a given string.
//
// Vowels are:
// a, e, i, o, u


function countVowels(str) {

    // Step 1: Create a variable to store the vowel count.
    // Initially, count is 0 because no vowel is checked yet.
    let count = 0;


    // Step 2: Create an array containing all vowels.
    // We will check each character against this array.
    let vowel = ['a', 'e', 'i', 'o', 'u'];


    // Step 3: Loop through every character of the string.
    for (let i = 0; i < str.length; i++) {


        // Step 4: Check whether the current character exists
        // inside the vowel array using includes().
        if (vowel.includes(str[i])) {

            // Step 5: Increase count whenever a vowel is found.
            count++;
        }
    }


    // Step 6: Return the total number of vowels.
    return count;
}


// Test Case
console.log(countVowels("javascript"));



/*
Dry Run:

Input:
"javascript"


Characters:

j → not a vowel ❌
a → vowel ✅
v → not a vowel ❌
a → vowel ✅
s → not a vowel ❌
c → not a vowel ❌
r → not a vowel ❌
i → vowel ✅
p → not a vowel ❌
t → not a vowel ❌


Counting:

a = 1
a = 2
i = 3


Final Count:
3


Output:
3
*/

// Question:
// Write a JavaScript program to count how many times the letter "a"
// appears in a given string (case-insensitive).

function countLetterA(str) {

    // Step 1: Convert the string into lowercase.
    // This helps us count both 'A' and 'a' as the same character.
    //
    // Example:
    // "Ashakiran" → "ashakiran"
    let lower = str.toLowerCase();


    // Step 2: Create a variable to store the count of 'a'.
    // Initially count is 0 because we have not found any 'a' yet.
    let count = 0;


    // Step 3: Loop through each character of the string.
    for (let i = 0; i < lower.length; i++) {


        // Step 4: Check if the current character is 'a'.
        if (lower[i] === 'a') {

            // Step 5: Increase count by 1 whenever 'a' is found.
            count++;
        }
    }


    // Step 6: Return the total number of 'a' characters.
    return count;
}


// Test Case
console.log(countLetterA("Ashakiran"));



/*
Dry Run:

Input:
"Ashakiran"


Step 1:
Convert to lowercase:

"Ashakiran"
      ↓
"ashakiran"


Step 2:
count = 0


Loop:

i = 0 → 'a' ✅
count = 1

i = 1 → 's' ❌

i = 2 → 'h' ❌

i = 3 → 'a' ✅
count = 2

i = 4 → 'k' ❌

i = 5 → 'i' ❌

i = 6 → 'r' ❌

i = 7 → 'a' ✅
count = 3

i = 8 → 'n' ❌


Final count:
3


Output:
3
*/

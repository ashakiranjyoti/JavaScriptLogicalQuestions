let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4];

console.log("Elements only in first array:");

for (let i = 0; i < arr1.length; i++) {

    let found = false;

    for (let j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(arr1[i]);
    }
}

/*
HOW THIS FILE WORKS

For every value in the first array, I search for the same value in the second array.

If the value is not found, I print it.

IMPORTANT KEYWORDS

found
-> Stores whether a match was found.

false / true
-> Boolean values.

!
-> Logical NOT.

break
-> Stops the inner loop after a match.

FLOW

First array value -> search second array -> found? -> no: print
*/
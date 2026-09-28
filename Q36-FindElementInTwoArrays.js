let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

console.log("Common elements:");

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {
            console.log(arr1[i]);
            break;
        }
    }
}

/*
HOW THIS FILE WORKS

I compare every element of the first array with every element of the second array.

When the values match, I print the common element.

IMPORTANT KEYWORDS

nested for
-> A loop inside another loop.

===
-> Strict comparison.

break
-> Stops the inner loop.

arr1[i]
-> Current value from the first array.

FLOW

First array value -> search second array -> match? -> print
*/
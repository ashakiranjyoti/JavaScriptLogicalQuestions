let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let equal = true;

if (arr1.length !== arr2.length) {
    equal = false;
} else {

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            equal = false;
            break;
        }
    }
}

if (equal) {
    console.log("Arrays are equal");
} else {
    console.log("Arrays are not equal");
}

/*
HOW THIS FILE WORKS

I first compare the lengths of both arrays.

If the lengths are the same, I compare each element at the same index.

If any element is different, the arrays are not equal.

IMPORTANT KEYWORDS

boolean value
-> true or false.

length
-> Number of array elements.

!==
-> Strict not-equal operator.

break
-> Stops the loop.

FLOW

Compare length -> compare elements -> difference found? -> result
*/
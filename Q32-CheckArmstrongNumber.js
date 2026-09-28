let num = 153;

let original = num;

let digits = String(num).length;

let sum = 0;

while (num > 0) {

    let digit = num % 10;

    sum = sum + digit ** digits;

    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}

/*
HOW THIS FILE WORKS

I save the original number because num changes during the calculation.

I count the digits, take one digit at a time, raise it to the number of digits, and add the result.

Finally, I compare the sum with the original number.

IMPORTANT KEYWORDS

String()
-> Converts a value to a string.

length
-> Gives the number of characters.

while
-> Repeats while the condition is true.

Math.floor()
-> Removes the decimal part.

**
-> Exponent operator.

FLOW

Original -> count digits -> take digit -> power -> sum -> compare
*/
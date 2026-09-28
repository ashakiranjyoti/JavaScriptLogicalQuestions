let num = 121;

let original = num;

let reverse = 0;

while (num > 0) {

    let digit = num % 10;

    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

/*
HOW THIS FILE WORKS

I save the original number.

Then I reverse the number using digit extraction.

Finally, I compare the original number with the reversed number.

IMPORTANT KEYWORDS

original
-> Keeps the input value safe.

reverse
-> Stores the reversed number.

while
-> Repeats the digit logic.

===
-> Strict comparison.

FLOW

Original -> reverse number -> compare -> Palindrome / Not Palindrome
*/
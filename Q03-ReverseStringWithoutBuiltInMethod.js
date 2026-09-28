let str = "BTS";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}

console.log(reverse);

/*
HOW THIS FILE WORKS

I start from the last character of the string and move backward.

Each character is added to the reverse variable.

IMPORTANT KEYWORDS

for
-> Repeats a block of code.

length
-> Gives the string length.

i--
-> Decreases the index by 1.

str[i]
-> Gets the character at the current index.

+
-> Concatenates strings.

FLOW

Last character -> move backward -> add character -> continue -> reversed string
*/
let str = "Hey h";

let count = 0;

for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") {
        count++;
    }
}

console.log(count);

/*
HOW THIS FILE WORKS

I check every character in the string.

If the character is not a space, I increase the count.

IMPORTANT KEYWORDS

!==
-> Strict not-equal operator.

str[i]
-> Gets the current character.

count++
-> Increases the counter.

length
-> Gives the string length.

FLOW

String -> check each character -> not a space? -> count++
*/
let str = "javascript";

str = str.toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (ch === "a" || ch === "e" || ch === "i" ||
        ch === "o" || ch === "u") {

        count++;
    }
}

console.log(count);

/*
HOW THIS FILE WORKS

I check every character in the string.

If the character is a, e, i, o, or u, I increase the count.

IMPORTANT KEYWORDS

||
-> Logical OR.

char
-> Variable used here to store one character.

count++
-> Increases the counter.

length
-> Gives the string length.

FLOW

String -> check each character -> vowel? -> count++
*/
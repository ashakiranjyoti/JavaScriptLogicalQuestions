let str = "Ashakiran";

str = str.toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {

    if (str[i] === "a") {
        count++;
    }
}

console.log(count);

/*
HOW THIS FILE WORKS

I convert the string to lowercase so A and a are treated the same.

Then I check every character.
Whenever I find "a", I increase the count.

IMPORTANT KEYWORDS

toLowerCase()
-> Converts a string to lowercase.

charAt() / str[i]
-> Gets one character from a string.

count++
-> Increases the count by 1.

for
-> Loops through the string.

FLOW

String -> lowercase -> check characters -> count "a"
*/
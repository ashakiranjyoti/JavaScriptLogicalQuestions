let str = "JavaASScript";

let count = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
        count++;
    }
}

console.log(count);

/*
HOW THIS FILE WORKS

I check every character.

If a character is between A and Z, I count it as uppercase.

IMPORTANT KEYWORDS

>=
-> Greater-than-or-equal comparison.

<=
-> Less-than-or-equal comparison.

&&
-> Logical AND.

count++
-> Increases the count.

FLOW

Character -> A to Z? -> yes -> count++
*/
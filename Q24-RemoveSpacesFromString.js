let str = "Hello World JavaScript";

let result = str.replace(/\s/g, "");

console.log(result);

/*
HOW THIS FILE WORKS

I use replace() with a regular expression to find all whitespace characters.

Then I replace them with an empty string.

IMPORTANT KEYWORDS

replace()
-> Replaces matching text.

\\s
-> Regular expression pattern for whitespace.

g
-> Global flag, so all matches are replaced.

""
-> Empty string.

FLOW

String -> find whitespace -> replace with empty string -> result
*/
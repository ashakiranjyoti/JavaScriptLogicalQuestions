const sentence = "I am a QA Engineer";

const reversedWords = sentence.split(" ").reverse().join(" ");

console.log("Reversed words:", reversedWords);

/*
HOW THIS FILE WORKS

I convert the sentence into an array of words using split(" ").

Then I reverse the word order using reverse().

Finally, I join the words again using join(" ").

Output:
Reversed words: Engineer QA a am I

IMPORTANT KEYWORDS

split()
-> Converts a string into an array.

reverse()
-> Reverses the array.

join()
-> Converts the array back into a string.

FLOW

String -> split() -> reverse() -> join() -> Reversed string
*/
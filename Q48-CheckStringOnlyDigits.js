const value = "123456";

const isOnlyDigits = /^\d+$/.test(value);

console.log("Contains only digits:", isOnlyDigits);

/*
HOW THIS FILE WORKS

I store a string in the value variable.

Then I use a regular expression to check
whether the string contains only digits.

Output:
Contains only digits: true

IMPORTANT KEYWORDS

/\d+/
-> Checks for one or more digits.

test()
-> Checks whether the string matches the pattern.

^
-> Start of the string.

$
-> End of the string.

FLOW

String -> Regex check -> Only digits? -> true / false
*/
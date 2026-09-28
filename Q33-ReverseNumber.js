let num = 1234;

let reverse = 0;

while (num > 0) {

    let digit = num % 10;

    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10);
}

console.log(reverse);

/*
HOW THIS FILE WORKS

I take the last digit using % 10.

Then I add it to the reverse number after shifting the existing digits.

Finally, I remove the last digit from num and repeat.

IMPORTANT KEYWORDS

while
-> Repeats while the condition is true.

% 10
-> Gets the last digit.

* 10
-> Shifts existing digits left.

Math.floor()
-> Removes the decimal part after division.

FLOW

Number -> last digit -> add to reverse -> remove digit -> repeat
*/
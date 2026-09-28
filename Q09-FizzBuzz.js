for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*
HOW THIS FILE WORKS

I loop from 1 to 100.

First I check numbers divisible by both 3 and 5.
Then I check 3, then 5.
Otherwise I print the number.

IMPORTANT KEYWORDS

%
-> Returns the remainder.

&&
-> Logical AND.

else if
-> Checks another condition.

<=
-> Less-than-or-equal operator.

FLOW

1 to 100 -> check 3 and 5 -> FizzBuzz / Fizz / Buzz / number
*/
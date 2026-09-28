let n = 7;

let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {

    console.log(a);

    let next = a + b;

    a = b;
    b = next;
}

/*
HOW THIS FILE WORKS

I keep the first two Fibonacci values in a and b.

I print a, calculate the next value using a + b, and then move the values forward.

IMPORTANT KEYWORDS

next
-> Stores the next Fibonacci value.

=
-> Assignment operator.

+
-> Addition operator.

for
-> Repeats the series.

FLOW

a=0, b=1 -> print a -> next=a+b -> shift values -> repeat
*/
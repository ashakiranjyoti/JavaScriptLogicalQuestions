let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("Without third variable:");
console.log("a = " + a);
console.log("b = " + b);


let x = 10;
let y = 20;
let temp;

temp = x;
x = y;
y = temp;

console.log("Using third variable:");
console.log("x = " + x);
console.log("y = " + y);

/*
HOW THIS FILE WORKS

This file shows two common ways to swap two numbers.

First, I swap the values without using a third variable by using addition and subtraction.

Second, I use a temporary variable to store one value while swapping.

IMPORTANT KEYWORDS

let
-> Declares a variable.

temp
-> Temporary variable used during swapping.

=
-> Assignment operator.

+
-> Addition.

-
-> Subtraction.

FLOW

Without third variable:
a=10, b=20 -> a=30 -> b=10 -> a=20

Using third variable:
x=10, y=20 -> temp=x -> x=y -> y=temp
*/
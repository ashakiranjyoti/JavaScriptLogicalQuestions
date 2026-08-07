// Question:
// Write a JavaScript program to count the frequency
// of each element in an array.


function countFrequency(arr) {

    let frequency = {};


    // Loop through every element
    for(let i = 0; i < arr.length; i++) {


        // If element already exists,
        // increase count.
        if(frequency[arr[i]]) {

            frequency[arr[i]]++;

        }

        // Otherwise create new key.
        else {

            frequency[arr[i]] = 1;
        }
    }


    return frequency;
}


console.log(countFrequency([1,2,2,3,3,3]));


/*
Dry Run:

Input:
[1,2,2,3,3,3]


1:
{
1:1
}


2:
{
1:1,
2:1
}


2 again:
{
1:1,
2:2
}


3:
{
1:1,
2:2,
3:1
}


3:
{
1:1,
2:2,
3:2
}


3:
{
1:1,
2:2,
3:3
}


Output:

{
1:1,
2:2,
3:3
}
*/

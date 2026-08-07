// Question:
// Write a JavaScript program to find duplicate elements
// from an array.


function findDuplicates(arr) {

    let duplicates = [];
    let seen = {};


    for(let i = 0; i < arr.length; i++) {


        if(seen[arr[i]]) {

            duplicates.push(arr[i]);

        }

        else {

            seen[arr[i]] = true;
        }
    }


    return duplicates;
}


console.log(findDuplicates([1,2,3,2,4,3]));


/*
Dry Run:

1 → seen
{
1:true
}


2 → seen
{
1:true,
2:true
}


3 → seen
{
1:true,
2:true,
3:true
}


2 found again

duplicates:
[2]


3 found again

duplicates:
[2,3]


Output:
[2,3]
*/

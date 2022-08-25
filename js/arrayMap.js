/*
    Array map is applied on array only. 

    Definition and usage: 

    map() creates a new array from calling a function for every array element.

    map() calls a function once for each element in an array.

    map() does not execute the function for empty elements.

    map() does not change the original array.
*/

/* 
    For the following program: 
    1: Get an array.
    2: Get the each element of the array five times.
    3: Store elements in an new array
    4: Return the array. 

*/

/* 
    Normally we can do this by function in many line of codes. But using map() we can do this simply: 
*/

const arr = [1, 2, 3, 4, 5].map(x => x * 5); /* This is an arrow function like following: 

const newarray = x => x * 5; */

console.log(arr);
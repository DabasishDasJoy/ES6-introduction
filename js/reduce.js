/* 
    The reduce() method executes a reducer function for array element.

    The reduce() method returns a single value: the function's accumulated result.

    The reduce() method does not execute the function for empty array elements.

    The reduce() method does not change the original array.
*/

/* 
    consider an example: 
    *Rerturn summution of all array elements
*/

const nums = [1, 2, 3, 4, 5];

//reduce(accumulator(two params), initial value);
const sum = nums.reduce((sum, num) => sum + num, 0);
console.log(sum); //Result will be : 15

//debugging
const sum1 = nums.reduce((sum, num) => {
    console.log(sum + " " + num);
    return sum + num;
}, 0);
console.log(sum1); 
/* 
    result: 
    0 1 // sum = 0 num = 1
    1 2
    3 3
    6 4
    10 5
*/

console.log("==============");
const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }

const {price} = product;
console.log(price);
const numbers = [45, 324, 547, 28, 27, 298];
// To find the max elements from above array we can pass the aray elements as argument in Math.max

const max = Math.max(...numbers); //use of spread operator
console.log(max);   

// Trying to assign the numbers array to new variable nums.
const nums = numbers;
//Push nums array but trying keep numbers array remain same.
nums.push(200);
console.log(nums);
console.log(numbers);
console.log("=====================================");
//In the above 200 will be in both arrays because of referential integrity. which is 
//Both refers to the same obeject. 


// to solve this we can do follwing
const nums1 = [...numbers] //create a new array and set the numbers array's elemenent using spread operator
// const nums1 = [numbers] //This creates an 2D array
nums1.push(900);
console.log(nums1);
console.log(numbers);
//here only nums1 array will change
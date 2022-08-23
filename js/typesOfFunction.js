// function declaration
function add1(num1, num2){
    return num1 + num2;
}

//function expression with annonymous function
const add2 = function(num1, num2){
    return num1 + num2;
}

//Arrow function
//One type
const add3 = (num1, num2)=> num1 + num2;

// Multiline arrow function
const add5 = (a, b, c, d) => {
    const res = a + b;
    const mul = res * c;
    const div = mul / d;

    return div;
}

// arrow function with just single parameter
const add6 = val => val * 5;

console.log(add3(5, 6));
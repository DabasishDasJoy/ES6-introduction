/*
When arguments are not provided asign a default parameter in the parameter declaration. parameter.
parameter assigning generally used for right paramenter
*/

function add(name1, name2 = "chowdhury"){
    return name1+ " " + name2;
}


console.log(add('Aslam'));
console.log(add('Aslam', "khan"));



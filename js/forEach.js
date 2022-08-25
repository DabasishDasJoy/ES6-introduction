/* 
    foreach() is the same thing as map()
    But the key differences are:
    1: map() return an array, but foreach() doesn't returns anything

*/

//If I just want to print the values of an array

const persons = [
    {id: 1, name: "Abul", addess: "Banglades"}, 
    {id: 2, name: "babul", addess: "USA"}, 
    {id: 3, name: "kabul", addess: "Sweden"}, 
    {id: 4, name: "Jabul", addess: "canada"}, 
]

const names = persons.forEach(x => console.log(x.name));
console.log(names); //This returns undefinde cause foreach doesn't return any value.
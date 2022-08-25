/* 
    map() can be applied on array of object too
*/

const persons = [
    {id: 1, name: "Abul", addess: "Banglades"}, 
    {id: 2, name: "babul", addess: "USA"}, 
    {id: 3, name: "kabul", addess: "Sweden"}, 
    {id: 4, name: "Jabul", addess: "canada"}, 
]

/* 
    Just want store the names in an array using map and arrow fucntion
*/

const names = persons.map(x => x.name);
console.log(names);
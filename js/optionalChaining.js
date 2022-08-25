/**
 * Optional chaining is if an data in an object chaining is not present then searching will halt there.
 * Suppose an object has another object and that object has another. When we want to search for that object if that object is not present the program will throw an error. To ignore that error we can use optional chainning.
 */


const person = {
    name: "Abul hossain",
    id: 01,  
    address: {
        street: {
            first: "35/b, kochukhet lane", 
            second: "fifth floor", 
            third: "5B"
        },
        postOffice: 'cantonment', 
        city: 'Dhaka' 
    }
}
//Finding the floor of the person.
// console.log(person.address.street.third);

// if anyhow person's street address is not present the program will throw an error and terminate. If that is ignore if not present use optional chaining
console.log(person.address.street?.third);

//If street exist then find the third otherwise not.
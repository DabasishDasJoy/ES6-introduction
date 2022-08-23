//Array, object destructuring

const fish = {
    name: "Hilsha Fish", 
    color: "Rupali", 
    phone: "01876097120", 
    price: 1200, 
}

// Want to strore values in a variable instead of calling again and again 

// const color = fish.color;
// const price = fish.price;

// Here I am setting same variable name as the property, In ES6 we can do following:

const {color, phone, price, name} = fish; //Setting the same named variable as the objects key name.
// console.log(color);
// const {...fishes} = fish; return //the whole object
// console.log(fishes); 

const phones = () =>{
    const phones = {
        brand: "Oppo Fish", 
        country: "Sweden", 
        mobile: "01876097120", 
        bid: 1200 
    };

    return phones;
}

// if returns from a functions recieve the function like below:
const {brand, country, bid} = phones();
console.log(brand);

// as same as for the array also. But in array we should use []

//For object-> {} and for array -> []

const nums = [32, 43, 54, 5, 3, 5];

const [first, second, third] = nums;
// console.log(second);

const cars=['toyota', 'honda','mercedes']; const newCars= [...cars , 'ferrari'];
console.log(newCars);
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

//USING REDUCE
// const arrayOfFirstLetterOfFruit = fruits.reduce((acc, fruit) => {
//     acc.push(fruit[0]);
//     return acc;
// }, []);
// console.log(arrayOfFirstLetterOfFruit);

//USING MAP
const arrayOfFirstLetterOfFruit = fruits.map(fruit => fruit[0]);
// console.log(arrayOfFirstLetterOfFruit);


// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

//USING REDUCE
// const arrayOfUserObj = customers.reduce( (acc, { name, age }) => {
//     acc.push({name, age});
//     return acc;
// }, []);
//
// console.log(arrayOfUserObj);
//

const arrayOfUserObj = customers.map(({ name, age}) => {
    return {name, age};
});
// console.log(arrayOfUserObj);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

const arrayOfCivilServants = customers.filter(({occupation}) => {
    return (occupation.toLowerCase() === 'teacher' || occupation.toLowerCase() === 'police officer');
}).map(({name, age}) => {
    return {name, age, 'status' : 'civil servant'};
});
// console.log(arrayOfCivilServants);


// PROBLEM 4 - determine the average age of customers

const avgAgeOfCustomers = customers.reduce( ( acc, { age } ) => acc + age, 0 ) / customers.length;
// console.log(`Average Age ${avgAgeOfCustomers}`);

//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()

// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];



// complete the bonuses below...
// - Calculate the average age of family members

const calcAvgAge = Math.floor(family.reduce((acc , { age }) => acc += age, 0) / family.length);
console.log(calcAvgAge);

// - Create an array of family objects without the age property

const removeAge = family.reduce((acc, { name, gender }, index ) => {
    return acc[index] = {
        name,
        gender
    }
}, []);

console.log(removeAge);

// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages

"use strict";

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

const pets = [
  {
    name: 'Bud',
    age: 2,
    breed: 'Pug'
  },
  {
    name: 'Gabby',
    age: 10,
    breed: 'Retriever'
  },
  {
    name: 'Fred',
    age: 1,
    breed: 'Lab'
  },
  {
    name: 'Bowser',
    age: 2,
    breed: 'Pug'
  }
];

const family = [
  {
    name: "Pam",
    gender: "female",
    age: 29,
  },
  {
    name: "Amelie",
    gender: "female",
    age: 10,
  },
  {
    name: "Justin",
    gender: "male",
    age: 32,
  },
];

// PROBLEM 1 - create an array of the first letters of each fruit
let firstLetterOfFruits = fruits.map((e) => e.charAt(0));

// console.log(firstLetterOfFruits);


// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
let newUsers = customers.map((e) => {
  return { name: e.name, age: e.age };
})

// console.log(newUsers);


// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

let civilServantCustomers = customers;

// PROBLEM 4 - determine the average age of customers

let averageCustomerAge = customers.reduce((acc,curr) => {
  return acc + curr.age;
}, 0) / customers.length;

// console.log(averageCustomerAge);

// PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...
/*

    {
        name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
        age: THE_TOTAL_OF_ALL_PET_AGES,
        breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
    }

  */

let makeSuperPet = (arr) => {
  // concatenate names
  let names = "";
  
  arr.map((e) => {
    names += e.name;
  });
  
  
  // sum of all ages
  let sumOfAges = 0;
  
  arr.map((e) => {
    sumOfAges += e.age;
  });
  
  // char(0) of breeds concatendated
  let firstLetterOfBreeds = "";
  
  arr.map((e) => {
    firstLetterOfBreeds += e.breed.charAt(0);
  })
  
  return { name: names, age: sumOfAges, breed: firstLetterOfBreeds };
}

// console.log(makeSuperPet(pets));

// PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
// your output for the given input should be [3, 6] for 'Bud' and 'Bowser'

let indexesOfPugs = (arr) => {
  let tempArr = [];
  
  arr.filter((e,i) => {
    if (e.breed === "Pug") {
      tempArr.push(e.name.length);
    }
  });
  
  return tempArr;
}

// console.log(indexesOfPugs(pets));


// PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
// returns an array of female family member names

const getFemaleFamilyMembers = (arr) => {
  let tempArr = [];
  arr.filter((e) => {
    (e.gender === "female") ? tempArr.push(e.name) : "";
  })
  return tempArr;
};

// console.log(getFemaleFamilyMembers(family));

// PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
// returns a string of all property values with dashes separating each property value

const makeLongPetString = (arr) => {
  let temp = "";
  arr.map((e) => {
    temp += e.name + "-" + e.gender + "-" + e.age + " ";
  });
  temp = temp.trim();
  return temp;
};

// console.log(makeLongPetString(pets));



// PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith

    const input = ['Sally', 'Fred', 'Steve']
    // output = ['Sally Smith', 'Fred Smith', 'Steve']

const formatNames = (arr) => {
  let smithStr = " Smith";
  let temp = [];
  
  arr.map((e) => {
    temp.push(e + " Smith");
  });
  
  return temp;
}

// console.log(formatNames(input));

// PROBLEM 10 - create a function that when given an array of numbers, returns the sum of even numbers

const sumOfEvens = (arr) => {
  let sum = 0;
  arr.map((e) => {
    (e % 2 === 0) ? sum += e : "";
  });
  return sum;
}

someNums = [12,14,55,23,5,86,55,34,235,6,32,2,11];

sumOfEvens(sumOfEvens(someNums));

// PROBLEM 11 - create a function that when given an array of numbers, returns the sum of all numbers evenly divisible by 10

// PROBLEM 12 - create a function that when given an array of names, returns a string of all the first letters of each name

// PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values

// PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements

// PROBLEM 15 - create a function that when given an object, returns the property values as an array of elements

// PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
// of nums will return the array of nums that are only between the min and max values, inclusive

// PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
// with properties for the given string value and the length of the string and the string without vowels (not including y)
// bonuses for objects and arrays.


// 1

function filterNumbers(arr) {
  let tempArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && typeof arr[i] === "number") {
      tempArr.unshift(arr[i]);
    }
  } 
  
  tempArr.sort();
  
  return tempArr;
}

var sampleArr = [ "fred", true, 5, 3 ];

console.log(filterNumbers(sampleArr));


// 2

var dogs = [
  {
    name: "Chompers",
    breed: "Pug",
    age: 7
  },
  {
    name: "Freddy",
    breed: "Lab",
    age: 4
  },
  {
    name: "Mr. Pig",
    breed: "Mastif",
    age: 10
  }
];

console.log(dogs);

function getOlder(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("woof");
    arr[i].age++;
  }
}

getOlder(dogs);

console.log(dogs);


// 3

var car = [
  {
    make: 'Volvo',
    color: 'red',
    year: 1996,
    isDirty: true
  },
  {
    make: 'Toyota',
    color: 'black',
    year: 2004,
    isDirty: false
  },
  {
    make: 'Ford',
    color: 'white',
    year: 2007,
    isDirty: true
  }
];

function washCars(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].isDirty === true) {
      arr[i].isDirty = false;
    }
  }
}

washCars(car);

console.log(car);


// 4

var users = [
  {
    isAdmin: true,
    email: 'user1@email.com'
  },
  {
    isAdmin: true,
    email: 'user2@email.com'
  },
  {
    isAdmin: false,
    email: 'user3@email.com'
  }
];

function adminList(arr) {
  let count = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].isAdmin === true) {
      count++;
    }
  }

  return count;
}

console.log(adminList(users));


// 5

var breads  = [
  "white",
  "wheat",
  "rhy",
  "white"
];

var fillings = [
  "pb&j",
  "ham",
  "cheese steak",
  "tuna"
];

console.log(breads);
console.log(fillings);

var sandwiches = [];

console.log(sandwiches);

function makeSandwhichObjects(arr1, arr2) {
  let length = arr1.length;
  
  console.log("length is " + length);
  
  for (var i = 0; i < length; i++) {
    sandwiches.push({bread: arr1[i], fillings: arr2[i]});
  }
}

makeSandwhichObjects(breads, fillings);

console.log(sandwiches);
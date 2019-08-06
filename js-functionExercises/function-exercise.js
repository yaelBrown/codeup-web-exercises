// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive() {
  return 5;
}

console.log(returnFive());

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive(num) {
  return num === 5;
}

console.log(isFive(2));
console.log(isFive(5));

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(str) {
  return str.length <= 5;
}

console.log(isShortWord("cookies"));
console.log(isShortWord("five"));


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

function isSameLength(str1, str2) {
  return str1.length == str2.length;
}

console.log(isSameLength("cookies", "cookies"));
console.log(isSameLength("cookies", "donuts"));

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

function getSmallerSegment(str3, num) {
  return str3.substring(0,num).toLowerCase();
}

console.log(getSmallerSegment("Apple",4));
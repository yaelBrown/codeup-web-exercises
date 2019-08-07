// Make a function named isOdd(number)
  function isOdd(num) {
    return (num % 2 == 1);
  }

  // console.log(isOdd(5));

// Make a function named isEven(number)
  function isEven(num) {
    return (num % 2 == 0);
  }

  // console.log(isEven(2));

// Make a function named identity(input) that returns the input exactly as provided.
  function identity(input) {
    return input;
  }

  // console.log(identity("This is input"));

// Make a function named isFive(input)
  function isFive(input) {
    return input == 5;
  }

  // console.log(isFive(4));

// Make a function named addFive(input) that adds five to some input.
  function addFive(input) {
    return input + 5;
  }

  // console.log(addFive(5));

// Make a function named isMultipleOfFive(input)
  function isMultipleOfFive(input) {
    return input % 5 == 0; 
  }

// Make a function named isThree(input)
  function isThree(input) {
    return input == 3;
  }

// Make a function named isMultipleOfThree(input)
  function isMultipleOfThree(input) {
    return input % 3 == 0; 
  }

// Make a function named isMultipleOfThreeAndFive(input)
  function isMultipleOfThreeAndFive(input) {
    return (input % 3 == 0 && input & 5 == 0);
  }

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
  function isMultipleOf(target, n) {
    return (n % target == 0);
  }
  
// Make a function named isTrue(boolean)
  function isTrue(bool) {
    return bool;
  }

// Make a function named isFalse(boolean)
  function isFalse(bool) {
    return !bool;
  }

// Make a function named isTruthy(input), remember that values other than true will behave like true
  function isTruthy(bool) {
    return ((bool) || (!bool)) == true;
  }

// Make a function named isFalsy(input), remember that values other than false behave like false
  function isFalsy(input) {
    return ((bool) || (!bool)) !== true;
  }

// Make a function named isVowel(letter)
  function isVowel(ltr) {
    ltr.toLowerCase();
    let vowel;

    switch (ltr) {
      case "a":  
      case "e":
      case "i":
      case "o":
      case "u":
        vowel = "true"
        break;

      default: 
        vowel = "false"
        break;
    }

    return vowel;
  }

// Make a function named isConsonant(letter)
  function isConsonant(ltr) {
    ltr.toLowerCase();
    let vowel;

    switch (ltr) {
      case "a":  
      case "e":
      case "i":
      case "o":
      case "u":
        vowel = "true"
        break;

      default: 
        vowel = "false"
        break;
    }

    return !vowel;
  }
  


// Make a function named isCapital(letter)
  function isCapital(ltr) {
    let temp; 
    temp = ltr;
    temp.toUpperCase();
    return ltr == temp;
  }

// Make a function named isLowerCase(letter)
  function isLowerCase(ltr) {
    let temp; 
    temp = ltr;
    temp.toLowerCase();
    return ltr == temp;
  }

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
  function hasLowerCase(str) {
    let temp = [];
    let tempUpperCase = [];
    let strArr = str.split('');
    let isLowerCase;
    
    temp = strArr;
    
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i].toLowerCase()){
        isLowerCase = true;
      } else {
        isLowerCase = false
      }
    }
    
    return isLowerCase;
  }

// Make a function named isSpace(letter) that returns if a character is a space character
  function isSpace(ltr) {
    return (ltr == " ");
  }

// Make a function named isZero(number)
  function isZero(num) {
    return num == 0;
  }

// Make a function named notZero(input) that returns true if the input is not zero
  function notZero(num) {
    return num !== 0;
  }

// Write a function named lowerCase(string)
  function lowerCase(str) {
    return str.toLowerCase();
  }

// Write a function named double(n) that returns a number times two
  funtion double(n) {
    return n * 2;
  }

// Write a function named triple(n) that returns a number times 3
  function triple(n) {
    return n * 3;
  }

// Write a function named quadruple(n) that returns a number times 4
  function quadruple(n) {
    return n * 4;
  }

// Write a function named half(n) that returns 1/2 of the provided input
  function half(n) {
    return n * .5;
  }

// Write a function named subtract(a, b) that returns a minus b
  function subtract(n1, n2) {
    return n1 - n2;
  }

// Write a function named multiply(a, b) that returns the product of a times b
  function multiply(n1, n2) {
    return n1 * n2;
  }

// Write a function named divide(a, b) that returns a divided by b
  function divide(n1, n2) {
    return n1 / n2;
  }

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
  function remainder(n1, n2) {
    return n1 % n2;
  }

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b


// Write a function named cube(n) that returns n * n * n
  function cube(n) {
    return n * n * n; 
  }

// Write a function named squareRoot(n) that returns the square root of the input
  function squareRoot(n) {
    return Math.pow(n, 2);
  }

// Write a function named cubeRoot(n) that returns the cube root of the input
  function cubeRoot(n) {
    return Math.power(n, 3);
  }

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
  function invertSign(n) {
    return -(n);
  }

// Write a function named degreesToRadians(number)
  function degreesToRadians(n) {
    return (n * (Math.PI / 180));
  }


// Write a function named radiansToDegrees(number)
  function radiansToDegrees(n) {
    return ((180 / Math.PI) * n);
  }

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
  function isBlank(input) {
    return (input == " ") || (input == "\n") || (input == "\t");

  }

// Make a function named trim(string) that removes empty spaces before and after the input.
  function trim(str) {
    return str.trim();
  }

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
  function areEqual(inp1, inp2) {
    return inp1 == inp2;
  }

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
  function areIdentical(inp1, inp2) {
    return inp1 === inp2;
  }

// Make a function named not(input) returns the input with a flipped boolean
  function not(input) {
    return !(input);
  }

// Make a function named notNot(input) that the negation of the negation of the input.
  function notNot(bool) {
    return !!(bool);
  }

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
  function and(predicate1, predicate2) {
    return predicate1 && predicate2;
  }

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
  function or(bool1, bool2) {
    return bool1 || bool2;
  }

// Write a function called reverseString(string) that reverses a string
function reverseString(str) {
  let temp = [];
  let revStr = "string";
  
  temp = str.split("").reverse();
  revStr = temp.join();
  
  let repeat = Math.floor(revStr.length / 2);
  
  for (var i = 0; i < repeat; i++) {
    revStr = revStr.replace(",", "");
  }
    
  return revStr; 
}

// Make a function named absoluteValue(number) that returns the absolute value of a number.
  function absoluteValue(num) {
    return Math.abs(num);
  }

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
  function rollDice(sides) {
    return Math.floor(Math.random() * (sides + 1));
  }

// Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
  function returnTwo() {
    return 2;
  }

// Test this function with console.log(returnTwo())
  console.log(returnTwo());

// Make a function called sayHowdy() which console.logs the string “Howdy!”
  function sayHowdy() {
    console.log("Howdy!");
  }

// Test this function by directly calling sayHowdy()
  console.log(sayHowdy());

// Remember this function does not need a defined return value

// Make a function called returnName() that returns the string of your name
  function returnName(name) {
    console.log(name);
  }

// Test this function with console.log(returnName())
  console.log(returnName());

// Make a function called addThree() which takes in a number input and returns the number plus 3.
  function addThree(num) {
    return num + 3;
  }

// Test this function with console.log(addThree(5))
  console.log(addThree(5));

// Make a function called sayString() which returns the string input passed in.
  function sayString(str) {
    return str;
  }

// Test this function with console.log(sayString('codeup'))
  console.log(sayString("Codeup"));

// Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
  function identity(input) {
    return input;
  }

// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
  function getRandomNumber(min, max) {
    return (Math.random() * (+max - +min) + min);
  }

// Write a function called first(input) that returns the first character in the provided string.
  function first(input) {
    let temp;
    let tempArr = [];

    tempArr = input.split("")

    return tempArr[0];
  }
// Write a function called last(input) that returns the last character of a string
  function last(input) {
    let tempArr = [];
  
    tempArr = input.split("");
  
    return tempArr[tempArr.length - 1];
  }

// Write a function called rest(input) that returns everything but the first character of a string.
function rest(input) {
  return input.substring(1, (input.length));
}

// Write a function called reverse(input) that takes a string and returns it reversed.
function reverse(input) {
  let temp = [];
  let revStr = "string";
  
  temp = input.split("").reverse();
  revStr = temp.join();
  
  let repeat = Math.floor(revStr.length / 2);
  
  for (var i = 0; i < repeat; i++) {
    revStr = revStr.replace(",", "");
  }
    
  return revStr; 
}

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
function isNumeric(input) {
  return (typeof input) == "number";
}

// Write a function called count(input) that takes in a string and returns the number of characters.
function count(str) {
  return str.length;
}

// Write a function called add(a, b) that returns the sum of a and b
function add(a,b) {
  return a + b;
}

// Write a function called subtract(a, b) that return the difference between the two inputs.
function subtract(a,b) {
  return a-b;
}

// Write multiply(a, b) function that returns the product
function multiply(a,b) {
  return a*b;
}

// Write a divide(numerator, denominator) function that returns a divided by b
function divide(numer, denom) {
  return numer / denom;
}

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor


// Write the function square(a) that takes in a number and returns the number multiplied by itself.

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.

// Create a function that takes in two string inputs.

// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).

// Create a function returnTrueMessage() that returns the string "Hey, it's true!"

// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.

// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
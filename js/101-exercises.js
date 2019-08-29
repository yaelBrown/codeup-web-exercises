"use strict"; // leave this line here :)

// https://glitch.com/edit/#!/imminent-quesadilla?path=101-exercises.js:1197:0

// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
// var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
var doingJSRightNow = true;

assert(doingJSRightNow, true, "a variable holding a true boolean value should be equal to true");
addToDone("Exercise 0 is correct");


//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
var onMarsRightNow = false;

assert(onMarsRightNow, false, "If you see a Reference Error, be sure to create the variable and assign it a value.");
addToDone("Exercise 1 is correct.");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 2 is correct.");

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini
var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var numbers = [1,2,3,4,5,6,7,8,9, 10];

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Ensure the variable contains the numbers 1-10 in order.");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push("tomato");

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Ensure the variable contains all the strings in the right order");
addToDone("Exercise 5 is correct");

// Exercise 6
// Given the following assignment of the vegetables array, add "tomato" to the end of the array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push("tomato");


assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reverse();

assert(numbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "An Error means that the answer is incorrect.")
addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();


assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort().reverse();


assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'])
addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
var fruitsAndVeggies = fruits.concat(vegetables);

assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne(num) {
  return num+1;
}


assert(addOne(2), 3, "Ensure that the function is defined, named properly, and returns the correct value");
assert(addOne(0), 1, "Zero plus one is one.");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Ensure that the function is defined, named properly, and returns the correct value");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 11 is correct.")


// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
var isPositive = (num) => {
    return num > 0;
}


assert(isPositive(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
var isNegative = (num) => {
    return num < 0;
}


assert(isNegative(positiveOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(positiveEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
var isOdd = (num) => {
    if (num <= 0) {
      num = Math.abs(num);
    }
    
    console.log(num)
    if (Math.abs(num) % 2 === 1) {
        return true;
    } else {
        return false;
    }
}


assert(isOdd(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(positiveEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
var isEven = (num) => {
    if (num <= 0) {
      num = Math.abs(num);
    }
  
    if (num % 2 === 1) {
        return false;
    } else {
        return true;
    }
}


assert(isEven(2), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any argument and returns that argument's value. Don't overthink this one!
var identity = (val) => {
    return val
}

assert(identity(fruits), fruits, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(vegetables), vegetables, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveOddNumber), positiveOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeOddNumber), negativeOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
var isPositiveOdd = (num) => {
    if (num > 0 && num % 2 === 1) {
        return true;
    } else {
        return false;
    }
}


assert(isPositiveOdd(3), true, "Double check your syntax and logic" );
assert(isPositiveOdd(positiveOddNumber), true, "Double check your syntax and logic");
assert(isPositiveOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
var isPositiveEven = (num) => {
    if (num > 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



assert(isPositiveEven(4), true, "Double check your syntax and logic" );
assert(isPositiveEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(positiveEvenNumber), true, "Double check your syntax and logic");
assert(isPositiveEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
var isNegativeOdd = (num) => {
    if (num < 0 && num % 2 === -1) {
      return true
    } else {
      return false
    }
}


assert(isNegativeOdd(-3), true, "Double check your syntax and logic" );
assert(isNegativeOdd(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(negativeOddNumber), true, "Double check your syntax and logic");
assert(isNegativeOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
var isNegativeEven = (num) => {
    if (num < 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



assert(isNegativeEven(-4), true, "Double check your syntax and logic" );
assert(isNegativeEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeEvenNumber), true, "Double check your syntax and logic");
addToDone("Exercise 20 is correct.")



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

var half = (num) => {
    return num / 2;
}


assert(half(4), 2);
assert(half(5), 2.5);
assert(half(positiveOddNumber), positiveOddNumber / 2);
assert(half(positiveEvenNumber), positiveEvenNumber / 2);
assert(half(negativeOddNumber), negativeOddNumber / 2);
assert(half(negativeEvenNumber), negativeEvenNumber / 2);
addToDone("Exercise 21 is correct.")



// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
var double = (num) => {
    return num * 2;
}


assert(double(4), 8)
assert(double(5), 10)
assert(double(positiveOddNumber), positiveOddNumber * 2)
assert(double(positiveEvenNumber), positiveEvenNumber * 2)
assert(double(negativeOddNumber), negativeOddNumber * 2)
assert(double(negativeEvenNumber), negativeEvenNumber * 2)
addToDone("Exercise 22 is correct.")



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
var triple = (num) => {
    return num * 3;
}


assert(triple(4), 12);
assert(triple(5), 15);
assert(triple(positiveOddNumber), positiveOddNumber * 3);
assert(triple(positiveEvenNumber), positiveEvenNumber * 3);
assert(triple(negativeOddNumber), negativeOddNumber * 3);
assert(triple(negativeEvenNumber), negativeEvenNumber * 3);
addToDone("Exercise 23 is correct.")



// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
var reverseSign = (num) => {
    return -(num);
}


assert(reverseSign(4), -4);
assert(reverseSign(-5), 5);
assert(reverseSign(positiveOddNumber), positiveOddNumber * -1);
assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1);
assert(reverseSign(negativeOddNumber), negativeOddNumber * -1);
assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1);
addToDone("Exercise 24 is correct.")



// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
var absoluteValue = (num) => {
    return Math.abs(num);
}


assert(absoluteValue(4), 4);
assert(absoluteValue(-5), 5);
assert(absoluteValue(positiveOddNumber), positiveOddNumber);
assert(absoluteValue(positiveEvenNumber), positiveEvenNumber);
assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1);
assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1);
addToDone("Exercise 25 is correct.")



// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
var isMultipleOfThree = (num) => {
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}


assert(isMultipleOfThree(3), true);
assert(isMultipleOfThree(15), true);
assert(isMultipleOfThree(9), true);
assert(isMultipleOfThree(4), false);
assert(isMultipleOfThree(10), false);
addToDone("Exercise 26 is correct.")




// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
var isMultipleOfFive = (num) => {
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}



assert(isMultipleOfFive(3), false);
assert(isMultipleOfFive(15), true);
assert(isMultipleOfFive(9), false);
assert(isMultipleOfFive(4), false);
assert(isMultipleOfFive(10), true);
addToDone("Exercise 27 is correct.")



// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
var isMultipleOfBothThreeAndFive = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}



assert(isMultipleOfBothThreeAndFive(15), true);
assert(isMultipleOfBothThreeAndFive(45), true);
assert(isMultipleOfBothThreeAndFive(3), false);
assert(isMultipleOfBothThreeAndFive(9), false);
assert(isMultipleOfBothThreeAndFive(4), false);
addToDone("Exercise 28 is correct.")




// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
var square = (num) => {
    return num * num;
}


assert(square(3), 9);
assert(square(2), 4);
assert(square(9), 81);
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber);
addToDone("Exercise 29 is correct.")



// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
var add = (augend, addend) => {
    return augend + addend;
}



assert(add(3, 2), 5);
assert(add(10, -2), 8);
assert(add(5, 7), 12);
addToDone("Exercise 30 is correct.")



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
var cube = (num) => {
    return num * num * num;
}



assert(cube(3), 27);
assert(cube(2), 8);
assert(cube(5), 125);
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber);
addToDone("Exercise 31 is correct.")



// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
var squareRoot = (num) => {
    return Math.sqrt(num);
}

assert(squareRoot(4), 2.0);
assert(squareRoot(64), 8.0);
assert(squareRoot(81), 9.0);
addToDone("Exercise 32 is correct.")




// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
var subtract = (minuend, subtrahend) => {
    return minuend - subtrahend;
}


assert(subtract(8, 6), 2);
assert(subtract(27, 4), 23);
assert(subtract(12, 2), 10);
addToDone("Exercise 33 is correct.")



// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
var multiply = (multiplicand, multi) => {
    return multiplicand * multi;
}

assert(multiply(2, 1), 2);
assert(multiply(3, 5), 15);
assert(multiply(5, 2), 10);
addToDone("Exercise 34 is correct.")



// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
var divide = (dividend, divisor) => {
    return dividend / divisor;
}

assert(divide(27, 9), 3);
assert(divide(15, 3), 5);
assert(divide(5, 2), 2.5);
assert(divide(10, 2), 5);
addToDone("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns only the quotient first argument quotient by the second argument.
var quotient = (dividend, divisor) => {
    return Math.floor(dividend / divisor);
}


assert(quotient(27, 9), 3)
assert(quotient(5, 2), 2)
assert(quotient(10, 3), 3)
addToDone("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
var remainder = (num1, num2) => {
    return num1 % num2;
}

assert(remainder(3, 3), 0);
assert(remainder(5, 2), 1);
assert(remainder(7, 5), 2);
addToDone("Exercise 37 is correct.")



// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
var sumOfSquares = (num1, num2) => {
    return (num1 * num1) + (num2 * num2);
}

assert(sumOfSquares(3, 2), 13);
assert(sumOfSquares(5, 2), 29);
assert(sumOfSquares(2, 4), 20);
addToDone("Exercise 38 is correct.")



// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
var timesTwoPlusThree = (num) => {
    return (num * 2) + 3;
}

assert(timesTwoPlusThree(0), 3);
assert(timesTwoPlusThree(1), 5);
assert(timesTwoPlusThree(2), 7);
assert(timesTwoPlusThree(3), 9);
assert(timesTwoPlusThree(5), 13);
addToDone("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
var areaOfRectangle = (num1, num2) => {
    return multiply(num1, num2);
}

assert(areaOfRectangle(1, 3), 3);
assert(areaOfRectangle(5, 2), 10);
assert(areaOfRectangle(2, 7), 14);
assert(areaOfRectangle(5.3, 10.3), 54.59);
addToDone("Exercise 40 is correct.")



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
var areaOfCircle = (num) => {
    return (num * num) * Math.PI;
}

assert(areaOfCircle(3), 28.274333882308138);
assert(areaOfCircle(5), 78.53981633974483);
assert(areaOfCircle(7), 153.93804002589985);
addToDone("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
var circumference = (radius) => {
    return (radius * 2) * Math.PI;
}

assert(circumference(3), 18.84955592153876);
assert(circumference(5), 31.41592653589793);
assert(circumference(7), 43.982297150257104);
addToDone("Exercise 42 is correct.")



// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
var isVowel = (ltr) => {
    ltr = ltr.toLowerCase();

    switch (ltr) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return true;
        break;

      default:
        return false;
        break;
    }
  }


assert(isVowel("a"), true);
assert(isVowel("U"), true);
assert(isVowel("banana"), false);
assert(isVowel("Q"), false);
assert(isVowel("y"), false);
addToDone("Exercise 43 is correct.")


// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
var hasVowels = (text) => {
    if(text && typeof text == 'string') {
      let vowels = "aeiouAEIOU".split('');
      let vowelString = '';
      for(let letter of text.split('')) {
        if(vowels.includes(letter)) {
          vowelString += letter;
        }
      }
      if (vowelString.length === 0) {
        return false;
      } else {
        return true;
      }
    }
}


assert(hasVowels("banana"), true);
assert(hasVowels("ubuntu"), true);
assert(hasVowels("QQQQ"), false);
assert(hasVowels("wyrd"), false);
addToDone("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
var countVowels = (str) => {
    let vowel_list = 'aeiou';
    let vcount = 0

    for (var i = 0; i < str.length; i++) {
        if (vowel_list.indexOf(str[i]) !== -1) {
            vcount++;
        }
    }

    return vcount;
}


assert(countVowels("banana"), 3)
assert(countVowels("ubuntu"), 3)
assert(countVowels("mango"), 2)
assert(countVowels("QQQQ"), 0)
assert(countVowels("wyrd"), 0)
addToDone("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
var removeVowels = (str) => {
  str = str.split("");
  var rmVow = [];
  var re = /aeiou/g;
  var nothing = null;
  
  
  str.forEach(function(e) {
    if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
      nothing = null;
    } else {
      rmVow.push(e);
    }
  });
  
  console.log(rmVow);
  rmVow = rmVow.join("");
  return rmVow;
}



assert(removeVowels("banana"), "bnn");
assert(removeVowels("ubuntu"), "bnt");
assert(removeVowels("mango"), "mng");
assert(removeVowels("QQQQ"), "QQQQ");
addToDone("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
var startsWithVowel = (str) => {
  return (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u");
}



assert(startsWithVowel("ubuntu"), true);
assert(startsWithVowel("banana"), false);
assert(startsWithVowel("mango"), false);
addToDone("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
var endsWithVowel = (str) => {
  return (str[str.length-1] === "a" || str[str.length-1] === "e" || str[str.length-1] === "i" || str[str.length-1] === "o" || str[str.length-1] === "u");
}

assert(endsWithVowel("ubuntu"), true);
assert(endsWithVowel("banana"), true);
assert(endsWithVowel("mango"), true);
assert(endsWithVowel("spinach"), false);
addToDone("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
var startsAndEndsWithVowel = (str) => {
  return ((str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") && (str[str.length-1] === "a" || str[str.length-1] === "e" || str[str.length-1] === "i" || str[str.length-1] === "o" || str[str.length-1] === "u"));
}



assert(startsAndEndsWithVowel("ubuntu"), true);
assert(startsAndEndsWithVowel("banana"), false);
assert(startsAndEndsWithVowel("mango"), false);
addToDone("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
var first = (input) => {
  return input[0];
}


assert(first("ubuntu"), "u");
assert(first([1, 2, 3]), 1);
assert(first(["JS", "is", "awesome"]), "JS");
addToDone("Exercise 50 is correct.")




// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
var second = (input) => {
  return input[1];
}


assert(second("ubuntu"), "b");
assert(second([1, 2, 3]), 2);
assert(second(["JS", "is", "awesome"]), "is");
addToDone("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
var third = (input) => {
  return input[2];
}


assert(third("ubuntu"), "u");
assert(third([1, 2, 3]), 3);
assert(third(["JS", "is", "awesome"]), "awesome");
addToDone("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
var forth = (input) => {
  return input[3];
}

assert(forth("ubuntu"), "n");
assert(forth([1, 2, 3, 4]), 4);
assert(forth(["JS", "is", "awesome", "right?"]), "right?");
addToDone("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
var last = (input) => {
  return input[input.length - 1];
}

assert(last("ubuntu"), "u");
assert(last([1, 2, 3, 4]), 4);
assert(last(["JS", "is", "awesome"]), "awesome");
assert(last(["kiwi", "mango", "guava"]), "guava");
addToDone("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
var secondToLast = (input) => {
  return input[input.length - 2];
}

assert(secondToLast("ubuntu"), "t");
assert(secondToLast([1, 2, 3, 4]), 3);
assert(secondToLast(["JS", "is", "awesome"]), "is");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango");
addToDone("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
var thirdToLast = (input) => {
  return input[input.length - 3];
}

assert(thirdToLast("ubuntu"), "n");
assert(thirdToLast([1, 2, 3, 4]), 2);
assert(thirdToLast(["JS", "is", "awesome"]), "JS");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi");
addToDone("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
var firstAndSecond = (input) => {
  let temp = [];
  temp.push(input[0]);
  temp.push(input[1]);
  return temp;
}


assert(firstAndSecond([1, 2, 3, 4]), [1, 2]);
assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"]);
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"]);
addToDone("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
var firstAndLast = (input) => {
  let temp = [];
  temp.push(input[0]);
  temp.push(input[input.length - 1]);
  return temp;
}

assert(firstAndLast([1, 2, 3, 4]), [1, 4]);
assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"]);
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"]);
addToDone("Exercise 58 is correct.")



// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
var firstToLast = (arr) => {
  let temp = [];
  arr.forEach(function(e,i) {
    if (i >= 1) {
      temp.push(e)
    };
  });
  temp.push(arr[0])
  return temp;
}


assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1]);
assert(firstToLast(["JS", "is", "awesome"]), ["is", "awesome", "JS"]);
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"]);
addToDone("Exercise 59 is correct.")



// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
var sumAll = (arr) => {
  var sum = 0;
  arr.forEach(function(e){
    sum += e;
  })
  return sum;
}


assert(sumAll([1, 2, 3, 4]), 10);
assert(sumAll([3, 3, 3]), 9);
assert(sumAll([0, 5, 6]), 11);
addToDone("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
var mean = (arr) => {
  var sum = 0;
  arr.forEach(function(e){
    sum += e;
  })
  return sum / arr.length;
}


assert(mean([1, 2, 3, 4]), 2.5);
assert(mean([3, 3, 3]), 3);
assert(mean([1, 5, 6]), 4);
addToDone("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
var median = arr => {
  let mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};


assert(median([1, 2, 3, 4, 5]), 3.0);
assert(median([1, 2, 3]), 2.0);
assert(median([1, 5, 6]), 5.0);
assert(median([1, 2, 5, 6]), 3.5);
addToDone("Exercise 62 is correct.")


// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.
var maxMinusMin = (arr) => {
  var temp = arr.sort();
  return temp[temp.length - 1] - temp[0];
}

assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7);
assert(maxMinusMin([1, 1, 2, 3, 9]), 8);
assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5);
addToDone("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
var productOfAll = (arr) => {
  let product = 1;
  arr.forEach(function(e) {
    product *= e;
  })
  return product;
}


assert(productOfAll([1, 2, 3]), 6);
assert(productOfAll([3, 4, 5]), 60);
assert(productOfAll([2, 2, 3, 0]), 0);
addToDone("Exercise 64 is correct.")


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
var getHighestNumber = (arr) => {
  return Math.max(...arr);
}

assert(getHighestNumber([1, 2, 3]), 3);
assert(getHighestNumber([1, 5, 2, 3, 4]), 5);
assert(getHighestNumber([5, 1, 2, 4, 9]), 9);
addToDone("Exercise 65 is correct.")




// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
var getSmallestNumber = (arr) => {
  return Math.min(...arr);
}

assert(getSmallestNumber([1, 2, 3]), 1);
assert(getSmallestNumber([3, 5, 9, 8, 1]), 1);
assert(getSmallestNumber([8, 9, 4, 5, 7]), 4);
addToDone("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
var onlyOddNumbers = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e % 2 !== 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyOddNumbers([1, 2, 3]), [1, 3]);
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5]);
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1]);
addToDone("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
var onlyEvenNumbers = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e % 2 === 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyEvenNumbers([1, 2, 3]), [2]);
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4]);
assert(onlyEvenNumbers([-4, -3, 1]), [-4]);
addToDone("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
var onlyPositiveNumbers = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e > 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3]);
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert(onlyPositiveNumbers([-4, -3, 1]), [1]);
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
var onlyNegativeNumbers = (arr) => {  
  var temp = [];
  arr.forEach(function(e) {
    if (e < 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyNegativeNumbers([1, 2, 3]), []);
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1]);
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3]);
addToDone("Exercise 70 is correct.");



// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
var hasEvens = (arr) => {  
  var temp = false;
  arr.forEach(function(e) {
    if (e % 2 === 0) {
      temp = true;
    }
  })
  return temp;
}


assert(hasEvens([1, 2, 3]), true);
assert(hasEvens([2, 5, 6]), true);
assert(hasEvens([3, 3, 3]), false);
assert(hasEvens([]), false);
addToDone("Exercise 71 is correct.");



// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
var countEvens = (arr) => {
  var count = 0;
  arr.forEach(function(e) {
    if (e % 2 == 0) {
      count++;
    }
  })
  return count;
}


assert(countEvens([1, 2, 3]), 1);
assert(countEvens([2, 5, 6]), 2);
assert(countEvens([3, 3, 3]), 0);
assert(countEvens([5, 6, 7, 8] ), 2);
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
var hasOdds = (arr) => {
  var count = false;
  
  arr.forEach(function(e) {
    if (e % 2 == 1) {
      count = true;
    }
  })
  return count;
}


assert(hasOdds([1, 2, 3]), true);
assert(hasOdds([2, 5, 6]), true);
assert(hasOdds([3, 3, 3]), true);
assert(hasOdds([2, 4, 6]), false);
addToDone("Exercise 73 is correct.")


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence
var countOdds = (arr) => {
  var count = 0;
  arr.forEach(function(e) {
    if (e % 2 == 1) {
      count++;
    }
  })
  return count;
}

assert(countOdds([1, 2, 3]), 2);
assert(countOdds([2, 5, 6]), 1);
assert(countOdds([3, 3, 3]), 3);
assert(countOdds([2, 4, 6]), 0);
addToDone("Exercise 74 is correct.")


// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
var countNegatives = (arr) => {
  var count = 0;
  arr.forEach(function(e) {
    if (e < 0) {
      count++;
    }
  })
  return count;
}


assert(countNegatives([1, -2, 3]), 1);
assert(countNegatives([2, -5, -6]), 2);
assert(countNegatives([3, 3, 3]), 0);
addToDone("Exercise 75 is correct.")


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
var countPositives = (arr) => {
  var count = 0;
  arr.forEach(function(e) {
    if (e > 0) {
      count++;
    }
  })
  return count;
}


assert(countPositives([1, -2, 3]), 2);
assert(countPositives([2, -5, -6]), 1);
assert(countPositives([3, 3, 3]), 3);
assert(countPositives([-2, -1, -5]), 0);
addToDone("Exercise 76 is correct.")


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
var onlyPositiveEvens = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e > 0 && e % 2 ===0) {
      temp.push(e);
    }
  })
  return temp;
}

assert(onlyPositiveEvens([1, -2, 3]), []);
assert(onlyPositiveEvens([2, -5, -6]), [2]);
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6]);
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4]);
addToDone("Exercise 77 is correct.")


// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
var onlyPositiveOdds = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e > 0 && e % 2 === 1) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyPositiveOdds([1, -2, 3]), [1, 3]);
assert(onlyPositiveOdds([2, -5, -6]), []);
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3]);
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3]);
addToDone("Exercise 78 is correct.")


// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
var onlyNegativeEvens = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e < 0 && e % 2 === 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyNegativeEvens([1, -2, 3]), [-2]);
assert(onlyNegativeEvens([2, -5, -6]), [-6]);
assert(onlyNegativeEvens([3, 3, 4, 6]), []);
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4]);
addToDone("Exercise 79 is correct.")


// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
var onlyNegativeOdds = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (e < 0 && e % 2 === -1) {
      temp.push(e);
    }
  })
  return temp;
}


assert(onlyNegativeOdds([1, -2, 3]), []);
assert(onlyNegativeOdds([2, -5, -6]), [-5]);
assert(onlyNegativeOdds([3, 3, 4, 6]), []);
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1]);
addToDone("Exercise 80 is correct.")


// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
var shortestString = (arr) => {
  var shortest = Number.MAX_VALUE;
  var index = 0;
  
  arr.forEach(function(e, i) {
    if (e.length < shortest) {
      shortest = e.length;
      index = i;
    }
  });
  
  return arr[index];
}


assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi");
assert(shortestString(["hello", "everybody"]), "hello");
assert(shortestString(["mary", "had", "a", "little", "lamb"]), "a");
addToDone("Exercise 81 is correct.")


// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
var longestString = (arr) => {
  var largest = Number.MIN_VALUE;
  var index = 0;
  
  arr.forEach(function(e, i) {
    if (e.length > largest) {
      largest = e.length;
      index = i;
    }
  });
  
  return arr[index];
}



assert(longestString(["kiwi", "mango", "strawberry"]), "strawberry");
assert(longestString(["hello", "everybody"]), "everybody");
assert(longestString(["mary", "had", "a", "little", "lamb"]), "little");
addToDone("Exercise 82 is correct.")

// *hint* for the next few exercises, consider using sets - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// If you've got a set and need to convert it back into an array, do a search for "convert a set into an array in JavaScript"

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns a set with only the unique values from that array.
var getUniqueValues = (arr) => {
  var temp = [];
  arr.forEach(function(e) {
    if (temp.indexOf(e) < 0) {
      temp.push(e);
    }
  })
  return temp;
}


assert(getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]), ["ant", "mosquito", "ladybug"]);
assert(getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]), ["b", "a", "n", "s"]);
assert(getUniqueValues(["mary", "had", "a", "little", "lamb", "little", "lamb", "little", "lamb"]), ["mary", "had", "a", "little", "lamb"]);
addToDone("Exercise 83 is correct.")


// Exercise 84
// Write a function definition named getUniqueValuesFromTwoArrays that takes two arrays and returns a single array with only the unique values
var getUniqueValuesFromTwoArrays = (arr1, arr2) => {
  var temp = [];
  arr1.forEach(function(e) {
    if (arr2.indexOf(e) < 0) {
      temp.push(e);
    }
  })
  return temp;
}

assert(getUniqueValuesFromTwoArrays([5, 1, 2, 3], [3, 4, 5, 5]), [1, 2, 3, 4, 5]);
assert(getUniqueValuesFromTwoArrays([1, 1], [2, 2, 3]), [1, 2, 3]);
assert(getUniqueValuesFromTwoArrays(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["tomato", "mango", "kiwi", "eggplant", "broccoli"]);
addToDone("Exercise 84 is correct.")


// Exercise 85
// Write a function definition named getValuesInCommon that takes two arrays and returns a single array with the values that each array has in common
var getValuesInCommon = (arr1, arr2) => {
  // finish me
}



assert(getValuesInCommon([5, 1, 2, 3], [3, 4, 5, 5]), [3, 5]);
assert(getValuesInCommon([1, 2], [2, 2, 3]), [2]);
assert(getValuesInCommon(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["tomato"]);
addToDone("Exercise 85 is correct.")



// Exercise 86
// Write a function definition named getValuesNotInCommon that takes two arrays and returns a single array with the values that each array does not have in common
var getValuesNotInCommon = (arr1, arr2) => {
  // finish me
}


assert(getValuesNotInCommon([5, 1, 2, 3], [3, 4, 5, 5]), [1, 2, 4]);
assert(getValuesNotInCommon([1, 1], [2, 2, 3]), [1, 2, 3]);
assert(getValuesNotInCommon(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["mango", "kiwi", "eggplant", "broccoli"]);
addToDone("Exercise 86 is correct.")


// Working with JS Objects

// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}


// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
var getPaperTitle = (obj) => {
  return obj.title;
}


assert(getPaperTitle(tukeyPaper), "The Future of Data Analysis");
assert(getPaperTitle(thomasPaper), "A mathematical model of glutathione metabolism");
addToDone("Exercise 87 is correct.")

// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
var getPrice = (obj) => {
  return obj.price;
}


assert(getPrice(book), 36.99);
addToDone("Exercise 89 is complete.")



// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
var getBookAuthor = (obj) => {
  return obj.author;
}

assert(getBookAuthor(book), "Frances Buontempo");
addToDone("Exercise 90 is complete.")


// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
var getNumberOfBooks = (arr) => {
  return arr.length;
}


assert(getNumberOfBooks(books), 4);
addToDone("Exercise 91 is complete.")



// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
var totalOfBookPrices = (arr) => {
  var sum = 0;
  arr.forEach(function(e) {
    sum += e.price;
  });
  return sum;
}


assert(totalOfBookPrices(books), 122.9)
addToDone("Exercise 92 is complete.")


// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
var getAverageBookPrice = (arr) => {
  var av = 0;
  arr.forEach(function(e) {
    av += e.price;
  })
  return (av / arr.length);
}


assert(getAverageBookPrice(books), 30.725);
addToDone("Exercise 93 is complete.")


// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
var highestPriceBook = (arr) => {
  let hpIndex = 0;
  let hp = Number.MIN_VAL;
  
  arr.forEach(function(e,i) {
    if (e.price > hp) {
      hp = e.price;
      hpIndex = i;
    }
  })
  
  return arr[hpIndex];
}


assert(highestPriceBook(books), {
    "title": "The Visual Display of Quantitative Information",
    "price": 38.00,
    "author": "Edward Tufte"
});

addToDone("Exercise 94 is complete")



// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
var lowestPriceBook = (arr) => {
  let hpIndex = 0;
  let hp = Number.MAX_VAL;
  
  arr.forEach(function(e,i) {
    if (e.price < hp) {
      hp = e.price;
      hpIndex = i;
    }
  })
  
  return arr[hpIndex];
}



assert(lowestPriceBook(books), {
    "title": "Weapons of Math Destruction",
    "author": "Cathy O'Neil",
    "price": 17.44
});
addToDone("Exercise 95 is complete.")


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
var getTaxRate = (obj) => {
  return obj.tax;
}


assert(getTaxRate(shoppingCart), .08);
addToDone("Exercise 96 is complete")



// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
var numberOfItemTypes = (obj) => {
  return obj.items.length;
}


assert(numberOfItemTypes(shoppingCart), 5);
addToDone("Exercise 97 is complete.");
 

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
var totalNumberOfItems = (obj) => {
  let sum =0;
  obj.items.forEach(function(e) {
    sum += e.quantity;
  })
  
  return sum;
}


assert(totalNumberOfItems(shoppingCart), 17);
addToDone("Exercise 98 is complete.")



// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
var getAverageItemPrice = (obj) => {
  let sum =0;
  obj.items.forEach(function(e) {
    sum += e.price;
  })
  
  return (sum / obj.items.length);
}




assert(getAverageItemPrice(shoppingCart), 2.1420000000000003);
addToDone("Exercise 99 is complete.")



// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
var getAverageSpentPerItem = (obj) => {
  var tax = obj.tax;
  var sum = 0;
  
  obj.items.forEach(function(e) {
    sum += (e.price * tax) + e.price;
  })
  
  return sum;
}


assert(getAverageSpentPerItem(shoppingCart), 1.333529411764706);
addToDone("Exercise 100 is complete.")


// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
var mostSpentOnItem = (obj) => {
  var index = 0;
  var highestPrice = Number.MIN_VALUE;
  
  obj.items.forEach(function(e, i) {
    if (e.price > highest) {
      highestPrice = e.price;
      index = i;
    }
  });

  return obj.items[index]; 
}








assert(mostSpentOnItem(shoppingCart), {
    "title": "chocolate",
    "price": 0.75,
    "quantity": 9
});
addToDone("Exercise 101 is complete.")

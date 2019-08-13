'use strict';

// Loop bonuses 

// Write a loop that outputs the first 50 fibonacci numbers.
// https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.

// function fibNums(num) {
//   var temp = 0;
//   var temp2 = 1;
//   var temp3 = 0;

//   for (var i = 0; i < num; i++) {
//     temp3 = temp + temp2;
//     console.log(temp);
//     temp = temp2;
//     temp2 = temp3;
//   }
// }

// fibNums(50);



// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

// prime(10);

function listPrimes(num) {
  function prime(num) {
    let temp = 0;
  
    if (num === 1) {
      return true;
    }
  
    for (var i = 1; i < num; i++) {
      if (Number.isInteger(num / i) == true) {
        temp++;  
      }
    }
  
    if (temp === 1) {
      console.log(num);
    }
  
    return (temp > 1) ? true : false;
  }

  for (var i = 0; i < num; i++) {
    prime(i);
  }
}

listPrimes(50);
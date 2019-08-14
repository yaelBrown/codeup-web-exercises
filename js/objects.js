(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = new Object[{
      firstName: "",
      lastName: ""
    }];
    
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = "Hello from " + this.firstName + " " + this.lastName;

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    function hebDiscount(shoppr) {
      let discountAmt = .12;
      console.log(shoppr.name + " purchased before discount $" + shoppr.amount)
      
      if (shoppr.amount > 200) {
        console.log(shoppr.name + " gets " + (shoppr.amount * discountAmt) + " off. His new total is $" + (shoppr.amount - (shoppr.amount * discountAmt))); 
      } else {
        console.log(shoppr.name + " does not get a discount. " + shoppr.name + " needs to purchase $" + (200 - shoppr.amount) + " more to receive discount.");
      }
    };

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shoppers) {
      hebDiscount(shoppers);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
      {
        title: "The Salmon of Doubt",
        author: {
          firstName: "Douglas",
          lastName: "Adams"
        }
      },
      {
        title: "The Millionaire Fastlane: Crack the Code to Wealth and Live Rich for a Lifetime!",
        author: {
          firstName: "MJ",
          lastName: "DeMarco"
        }
      },
      {
        title: "he 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich",
        author: {
          firstName: "Tim",
          lastName: "Ferris"
        }
      }
    ];

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)

    console.log(books[1].title)
    console.log(books[1].author.firstName)
    console.log(books[1].author.lastName)

    console.log(books[2].title)
    console.log(books[2].author.firstName)
    console.log(books[2].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function createIndex(obj) {
      var count=0;
      
      function countBooks() {
        obj.forEach(function() {
          count++;
        })
      };
      
      countBooks(obj);
      
      for (var i = 0; i < count; i++) {
        books[i].index = i;
      }
    }

    createIndex(books);

    function displayBooks(book) {
      var indexOfBook = book.index;
      console.log("    Book # " + (indexOfBook + 1));
      console.log("    Title: " + book.title);
      console.log("    Author: " + book.author.firstName + " " + book.author.lastName);
      console.log("    ---")
    }

    books.forEach(function(books) {
      displayBooks(books);
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();

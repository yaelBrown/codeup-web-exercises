/* 
  (Lecture by viv)
  Thought process:

*/


// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
​
/* 
  Wite a function
  Accepts an array
  Mixed data type
  Return an array
*/

filterNumbers(["fred", true, 5, 3]) //[3, 5]

var testInput = ["fred", true, 5, 3];

function filterNumbers(arrayOfData) {
  var newArray = [];

  arrayOfData.array.forEach(function (data) {
    if (typeof data === "number") {
      newArray.push(data);
    }
  });

  array.sort(); 

  /* 

  // Sort by numbers
  array.sort(function (a,b) {
    return (a - b)
  })

  // https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort2

  */
}
  
        
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
​
    //Example Input:
   
    var input = [
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
  
      //Example output
      
      // [
      //     {
      //          name: "Chompers",
      //          breed: "Pug",
      //          age: 8
      //      },
      //      {
      //          name: "Freddy",
      //          breed: "Lab",
      //          age: 5
      //      },
      //      {
      //          name: "Mr. Pig",
      //          breed: "Mastif",
      //          age: 11
      //      }
      //  ];
  
  function getOlder(arr) {
    arr.forEach(function(e) {
      console.log(e);
      e.age++;
      console.log(e.age)
    })
  }
  
  getOlder(input);
  console.log(input);


// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
​
      ```js
            // Example input
            [
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
            ]
      ```
            
      ```js  
            // Example output:
             [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: false // changed to false
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false // stays the same
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: false // changed to false
                 }
             ]
    ```
       
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
    ```js
         //Example Input: 
          [
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
    ```
    
    ```js
       // Example Output (before refactor): 2
 
 
        // Example Output (after 1st refactor): 
        [
            'user1@email.com',
            'user2@email.com'
        ]
        
     
        // Example Output (after 2nd refactor): 
        [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             }
         ]
​
    ```

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
    
    // function adminList(arr) {
    //   let count = 0;
      
    //   for (var i = 0; i < arr.length; i++) {
    //     if (arr[i].isAdmin === true) {
    //       count++;
    //     }
    //   }
    
    //   return count;
    // }
    
    
    function adminList(arr) {
      tempArr = [];
      tempEmails = [];
      let count = 0;
      
      arr.forEach(function(e,i) {
        if (e.isAdmin === true) {
          tempArr.push(arr[i]);
          tempEmails.push(arr[i].email);
          count++;
        } 
      })
      
      console.log(tempEmails);
      console.log(tempArr);
      console.log(count);
      
      return tempArr;
    }
    
    console.log(adminList(users));
​
// s5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
​
    ```js
        //     Example Input:
        
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
        
         makeSandwichObjects(breads, fillings) // example call to the function 
    ```
    ```js
        // Example Output: 
           [
             {
                 bread: "white",
                 filling: "pb&j"
             },
             {
                 bread: "wheat",
                 filling: "ham"
             },
             {
                 bread: "rhy",
                 filling: "cheese steak"
             },
             {
                 bread: "white",
                 filling: "tuna"
             }
         ]
​
    ```
const users = [
  {
      id: 1,
      name: 'ryan',
      email: 'ryan@codeup.com',
      languages: ['clojure', 'javascript'],
      yearsOfExperience: 5
  },
  {
      id: 2,
      name: 'luis',
      email: 'luis@codeup.com',
      languages: ['java', 'scala', 'php'],
      yearsOfExperience: 6
  },
  {
      id: 3,
      name: 'zach',
      email: 'zach@codeup.com',
      languages: ['javascript', 'bash'],
      yearsOfExperience: 7
  },
  {
      id: 4,
      name: 'fernando',
      email: 'fernando@codeup.com',
      languages: ['java', 'php', 'sql'],
      yearsOfExperience: 8
  },
  {
      id: 5,
      name: 'justin',
      email: 'justin@codeup.com',
      languages: ['html', 'css', 'javascript', 'php'],
      yearsOfExperience: 9
  }
];

let threeLangs = users.filter((e) => {
  return e.languages.length >= 3;
});

let emails = users.map((e) => {
  return e.email;
});

let totalYearsOfExperience = users.reduce((acc, cur) => {
  return acc += cur.yearsOfExperience;
});


// davids solution
let longestEmail = users.reduce((longestEmail, user) => {
  if (longestEmail.length < user.email.length) {
    longestEmail = user.email;
  }
  return longestEmail;
}, "");


// let longestEmail = users.reduce((acc, curr) => {
//   (curr.length >= acc.length) ? acc = curr : curr;
// })

const generateInsturctorsNames = () => {
  let instructorNames = users.reduce((acc, cur) => acc += `${cur.name}, `, "");

  temp = 'Your instructors are: ';
  instructorNames = instructorNames.substring(0, (instructorNames.length - 2));

  // console.log(instructorNames);
  
  return temp + ` ${instructorNames}.`
};

console.log(generateInsturctorsNames());




// Johns solution
const uniqueListOfLangs = users.reduce((listOfLangs, user) => {
  for(const lang of user.languages) {
    if (listOfLangs.indexOf(lang) === -1) {
      listOfLangs.push(lang);
    }
    return listOfLangs;
  }
}, []);

console.log(uniqueListOfLangs);

// Lauras solution
const lauraUniqueListOfLangs = users.map(user => user.languages)
  .reduce((currentList, currentLanguage) => currentList.concat(currentLanguage), [])
  .filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

// Davids solution
const listOfLanguages = users.reduce((accumlator, user) => {
  user.languages.map(language => accumlator.push(language));
  return accumlator;
}, []);
listOfLanguages = new Set();
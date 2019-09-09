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

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const generateInsturctorsNames = () => {
  let instructorNames = users.reduce((acc, cur) => acc += `${cur.name}, `, "");

  temp = 'Your instructors are: ';
  instructorNames = instructorNames.substring(0, (instructorNames.length - 2));

  // console.log(instructorNames);
  
  return temp + ` ${instructorNames}.`
};

console.log(generateInsturctorsNames());
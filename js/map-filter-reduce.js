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

let threeLangs = users.filter((o) => {
  return o.languages.length >= 3;
});

let emails = users.map((e) => {
  return e.email;
});

let totalYearsOfExperience = users.reduce((acc, cur) => {
  return acc += cur.yearsOfExperience;
});

let longestEmail = users.reduce((acc, curr) => {
  (curr.length >= acc.length) ? acc = curr : curr;
})

let instructorNames = users.reduce((acc, curr) => {
  return acc += curr.name;
})


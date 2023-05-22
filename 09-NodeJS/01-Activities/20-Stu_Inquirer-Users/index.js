const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'languages',
      choices: ['HTML', 'CSS', 'JavaScript']
    },
    {
      type: 'checkbox',
      message: 'What is your preferred method of communication?',
      name: 'communication',
      choices: ['email', 'call', 'text']
    },
  ])
  .then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => 
  err ? console.error(err) : console.log('Success')
  )
  });
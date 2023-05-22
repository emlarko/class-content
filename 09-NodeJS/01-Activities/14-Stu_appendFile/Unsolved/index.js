// TODO: What are we importing?
// Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// Adds text to an already existing file, creating the file if it does not yet exist. Takes the first variable passed
// in process.argv and creates a new line. 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // If error is true, logs the error. If there is no error, logs 'Commit logged!'
  err ? console.error(err) : console.log('Commit logged!')
);

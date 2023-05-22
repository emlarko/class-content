// TODO: Import `maths.js`
const maths = require('./maths.js');
const { sum, difference, product, quotient } = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
operation = process.argv[2];
numOne = parseInt(process.argv[3]);
numTwo = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
switch(operation) {
    // and each `case` uses the corresponding `maths` method
    case "sum":
        console.log(sum(numOne, numTwo));
        break;
    case "difference":
        console.log(difference(numOne, numTwo));
        break;
    case "product":
        console.log(product(numOne, numTwo));
        break;
    case "quotient":
        console.log(quotient(numOne, numTwo));
        break;    
}
// to perform each math operation on the two numbers, `numOne` and `numTwo`

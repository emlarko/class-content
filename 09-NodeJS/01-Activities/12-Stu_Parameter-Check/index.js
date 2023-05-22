console.log(process.argv[2]);
console.log(process.argv[3]);

let var1 = process.argv[2];
let var2 = process.argv[3];

if (var1 === var2) {
    console.log("True");
} else {
    console.log("False");
};

// ternary operator 

console.log(var1 === var2 ? true : false);

// comparing variables
console.log(var1 === var2);

// TODO: What does 'this' refer to?
// 'this' refers to the global object, in a browser it is the window
console.log(this);

// TODO: What does 'this' refer to?
// when 'this' is used in an object, it belongs to the object
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// 20 - adds 10 to the age property 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
//5750 - multiples the initialInvestment property by 1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

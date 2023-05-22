//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Latte",
    sugar: 1,
    isReady: true,
}

console.log(customerOrder.drinkName);
console.log(customerOrder.sugar);

if (customerOrder["isReady"] == true) {
    console.log("Ready for Pickup");
} 
else {
    console.log("Still in order queue");
} 

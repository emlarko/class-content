var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    event.preventDefault();
    var listEl = $('<li>');
    listEl.text(shoppingInput.val());
    shoppingListEl.append(listEl);
    console.log(shoppingInput.val())
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit);

// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

rootEl.children('ul').children().css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

rootEl.children('ul').children().eq(0).append($('<li>O</li>').css('border', '0'));
rootEl.children('ul').children().eq(6).append($('<li>O</li>').css('border', '0'));
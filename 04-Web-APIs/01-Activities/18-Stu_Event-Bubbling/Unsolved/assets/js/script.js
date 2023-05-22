// TODO: Which element is the following line of code selecting?
// the class named "carouselbox"
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// selects the buttons using their parent element
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// runs the function of showing the image when the image is clicked
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// runs the fuction when the 'next' button is clicked
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // prevents event bubbling, goes to the next image instead of opening the current image
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// runs the function when the 'prev' button is clicked
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // event bubbling would happen, opens the image instead of going to the previous one
  event.stopPropagation();

  navigate(-1);
});

navigate(0);

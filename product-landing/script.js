// Navbar
const menu = document.getElementById("nav-bar");
    
// Show or hide navbar on load and screen resize
function screensizeMenu() {
  if (window.innerWidth > 500) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

// Hide navbar after jumping to section (small screens)
document.addEventListener("scrollend", function(event) {
  if (!(window.innerWidth > 500)) {
    menu.classList.add("hidden");
  }
});

// Toggle navbar (button)
function toggleMenu() {
  menu.classList.toggle("hidden");
}

// Slideshow
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("review");

// show initial slide
slides[0].style.opacity = "100%";
dots[0].classList.add("active");

// change slides
let slideshowLength = dots.length;
function showReview(index) {
  for (let i = 0; i < slideshowLength; i++) {
    dots[i].classList.remove("active");
    slides[i].style.opacity = "0%";
  }
  dots[index].classList.add("active");
  slides[index].style.opacity = "100%";
}    

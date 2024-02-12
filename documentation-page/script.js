// Dark mode
// Check OS preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDark.matches) {
  document.body.classList.add("dark-mode");
} else if (document.body.classList.contains("dark-mode")) {
  document.body.classList.remove("dark-mode");
}

// Toggle dark mode (button)
function switchMode() {
  document.body.classList.toggle("dark-mode");
}

// Navbar
const menu = document.getElementById("navbar");
  
// Show or hide navbar on load and screen resize
function screensizeMenu() {
  if (window.innerWidth > 769) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

// Hide navbar after jumping to section (small screens)
document.addEventListener("scrollend", function(event) {
  if (!(window.innerWidth > 769)) {
    menu.classList.add("hidden");
  }
});

// Toggle navbar (button)
function toggleMenu() {
  menu.classList.toggle("hidden");
}

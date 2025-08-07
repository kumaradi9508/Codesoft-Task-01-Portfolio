// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = document.getElementById("toggle-icon");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Scroll to top
const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

// Form submission feedback
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  this.reset();
});

// AOS Animation Initialization
AOS.init({
  duration: 1000,
  once: true
});

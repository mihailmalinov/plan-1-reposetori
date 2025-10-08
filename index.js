// Toggle mobile menu
const hamburger = document.querySelector("#header .hamburger");
const navList = document.querySelector("#header .nav-list ul");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll("#header .nav-list ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navList.classList.remove("active"); // close mobile menu
  });
});

// Hero typing effect
const heroText = document.querySelector("#hero h1");
const phrases = ["Електричарски услуги", "Инсталации и поправки", "Безбедност на струја"];
let current = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[current].length) {
    heroText.textContent += phrases[current][charIndex];
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    heroText.textContent = phrases[current].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    current = (current + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Service hover effect (optional)
const services = document.querySelectorAll("#services .service-item");
services.forEach(service => {
  service.addEventListener("mouseenter", () => {
    service.style.backgroundColor = "#00bcd4";
    service.style.color = "black";
  });
  service.addEventListener("mouseleave", () => {
    service.style.backgroundColor = "#222";
    service.style.color = "white";
  });
});

// Contact form simple alert (replace with real backend later)
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Ви благодариме! Вашата порака е испратена.");
    contactForm.reset();
  });
}

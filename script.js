window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var faq2 = document.querySelector(".faq2");
  var navLinks = document.querySelector(".nav-links");

  faq2.addEventListener("mouseenter", function() {
    console.log("Mouse entered on Promoções"); // Debugging
    navLinks.style.display = "block";
  });

  navLinks.addEventListener("mouseleave", function() {
    console.log("Mouse left from Sublinks"); // Debugging
    navLinks.style.display = "none";
  });
});
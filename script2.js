// Seleciona todos os elementos com a classe "faq-question"
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada elemento
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Verifica se a resposta já está visível
    const answer = question.querySelector('.faq-answer');
    if (answer.style.display === 'block') {
      // Esconde a resposta
      answer.style.display = 'none';
      question.querySelector('h3 span.faq-toggle').textContent = '+';
    } else {
      // Mostra a resposta
      answer.style.display = 'block';
      question.querySelector('h3 span.faq-toggle').textContent = '-';
    }
  });
});

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
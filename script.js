// Função principal que inicializa todas as animações
function initScrollAnimations() {
  // Configura o header inicialmente
  const header = document.querySelector("header");
  header.classList.add("transparent");
  
  // Adiciona o event listener para scroll
  window.addEventListener("scroll", handleScroll);
  
  // Executa uma primeira vez para verificar a posição inicial
  handleScroll();
}

// Função que gerencia todos os efeitos de scroll
function handleScroll() {
  checkHeaderTransparency();
  revealElementsOnScroll();
}

function initScrollAnimations() {
  const header = document.querySelector("header");
  
  // Inicia com header sólido (removemos a classe transparent)
  header.classList.remove("transparent");
  header.classList.add("solid");
  
  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

function handleScroll() {
  checkHeaderTransparency();
  revealElementsOnScroll();
}

function checkHeaderTransparency() {
  const header = document.querySelector("header");
  const scrollY = window.scrollY;
  const threshold = 80; // Ajuste este valor para quando começar a transição
  
  // Invertemos a lógica aqui
  if (scrollY > threshold) {
    header.classList.add("transparent");
    header.classList.remove("solid");
  } else {
    header.classList.remove("transparent");
    header.classList.add("solid");
  }
}

// Mantemos a função de reveal igual
function revealElementsOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint =140;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", initScrollAnimations);
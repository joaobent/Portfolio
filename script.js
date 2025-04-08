// Função para animar elementos ao rolar a página
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
  
    for (const el of elements) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visible = 150;
  
      if (elementTop < windowHeight - visible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Ativa logo ao carregar também
  revealOnScroll();
  
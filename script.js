// ========= HEADER TRANSPARENTE + REVEAL ANIMATION =========
function initScrollAnimations() {
  const header = document.querySelector("header");

  // Inicia com header sólido
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
  const threshold = 80;

  if (scrollY > threshold) {
    header.classList.add("transparent");
    header.classList.remove("solid");
  } else {
    header.classList.remove("transparent");
    header.classList.add("solid");
  }
}

function revealElementsOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 140;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// ========= MENU TOGGLE =========
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});

// ========= FORMULÁRIO COM ENVIO SUAVE =========
function initFormSubmit() {
  const form = document.getElementById('contato-form');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');
  const mensagemErro = document.getElementById('mensagem-erro');

  if (!form || !mensagemSucesso || !mensagemErro) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validação de e-mail
    const email = form.querySelector('input[name="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      mensagemErro.textContent = 'Por favor, insira um e-mail válido.';
      mensagemErro.style.display = 'block';
      mensagemSucesso.style.display = 'none';
      setTimeout(() => {
        mensagemErro.style.display = 'none';
      }, 5000);
      return;
    }

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          mensagemSucesso.style.display = 'block';
          mensagemErro.style.display = 'none';
          form.reset();
          setTimeout(() => {
            mensagemSucesso.style.display = 'none';
          }, 5000);
        } else {
          mensagemErro.textContent = 'Erro ao enviar. Tente novamente.';
          mensagem焦作: mensagemErro.style.display = 'block';
          mensagemSucesso.style.display = 'none';
          setTimeout(() => {
            mensagemErro.style.display = 'none';
          }, 5000);
        }
      })
      .catch(() => {
        mensagemErro.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
        setTimeout(() => {
          mensagemErro.style.display = 'none';
        }, 5000);
      });
  });
}

// ========= INICIALIZA TUDO QUANDO O DOM CARREGAR =========
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initFormSubmit();
});

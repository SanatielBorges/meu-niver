// Inicialização da biblioteca AOS
AOS.init({
  duration: 1500,
  easing: "ease-in-out",
});

// Seleciona o elemento que tem o id 'menu-mobile'
const btnMobile = document.getElementById("menu-mobile");

// Seleciona o elemento do menu de navegação
const nav = document.getElementById("nav");

// Adiciona um evento de clique ao botão do menu mobile
btnMobile.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("active");
}

// Função para fechar o menu
function closeMenu() {
  nav.classList.remove("active");
}

const menuLinks = nav.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (
    !nav.contains(event.target) &&
    !btnMobile.contains(event.target) &&
    nav.classList.contains("active")
  ) {
    closeMenu();
  }
});

//Contador
document.addEventListener("DOMContentLoaded", () => {
  // Definindo a data do evento
  const targetDate = new Date("2025-04-21T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Evento expirado
      document.querySelector(".countdown").innerHTML = "<p>Evento Expirado</p>";
      return;
    }

    // Calculando o tempo restante
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Atualizando a interface com o tempo restante
    document.getElementById("days").querySelector(".value").textContent =
      String(days).padStart(2, "0");
    document.getElementById("hours").querySelector(".value").textContent =
      String(hours).padStart(2, "0");
    document.getElementById("minutes").querySelector(".value").textContent =
      String(minutes).padStart(2, "0");
    document.getElementById("seconds").querySelector(".value").textContent =
      String(seconds).padStart(2, "0");
  }

  // Atualiza o cronômetro a cada segundo
  setInterval(updateCountdown, 1000);

  // Atualiza imediatamente ao carregar a página
  updateCountdown();
});

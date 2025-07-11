// Efeito de digitação só na index
// Efeito de digitação personalizado
const text = "Olá, eu sou Marlon 👋";
let i = 0;
const typingText = document.getElementById("typing-text");

if (typingText) {
  function typeEffect() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}


// Alternar Tema
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Menu lateral
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
  });
}

if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-250px";
  });
}

const text = "eu sou Marlon Peterson!"
let i = 0
function typeEffect(){
if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
    
typeEffect();

// Alternar tema claro/escuro
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("sidebar").style.left = "0";
});

document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("sidebar").style.left = "-250px";
});

// Menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por contactarnos. Le responderemos a la brevedad.");
    this.reset();
});

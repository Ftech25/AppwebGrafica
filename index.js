// Cotizador
const slider = document.getElementById("cantidad");
const resultado = document.getElementById("resultado");
const precio = document.getElementById("precio");

if (slider && resultado && precio) {
    slider.addEventListener("input", () => {
        resultado.innerText = slider.value + " stickers";
        precio.innerText = "Desde $" + (slider.value * 45);
    });
}

// PRELOADER
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 1500);
    }
});

// Nav activo
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 90) {
            current = section.id;
        }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
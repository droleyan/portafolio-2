// Header que se achica al hacer scroll
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("achicado", window.scrollY > 100);
    });
}

// Botón "Volver arriba"
const btnVolverArriba = document.getElementById("btn-volver-arriba");
if (btnVolverArriba) {
    window.addEventListener("scroll", () => {
        btnVolverArriba.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btnVolverArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Animaciones al hacer scroll (opcional, si las necesitas)
const sections = document.querySelectorAll("section");
if (sections.length > 0) {
    document.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    });
}
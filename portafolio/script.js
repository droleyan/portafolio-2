// Header que se achica al hacer scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("achicado", window.scrollY > 100);
});

// Botón "Volver arriba"
const btnVolverArriba = document.getElementById("btn-volver-arriba");
window.addEventListener("scroll", () => {
    btnVolverArriba.style.display = window.scrollY > 300 ? "block" : "none";
});

btnVolverArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const buscador = document.querySelector(".buscador");
const productos = document.querySelectorAll(".card");

buscador.addEventListener("keyup", () => {
    const texto = buscador.value.toLowerCase();

    productos.forEach(producto => {
        const nombre = producto.dataset.nombre;

        producto.style.display = nombre.includes(texto)
            ? "block"
            : "none";
    });
});

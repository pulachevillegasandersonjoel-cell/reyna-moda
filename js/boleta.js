const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const datos = JSON.parse(localStorage.getItem("datosCompra"));

const lista = document.getElementById("detalleProductos");
let total = 0;

carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - S/${p.precio}`;
    lista.appendChild(li);
    total += p.precio;
});

document.getElementById("total").textContent = total;
document.getElementById("nombre").textContent = datos.nombre;
document.getElementById("correo").textContent = datos.correo;
document.getElementById("pago").textContent = datos.metodo;

document.getElementById("fecha").textContent =
    "Fecha: " + new Date().toLocaleDateString();

// Vaciar carrito luego de generar boleta
localStorage.removeItem("carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let total = 0;
    if (!lista) return;

    lista.innerHTML = "";
    carrito.forEach(p => {
        let li = document.createElement("li");
        li.textContent = `${p.nombre} - S/${p.precio}`;
        lista.appendChild(li);
        total += p.precio;
    });
    document.getElementById("total").textContent = total;
}

mostrarCarrito();
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    carrito = [];
    mostrarCarrito();
}
function cambiarCantidad(btn, valor) {
    const input = btn.parentElement.querySelector("input");
    let cantidad = parseInt(input.value);
    cantidad += valor;
    if (cantidad < 1) cantidad = 1;
    input.value = cantidad;
}

function agregarConCantidad(btn, nombre, precio) {
    const card = btn.parentElement;
    const cantidad = parseInt(card.querySelector("input").value);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Agregado: ${cantidad} ${nombre}`);
}



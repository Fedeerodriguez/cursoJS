
fetch("./info.json")
    .then(respuesta => respuesta.json())
    .then(productos => principal(productos))
function principal(productos) {


    let carritoRecuperado = localStorage.getItem("carrito")
    if (carritoRecuperado) {
        carrito = JSON.parse(carritoRecuperado)
    }
    renderizarCarrito()

    renderizarProductos(productos)

    let buscador = document.getElementById("buscador")
    let buscar = document.getElementById("buscar")

    buscar.addEventListener("click", () => buscaryfiltrar(productos, buscador))

    let botonVerOcultar = document.getElementById("verOcultar")

    botonVerOcultar.addEventListener("click", verOcultarCarrito)

    let botonesCategorias = document.getElementsByClassName("categorias")
    for (const botonCategoria of botonesCategorias) {
        botonCategoria.addEventListener("click", (e) => filtrarCategorias(e, productos))
    }
}

function renderizarProductos(productos) {
    let contenedorProductos = document.getElementById("productos")
    contenedorProductos.innerHTML = ""

    productos.forEach(producto => {
        let card = document.createElement("div")
        card.innerHTML = `
             <img class="imagenes" src=./imagenes/${producto.rutaImg}> 
             <h3>${producto.nombre}</h3>
             <p>$${producto.precio}</p>
             <p id=${producto.id} class=botones>Agregar al carrito</p>
            `
        card.className = "tarjeta"
        contenedorProductos.appendChild(card)
        let botonAgregarAlCarrito = document.getElementById(producto.id)
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(productos, e))
    })
}

function agregarAlCarrito(productos, e) {
    let carrito = obtenerCarrito()
    let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
    let productosEnCarrito = carrito.find(producto => producto.id === productoBuscado.id)

    if (productoBuscado.stock > 0) {
        if (productosEnCarrito) {
            productosEnCarrito.unidades++
            productosEnCarrito.subtotal = productosEnCarrito.unidades * productosEnCarrito.precioUnitario
        } else {
            carrito.push({
                id: productoBuscado.id,
                rutaImg: productoBuscado.rutaImg,
                nombre: productoBuscado.nombre,
                precioUnitario: productoBuscado.precio,
                unidades: 1,
                subtotal: productoBuscado.precio
            })
        }
        productoBuscado.stock--
        localStorage.setItem("carrito", JSON.stringify(carrito))
        totatada("Producto agregado", 1500)
    } else {
        alertas("Lo siento", "No hay mas stock del producto deseado", "error", true)
    }

    renderizarCarrito()

}

function renderizarCarrito() {
    let productosEnElCarrito = obtenerCarrito()
    if (productosEnElCarrito.length > 0) {
        let divCarrito = document.getElementById("carrito")
        divCarrito.innerHTML = ""

        productosEnElCarrito.forEach(producto => {
            let tarjetaEnCarrito = document.createElement("div")
            tarjetaEnCarrito.className = "tarjeta"
            tarjetaEnCarrito.innerHTML = `
             <img class="imagenes" src=./imagenes/${producto.rutaImg}>
             <h3>${producto.nombre}</h3>
             <p>Precio: $${producto.precioUnitario}</p>
             <p> Cantidad: ${producto.unidades}</p>
             <p>Subtotal: $${producto.subtotal}</p>
             
            `
            divCarrito.appendChild(tarjetaEnCarrito)

        })
        let boton = document.createElement("button")
        boton.innerHTML = "Finalizar compra"
        boton.className = "botonfinalizar"
        boton.addEventListener("click", () => finalizarCompra(carrito))
        divCarrito.appendChild(boton)
    }


}


function buscaryfiltrar(productos, buscador) {
    let filtrarProductos = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(buscador.value)
    })
    renderizarProductos(filtrarProductos)
}


function verOcultarCarrito() {
    let carrito = document.getElementById("carrito")
    let productos = document.getElementById("productos")

    carrito.classList.toggle("oculta")
    productos.classList.toggle("oculta")
}


function filtrarCategorias(e, productos) {
    let productosFiltrados = productos.filter(producto => {
        return producto.categoria === e.target.id
    })
    renderizarProductos(productosFiltrados)
}


function finalizarCompra() {
    let carrito = document.getElementById("carrito")
    carrito.innerHTML = "Ingrese productos para finalizar su compra"
    localStorage.removeItem("carrito")
    alertas("Gracias por su compra", "Su compra fue realizada con exito", "success", true)

}

function alertas(title, text, icon, showconfirmButton, timer) {
    Swal.fire({
        title,
        text,
        icon,
        showconfirmButton,
        timer,
    })
}

function totatada(text, duration) {
    Toastify({
        text,
        duration,
        className: "tostada",
        style: {
            background: "linear-gradient(to right, #2fb4cc, #0000ff)",
        }
    }).showToast()
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || []
}







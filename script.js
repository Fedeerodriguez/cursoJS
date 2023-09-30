
// El array de objetos (Los productos)
let productos = [
    { id: 4, nombre: "Guantes de boxeo", categoria: "boxeo", stock: 5, precio: 1500, rutaImg: "guantes-de-boxeo.jpg" },
    { id: 6, nombre: "Pelota de futbol", categoria: "futbol", stock: 9, precio: 1900, rutaImg: "pelota-de-futbol.jpg" },
    { id: 8, nombre: "Guantes de beisbol", categoria: "beisbol", stock: 4, precio: 700, rutaImg: "guante-de-beisbol.jpg" },
    { id: 12, nombre: "Guantes de golero", categoria: "futbol", stock: 7, precio: 1400, rutaImg: "guantes-de-golero.jpg" },
    { id: 10, nombre: "Raqueta de tenis", categoria: "tenis", stock: 2, precio: 3100, rutaImg: "raqueta-de-tenis.jpg" },
    { id: 2, nombre: "Gorra de beisbol", categoria: "beisbol", stock: 12, precio: 800, rutaImg: "gorra-de-beisbol.jpg" },
    { id: 9, nombre: "Pelota de tenis", categoria: "tenis", stock: 5, precio: 2200, rutaImg: "pelota-de-tenis.jpg" },
    { id: 11, nombre: "Bolso de tenis", categoria: "tenis", stock: 8, precio: 990, rutaImg: "bolso-de-tenis.jpg" },
    { id: 17, nombre: "Medias de futbol", categoria: "futbol", stock: 3, precio: 850, rutaImg: "medias-de-futbol.jpg" },
    { id: 15, nombre: "Bate de beisbol", categoria: "beisbol", stock: 7, precio: 2300, rutaImg: "bate-de-beisbol.jpg" },
    { id: 7, nombre: "Bucal de boxeo", categoria: "boxeo", stock: 10, precio: 1100, rutaImg: "bucal-de-boxeo.jpg" },
    { id: 13, nombre: "Bolsa de boxeo", categoria: "boxeo", stock: 6, precio: 2750, rutaImg: "bolsa-de-boxeo.jpg" }
]

let carrito = []

renderizarProductos(productos, carrito)


function renderizarProductos(productos, carrito) {
    let contenedorProductos = document.getElementById("productos")
    contenedorProductos.innerHTML = ""

    productos.forEach(producto => {
        let card = document.createElement("div")
        card.innerHTML =
            `<img class="imagenes" src=./imagenes/${producto.rutaImg}> 
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <p id=${producto.id} class="botones">Agregar al carrito</p>
    `
        card.className = "tarjeta"
        contenedorProductos.appendChild(card)
        let botonAgregarAlCarrito = document.getElementById(producto.id)
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(productos, carrito, e))
    })
}

let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")

buscar.addEventListener("click", () => buscarinput(productos))

function buscarinput(productos) {
    let filtrarProductos = productos.filter(producto => producto.nombre.includes(buscador.value))
    renderizarProductos(filtrarProductos)
}






// funcion para agregar al carrito
function agregarAlCarrito(productos, carrito, e) {
    let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
    let productosEnCarrito = carrito.find(producto => producto.id === productoBuscado)

    if (productoBuscado.stock > 0) {
        if (productosEnCarrito) {
            productosEnCarrito.unidades++
            productosEnCarrito.subtotal = productosEnCarrito.unidades * productosEnCarrito.precioUnitario
        } else {
            carrito.push({
                id: productoBuscado.id,
                nombre: productoBuscado.nombre,
                precioUnitario: productoBuscado.precio,
                unidades: 1,
                subtotal: productoBuscado.precio
            })
        }
        productoBuscado.stock--
        alert("Se agrego su producto al carrito")
    } else {
        alert("No hay mas stock del producto seleccionado")
    }
    renderizarCarrito(carrito)
}


function renderizarCarrito(productosEnElCarrito) {
    let productosEnCarrito = document.getElementById("carrito")
    productosEnCarrito.innerHTML = ""

    productosEnElCarrito.forEach(producto => {
        let tarjetaEnCarrito = document.createElement("div")
        tarjetaEnCarrito.innerHTML = `
        <img class="imagenes" src=./imagenes/${producto.rutaImg}> 
        <h3>${producto.nombre}</h3>
        <p>$${producto.precioUnitario}</p>
        <p>${producto.unidades}</p>
        <p>$${producto.subtotal}</p>`

        productosEnCarrito.appendChild(tarjetaEnCarrito)
    })

}
// funcion para finalizar la compra de los productos
function finalizarSuCompra(carrito) {
    if (carrito.length === 0) {
        alert("Primero debe agregar un producto al carrito para finalizar correctamente su compra")
    } else {
        let total = carrito.reduce((acum, produto) => acum + produto.subtotal, 0)
        alert("El total a pagar por su compra es $ " + total)
        alert("Gracias por su compra")
    }

}


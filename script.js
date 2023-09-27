
// El array de objetos (Los productos)
let productos = [
    { id: 4, nombre: "guantes de boxeo", categoria: "boxeo", stock: 5, precio: 1500, rutaImg: "guantes-de-boxeo.jpg"},
    { id: 6, nombre: "pelota de futbol", categoria: "futbol", stock: 9, precio: 1900, rutaImg: "pelota-de-futbol.jpg"},
    { id: 8, nombre: "guante de beisbol", categoria: "beisbol", stock: 4, precio: 700, rutaImg: "guante-de-beisbol.jpg"},
    { id: 12, nombre: "guantes de golero", categoria: "futbol", stock: 7, precio: 1400, rutaImg: "guantes-de-golero.jpg"},
    { id: 10, nombre: "raqueta de tenis", categoria: "tenis", stock: 2, precio: 3100, rutaImg: "raqueta-de-tenis.jpg"},
    { id: 2, nombre: "gorra de beisbol", categoria: "beisbol", stock: 12, precio: 800, rutaImg: "gorra-de-beisbol.jpg"},
    { id: 9, nombre: "pelota de tenis", categoria: "tenis", stock: 5, precio: 2200, rutaImg: "pelota-de-tenis.jpg"},
    { id: 11, nombre: "bolso de tenis", categoria: "tenis", stock: 8, precio: 990, rutaImg: "bolso-de-tenis"},
    { id: 17, nombre: "medias de futbol", categoria: "futbol", stock: 3, precio: 850, rutaImg: "medias-de-futbol.jpg"},
    { id: 15, nombre: "bate de beisbol", categoria: "beisbol", stock: 7, precio: 2300, rutaImg: "bate-de-beisbol.jpg"},
    { id: 7, nombre: "bucal de boxeo", categoria: "boxeo", stock: 10, precio: 1100, rutaImg: "bucal-de-boxeo.jpg"},
    { id: 13, nombre: "bolsa de boxeo", categoria: "boxeo", stock: 6, precio: 2750, rutaImg: "bolsa-de*boxeo.jpg"}
]




let carrito = []


// funcion para listar productos por propiedades que me pide la consiga
function listar2(productos, prop1, prop2, separador) {
    return productos.map(producto => producto[prop1] + separador + producto[prop2]).join("\n")
}
// funcion para agregar al carrito
function agregarAlCarrito(productos, carrito) {
    let id = Number(prompt("Seleccione su producto por id:\n" + listar(productos)))
    let productoBuscado = productos.find(producto => producto.id === id)
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
}
// funcion para ver el todas las propiedades del producto 
function verInformacion(productos) {
    let id = Number(prompt("Seleccione el id del producto que desea ver:\n" + listar(productos)))
    let productoSeleccionado = productos.find(producto => producto.id === id)
    alert(`El ID es: ${productoSeleccionado.id}\nEl nombre es: ${productoSeleccionado.nombre}\nLa categoria es: ${productoSeleccionado.categoria}\nEl stock es: ${productoSeleccionado.stock}\nEl precio es: ${productoSeleccionado.precio}`)

}

// funcion para ordenar acendente y desendente depende lo que pida la consigna
function ordenar(productos, propiedad, esAscendente) {
    productos.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1
        }
        if (a[propiedad] > b[propiedad]) {
            return 1
        }

        return 0
    })
    if (!esAscendente) {
        productos.reverse()

    }
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


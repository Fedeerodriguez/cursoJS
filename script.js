
// El array de objetos (Los productos)
let productos = [
    { id: 4, nombre: "remera rayada", categoria: "indumentaria", stock: 5, precio: 1500 },
    { id: 6, nombre: "pelota de futbol", categoria: "deportes", stock: 9, precio: 1900 },
    { id: 8, nombre: "lentes de sol", categoria: "indumentaria", stock: 4, precio: 700 },
    { id: 12, nombre: "guantes de golero", categoria: "deportes", stock: 7, precio: 1400 },
    { id: 10, nombre: "campera de cuero", categoria: "indumentaria", stock: 2, precio: 3100 },
    { id: 2, nombre: "gorra", categoria: "indumentaria", stock: 12, precio: 800 },
    { id: 9, nombre: "paleta de ping ping", categoria: "deportes", stock: 5, precio: 2200 },
    { id: 11, nombre: "camisa rayada", categoria: "indumentaria", stock: 8, precio: 990 },
    { id: 17, nombre: "canilleras", categoria: "deportes", stock: 3, precio: 850 }

]
// funcion para pedir nombre a la persona
function solicitarNombre() {
    let nombreIngresado = prompt("Hola buenas, Bienvenido a nuestra pequeño ecommerce . Por favor diganos como se llama usted").toLowerCase()
    alert("Bienvenido "+ nombreIngresado)
}

solicitarNombre()

// el carrito
let carrito = []

let opcion
// en este caso use el do-while para realizar la pre entrega donde lo realice asi con if porque queria practicarlo 
do {
    opcion = Number(prompt("Ingrese una opcion:\n1 - Listar productos\n2 - Agregar al carrito\n3 - Ver informacion de un producto en particular\n4 - Mostrar nombre y precio\n5 - Filtrar por precios mayor a 1000\n 6 - Filtrar por precios menores a 1000\n7 - Ordenar por nombre asc\n8 - Ordenar por nombre desc\n9 finalizar compras\n0 - para salir  "))
    if (opcion === 1) {
        alert(listar(productos))
    } else if (opcion === 2) {
        agregarAlCarrito(productos, carrito)
    } else if (opcion === 3) {
        verInformacion(productos)
    } else if (opcion === 4) {
        let precios = productos.map(producto => producto.nombre + " - " + "$" + producto.precio).join("\n")
        alert(`${precios}`)
    } else if (opcion === 5) {
        let filtrarPrecios = productos.filter(producto => producto.precio > 1000)
        alert(listar2(filtrarPrecios, "nombre", "precio", "-"))
    } else if (opcion === 6) {
        let filtrarPrecios = productos.filter(producto => producto.precio < 1000)
        alert(listar2(filtrarPrecios, "nombre", "precio", "-"))
    } else if (opcion === 7) {
        ordenar(productos, "nombre", true)
        alert(listar2(productos, "id", "nombre", "-"))
    } else if (opcion === 8) {
        ordenar(productos, "nombre", false)
        alert(listar2(productos, "id", "nombre", "-"))
    } else if (opcion === 9) {
        finalizarSuCompra(carrito)
    }

} while (opcion != 0)


// funcion para listar los productos
function listar(productos) {
    return productos.map(producto => producto.id + " - " + producto.nombre).join("\n")

}
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



// Esto que esta comentado es de la pre entrega 1 no lo quise borrar por futuras cosas que me pueden llegar a despejar dudas



/* function solicitarNombre() {
    let nombreIngresado = prompt("Hola buenas, Bienvenido a nuestra pequeña almacen. Por favor diganos como se llama usted")
    alert("Bienvenido "+ nombreIngresado)
}


let mensaje = "Ingrese el producto que desea comprar\n1 - Arroz el kg $60\n2 - Yerba el kg $200\n3 - coca cola los 3 litros $250\n4 - papel higienico los 4 royos $150\n5 - Quiere finalizar su compra?\n0 - Salir "
let option
let total = 0

solicitarNombre()

do {
    option = Number(prompt(mensaje))
    switch (option) {
        case 1:
            alert("Se agrego un kilo de arroz al carrito")
            total += 60
            break
            case 2:
            alert("Se agrego un kilo de yerba al carrito")
            total += 200
            break
            case 3:
            alert("Se agrego una coca cola de 3 litros al carrito")
            total += 250
            break
            case 4:
            alert("Se agrego un paquete de 4 royos de papel higienico al carrito")
            total += 150
            break
            case 5:
            alert("Usted debe pagar $" + total)
            let finalizado = prompt("Quiere finalizar su compra? Si o No").toLowerCase()
            if (finalizado === "si"){
                total = 0 
                alert("Gracias por comprar aqui. Vuelva pronto")
                break
            }
        default:
        break;
    }

} while (option != 0) */

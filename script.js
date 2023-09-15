
let productos =  [
    {id: 4, nombre: "remera rayada", categoria: "indumentaria", stock: 5, precio: 1500 },
    {id: 6, nombre: "pelota de futbol", categoria: "deportes", stock: 9, precio: 1900 },
    {id: 8, nombre: "lentes de sol", categoria: "indumentaria", stock: 4, precio: 700 },
    {id: 12, nombre: "guantes de golero", categoria: "deportes", stock: 7, precio: 1400 },
    {id: 10, nombre: "campera de cuero", categoria: "indumentaria", stock: 2, precio: 3100 },
    {id: 2, nombre: "gorra", categoria: "indumentaria", stock: 12, precio: 800 },
    {id: 9, nombre: "paleta de ping ping", categoria: "deportes", stock: 5, precio: 2200 },
    {id: 11, nombre: "camisa rayada", categoria: "indumentaria", stock: 8, precio: 990 },
    {id: 17, nombre: "canilleras", categoria: "deportes", stock: 3, precio: 1300 }

]


let carrito =[]

let opcion
do {
    opcion =  Number(prompt("Ingrese una opcion:\n1 - Listar productos\n2 - Agregar al carrito\n3 - Ver informacion de un producto en particular\n4 - Filtrar por precios\n5 - Ordenar por nombres asc\n 6 - Ordenar por nombre desc\n7 - Ordenar por precios asc\n8 - Ordenar por precio desc\n9 finalizar compras\n0 - para salir  "))
    if(opcion === 1){
      alert(listar(productos))
    } else if(opcion === 2){
        
    }

} while (opcion != 0)



function listar(productos) {
   return productos.map(producto => producto.id+ " "+ producto.nombre).join("\n")
    
}



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

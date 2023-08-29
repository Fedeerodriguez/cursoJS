
function solicitarNombre() {
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

} while (option != 0)

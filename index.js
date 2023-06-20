// console.log("Hola usuario")

function saludar() {
    alert('Bienvenida a Lithium!')
}

saludar()
let edad = prompt('Ingrese su edad:    ')
console.log('Iniciar funcion: procesarCompra')

if(edad >= 16) {
    alert('Es mayor de edad')

} else{
    alert('Es menor de Edad')
}

function procesarCompra() {
    let respuestaCompra = true
    if (respuestaCompra) {
        console.log("Tus productos son:")
        do {
            codigo = prompt("Ingresa el codigo del producto (stock collar 1, anillo 2, pulsera 3)") 
            respuestaCompra = confirm("Desea agregar otro producto al carrito?")
            sumarCarrito(codigo)
        } while (respuestaCompra)
    }
    else {
        console.log("EL total de tu compra es: $" + calcularTotal(precio1, precio2, precio3))
        console.log("Gracias por tu compra!")
    }
}

let precio1 = 0
let precio2 = 0
let precio3 = 0

function sumarCarrito() {
    switch (codigo.toLowerCase()) {
        case "1":
            precio1 = 3000
            console.log("Item: Collar Miku:")
            console.log("El valor del producto es de : $3000")
            break
        case "2":
            precio2 = 2700
            console.log("Item: Anillo love:")
            console.log("El valor del producto es de : $2700")
            break
        case "3":
            precio3 = 4500
            console.log("Item: Pulsera desstiny:")
            console.log("El valor del producto es de : $4500")
            break
        default:
            console.error("Articulo inexistente.")
            break
    }
}

function calcularTotal(precio1, precio2, precio3) {
    return precio1 + precio2 + precio3
}
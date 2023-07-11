function saludar() {
    alert('Bienvenida a Serendipity!')
}

saludar()

class Producto {
    constructor(tittle, price, description, stock){
        this.tittle = tittle
        this.price = price
        this.description = description
        this.stock = stock
    }
    getPrecioConIVA() {
        const iva = 0.21; 
        const precioConIVA = this.price + (this.price * iva);
        return precioConIVA;
      }
}

const nuevoProducto = new Producto("Sakura", 2000, "aritos de plata 925", 100)

const items = [
    { tittle: "Collar Miku", price : 3000, description: "Collar de plata 925", stock: 100 },
    { tittle: "Love ring", price: 2700 , description: "anillo de plata 925", stock: 100 },
    { tittle: "Destiny bracelet", price : 4500 , description: "pulsera de plata 925", stock: 100 },
]


items.push(nuevoProducto)
items.forEach((item) => {
    const producto = new Producto(item.tittle, item.price, item.description, item.stock);
    console.log("El precio final del producto "+ item.tittle + " es $" + producto.getPrecioConIVA()); 
  });

let resultado = items.find((item) => item.tittle === ("Collar Miku"))
let resultado1 = items.find((item) => item.tittle === ("Love ring"))
let resultado2 = items.find((item) => item.tittle === ("Destiny bracelet") )
// let resultado3 = nuevoProducto.find((item) => item.tittle === ("Sakura") )

console.table(items)

console.log(resultado)
console.log(resultado1)
console.log(resultado2)
// console.log(resultado3)




// let quantityProduct = Number(prompt ("Cantidad de productos a ingresar"))

// for (let index = 0; index < quantityProduct; index++) {
//     let tittle = prompt ("ingresar tittle: ")
//     let price = prompt ("ingresar price: ")
//     let description = prompt ("ingresar description: ")
//     let stock = prompt ("ingresar stock: ")


// }









































































// // console.log("Hola usuario")

// function saludar() {
//     alert('Bienvenida a Serendipity!')
// }

// saludar()

// let edad = Number(prompt('Ingrese su edad:    '))
// console.log('Iniciar funcion: procesarCompra()')

// if(edad >= 16) {
//     alert('Es mayor de edad')

// } else{
//     alert('Es menor de Edad')
//     edad = Number(prompt('Ingrese su edad:    '))
// }

// function procesarCompra() {
//     let respuestaCompra = true
//     if (respuestaCompra) {
//         console.log("Tus productos son:")
//         do {
//             codigo = prompt("Ingresa el codigo del producto (stock collar 1, anillo 2, pulsera 3)") 
//             respuestaCompra = confirm("Desea agregar otro producto al carrito?")
//             sumarCarrito(codigo)
//         } while (respuestaCompra)
//     }
//     else {
//         console.log("EL total de tu compra es: $" + calcularTotal(precio1, precio2, precio3))
//         console.log("Gracias por tu compra!")
//         totalCompra(resultado);
//     }
// }

// let precio1 = 0
// let precio2 = 0
// let precio3 = 0
// let resultado = 0

// function sumarCarrito(codigo) {
//     if (codigo !== null)
//     switch (codigo.toLowerCase()) {
//         case "1":
//             precio1 = 3000
//             console.log("Item: Collar Miku:")
//             console.log("El valor del producto es de : $3000")
//             break
//         case "2":
//             precio2 = 2700
//             console.log("Item: Anillo love:")
//             console.log("El valor del producto es de : $2700")
//             break
//         case "3":
//             precio3 = 4500
//             console.log("Item: Pulsera desstiny:")
//             console.log("El valor del producto es de : $4500")
//             break
//         default:
//             console.error("Articulo inexistente.")
//             break
//     }
//     else{
//         console.log("finalizar compra")
        
//     }
//     mostrarResultado = precio1 + precio2 + precio3
// }



// function totalCompra(resultadoParam) {
//     console.log('el total es', resultadoParam)
// }

// function mostrarResultado(precio1, precio2, precio3) {
//     return precio1 + precio2 + precio3
// }

// calcularTotal(3000,2700,4500)
// procesarCompra()
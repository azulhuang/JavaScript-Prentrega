function saludar() {
    alert('Bienvenida a Serendipity!')
}

saludar()



const products = [
    { imageUrl: "assets/collar_Miku.jpeg", product: "Collar Miku", price: 3000, description: "Collar de plata 925", code: 1, stock: 100 },
    { imageUrl: "assets/lovering.jpeg", product: "Love ring", price: 2700, description: "anillo de plata 925", code: 2, stock: 100 },
    { imageUrl: "assets/destinity.jpeg", product: "Destiny bracelet", price: 4500, description: "pulsera de plata 925", code: 3, stock: 100 },
    { imageUrl: "assets/sakura.jpeg", product: "Sakura", price: 5000, description: "Aretes de plata 925", code: 4, stock: 100 },
];

const contenedor = document.getElementById("contenedor");

const divRow = document.createElement('div');
divRow.classList.add('row', 'w-100');

for (const product of products) {
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'col-4');
    divCard.innerHTML = `
        <div class='card-body'>
        <img src="${product.imageUrl}" class='card-img-top' alt="${product.product}"/>
        <li>Product: ${product.product}</li>
        <li>Price: ${product.price}</li>
        <li>Description: ${product.description}</li>
        <li>Stock: ${product.stock}</li>
        <div class='card.footer'>
            <button class='btn btn-outline-dark w-100' id=${product.code}>Add cart</button>

        </div>
    `;
    divRow.appendChild(divCard);
}

contenedor.appendChild(divRow);

let productosElegidos = [];

function llenarCarrito() {
    const botones = document.querySelectorAll('button.btn');
    
    for (let boton of botones) {
        boton.addEventListener('click', (e) => {
            const productoElegido = products.find((product) => product.code === parseInt(e.target.id));
            productosElegidos.push(productoElegido);
            console.table(productosElegidos);
            localStorage.setItem("productosElegidos", JSON.stringify(productosElegidos));
        });
    }
}

llenarCarrito();




















// let miContenedor = document.getElementById('contenedor')
// contenedor.addcart = (evt)=> {
//     evt.preventDefault()
//     let addcart = evt.target

//     console
// }





































































// Entrega II
// class Producto {
//     constructor(tittle, price, description, stock){
//         this.tittle = tittle
//         this.price = price
//         this.description = description
//         this.stock = stock
//     }
//     getPrecioConIVA() {
//         const iva = 0.21; 
//         const precioConIVA = this.price + (this.price * iva);
//         return precioConIVA;
//       }
// }

// const nuevoProducto = new Producto("Sakura", 2000, "aritos de plata 925", 100)

// const items = [
//     { tittle: "Collar Miku", price : 3000, description: "Collar de plata 925", stock: 100 },
//     { tittle: "Love ring", price: 2700 , description: "anillo de plata 925", stock: 100 },
//     { tittle: "Destiny bracelet", price : 4500 , description: "pulsera de plata 925", stock: 100 },
// ]


// items.push(nuevoProducto)
// items.forEach((item) => {
//     const producto = new Producto(item.tittle, item.price, item.description, item.stock);
//     console.log("El precio final del producto "+ item.tittle + " es $" + producto.getPrecioConIVA()); 
//   });

// let resultado = items.find((item) => item.tittle === ("Collar Miku"))
// let resultado1 = items.find((item) => item.tittle === ("Love ring"))
// let resultado2 = items.find((item) => item.tittle === ("Destiny bracelet") )

// console.table(items)

// console.log(resultado)
// console.log(resultado1)
// console.log(resultado2)





// let quantityProduct = Number(prompt ("Cantidad de productos a ingresar"))

// for (let index = 0; index < quantityProduct; index++) {
//     let tittle = prompt ("ingresar tittle: ")
//     let price = prompt ("ingresar price: ")
//     let description = prompt ("ingresar description: ")
//     let stock = prompt ("ingresar stock: ")


// }





// Entrega1
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
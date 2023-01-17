alert("Bienvenido a la tienda en linea")

const productos = [
    { nombre: "monitor", precio: 100 },
    { nombre: "teclado", precio: 10 },
    { nombre: "mouse", precio: 5 },
    { nombre: "portatil", precio: 600 },
];

let carrito = []

let seleccion = prompt("Desea comprar algun producto: si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no")
    seleccion = prompt("Desea realizar alguna compra si o no")
}

if (seleccion == "si") {
    alert("Lista de productos")
    let todosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosProductos.join(" - "))
}
else if (seleccion == "no") {
    alert("Gracias por visitar la Tienda")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto al carrito de compras")
    let precio = 0

    if (producto == "monitor" || producto == "teclado" || producto == "mouse" || "portatil") {
        switch (producto) {
            case "monitor":
                precio = 100;
                break;
            case "teclado":
                precio = 10;
                break;
            case "mouse":
                precio = 5;
                break;
            case "portatil":
                precio = 600;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades necesita"))

        carrito.push({ producto, unidades, precio })
    } else {
        alert("No tenemos el producto que busca")
    }

    seleccion = prompt("Desea seguir comprando?")

    while (seleccion == "no") {
        alert("Gracias por su compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar es: ${total}`)
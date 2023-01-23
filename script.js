const productos = [
    {nombre: "Harina", precio: 50},
    {nombre: "Galletas", precio: 100},
    {nombre: "Cerveza", precio: 150},
    {nombre: "Leche", precio: 200},
    {nombre: "Gaseosa", precio: 250},
];
let carrito = []

let seleccion = prompt("Desea comprar algun producto si o no")

while(seleccion != "si" && seleccion !="no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no")
}

if(seleccion == "si") {
    alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Muchas gracias por venir, hasta pronto!!")
}

while(seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Harina" || producto == "Galletas" || producto == "Cerveza" || producto == "Leche" || producto == "Gaseosa") {
        switch(producto) {
            case "Harina":
                precio = 50;
                break;
            case "Galletas":
                precio = 100;
                break;
            case "Cerveza":
                precio = 150;
                break;
            case "Leche":
                precio = 200;
                break;
            case "Gaseosa":
                precio = 250;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?") 

    while(seleccion === "no") {
        alert("¡Gracias por la compra, hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

function compraTotal() {
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar por su compra es: ${total}`)
}

compraTotal()
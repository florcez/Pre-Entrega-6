class Producto {
    constructor(nombre, precio, stock, carrito){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = Number(stock),
        this.carrito = carrito
    };
    MostrarDatos(){
        console.log("Nombre: " + this.nombre)
        console.log("Precio: " + this.precio)
        console.log("Stock: " + this.stock)
        console.log(this.carrito)
        prompt("Enter para continuar")
    }
    AgregarCarrito(){
        if (this.stock >= 1){
            this.stock -= 1
            this.carrito += 1
        }
        else{
            console.log("No se encuentra suficiente stock del producto.")
        }
        
    }
    QuitarCarrito(){
        if (this.carrito == 0){
            console.log("Producto no se encuentra en el carrito")
            prompt("Enter para continuar")
        }
        else{
            this.stock += 1
            this.carrito -= 1
        }
    }
}

function MostrarLista(productos){
    let n = 0
    for (const nombre of productos){
        n += 1
        console.log(n+ "- " + nombre.nombre)
    }
}

function EncontrarProducto (productos){
    let buscar
    let resultado
    let x = 0
    do{
        buscar = prompt("Nombre del producto para buscar")
        resultado = productos.find((producto) => producto.nombre.toLowerCase() == buscar.toLowerCase())
        x += 1

        let lista

        if (x >= 3 && resultado == undefined){
            MostrarLista(productos)
        do {
          lista = prompt("Elegir número de la lista para agregar al carrito")
        } while (isNaN(Number(lista)) || Number(lista) < 1 || Number(lista) > productos.length)

        resultado = productos[Number(lista)-1]
}
    } while (resultado == undefined)
    

    return resultado
}
function ProductosPresupuesto(productos){
    let presupuesto
    do {
        presupuesto = prompt("Ingresar presupuesto")
    } while (Number(presupuesto) < 1 || isNaN(Number(presupuesto)))

    const resultado = productos.filter((producto) => producto.precio <= presupuesto)
    
    if (resultado.length == 0){
        console.log("No hay productos dentro de su presupuesto")
    }
    else{
        console.log("Productos dentro de presupuesto: ")
        MostrarLista(resultado)
    }
    prompt("Enter para continuar")
}

function VerCarrito(carritoLista, productos){
    carritoLista = productos.filter((producto) => producto.carrito >= 1)


    for (const nombre of carritoLista){
        console.log("Nombre: " + nombre.nombre + " - Cantidad: " + nombre.carrito)
    }
    if (carritoLista.length == 0){
        console.log("No hay productos dentro del carrito")
    }
    return carritoLista
}

function Precio(carritoLista, productos){
    console.clear()
    carritoLista = VerCarrito(carritoLista, productos)

    let total = 0
    for (const producto of carritoLista){
        let cantidad = producto.precio * producto.carrito
        total += cantidad
    }
    console.log("El total para pagar es de $" + total)
    return "0"
}



const productos = []
productos.push(new Producto("Hayakawa", 16000, 3, 0))
productos.push(new Producto("Headcrab", 20000, 2, 0))
productos.push(new Producto("Chiquita", 15000, 10, 0))
productos.push(new Producto("Tenna", 46000, 9, 0))
productos.push(new Producto("Ralsei", 18000, 6, 0))
productos.push(new Producto("Marina", 14000, 8, 0))
productos.push(new Producto("Conejo", 19000, 10, 0))
productos.push(new Producto("BAMGEUT", 24000, 2, 0))
productos.push(new Producto("Rana", 16000, 4, 0))
productos.push(new Producto("Salchicha", 16000, 6, 0))


let x
let carritoLista = []
do {
    console.clear()
    console.log("1- Ver carrito")
    console.log("2- Ver productos dentro de presupuesto") //filter
    console.log("3- Ver datos de un producto")
    console.log("4- Agregar producto al carrito")
    console.log("5- Eliminar producto del carrito")
    console.log("6- Pagar y terminar programa")

    x = prompt("Elegir opcion")
    while (Number(x) < 1 || Number(x) > 6 || isNaN(Number(x))) {
        x = prompt("Ingresar valor valido")
    }

    if (x === "1"){
        VerCarrito(carritoLista, productos) 
        prompt("Enter para continuar")
    } 
    
    if (x === "2"){
        ProductosPresupuesto(productos)
    }
    if (x === "3"){
        EncontrarProducto(productos).MostrarDatos()
    }
    if (x === "4"){
        EncontrarProducto(productos).AgregarCarrito()
    }
    if (x === "5"){
        EncontrarProducto(productos).QuitarCarrito()
    }
    if (x === "6"){
        x = Precio(carritoLista, productos)
    }
} while (x != "0")


console.log("Gracias por usar el programa")


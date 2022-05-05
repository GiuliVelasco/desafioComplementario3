let articulo
let continua

class Producto {
    constructor(id, nombre, color, talle, precio) {
        this.id = id
        this.nombre = nombre.toLowerCase()
        this.color = color
        this.talle = talle
        this.precio = parseFloat(precio)
    }
    esVisto(nombre){
        return this.nombre == nombre.toLowerCase();
    }
}
const producto1 = new Producto(1, "Judogi", "Blanco", "S", 30)
const producto2 = new Producto(2, "Cinturon", "Amarillo", "Unico", 8)
const producto3 = new Producto(3, "Guante", "Rojo", "12/14 oz", 35)
const producto4 = new Producto(4, "Tibial", "Blanco", "Unico", 30)
const producto5 = new Producto(5, "Venda", "Rojo", "Unico", 7)
const producto6 = new Producto(6, "Remera", "Blanco", "M/L", 12)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const carrito = []

const container = document.querySelector(".container");

//funcion saludar(){}
const saludar = () => {
    let nombre = prompt("Ingrese su nombre");
    while (!isNaN(nombre)) {
        nombre = prompt("Ingrese su nombre");
    }
    container.innerHTML = `<h1>Bienvenido ${nombre.toUpperCase()} a Equipamiento Marcial Mendoza.</h1>`;
};

console.log("La cantidad de productos cargados es " + productos.length)
console.log(productos)

const precios = productos.map((el) => el.precio) //array de precios
console.log(precios)

//Funcion para seleccionar un producto
const consultarProductos = () => {
    let texto = "";
    for (const p of productos) {
        texto += `${p.id}) ${p.nombre}\n`;
    };
    continua = true;
    while (continua){
        let productoSeleccionado = parseInt(prompt(`Ingrese el número correspondiente al producto seleccionado: \n${texto}`));
        if (productoSeleccionado <= productos.length && productoSeleccionado > 0){
            continua = false;
            articulo = productoSeleccionado;
        }else{
            alert("Ingrese una opción válida");
        };
    };
};

//funcion para agregar producto seleccionado al carrito
const agregarACarrito = () => {
    let buscarArt = productos.find(
        (elemento) => elemento.id === articulo
    );

    let existe = carrito.some((elemento) => elemento.id === articulo);//esta línea me devuelve true o false
    if (existe) {
        buscarArt.cantidad++;
    } else {
        buscarArt.cantidad = 1;
        carrito.push(buscarArt);
    }

    const seguirComprando = confirm("Desea agregar otro producto?");

    if(seguirComprando){
        consultarProductos();
        agregarACarrito();
    }
}

const mostrarProductos = () => {
    const divCaja = document.createElement("div");
    divCaja.className = "caja";
    container.appendChild(divCaja);

    carrito.forEach(elemento => {
        divCaja.innerHTML += `<div class="cuadroProducto">
        <p>${elemento.nombre.toUpperCase()}</p>
        <p>Precio unitario: U$D ${elemento.precio}</p>
        <p>Cantidad: ${elemento.cantidad}</p>
        <p>Subtotal: U$D ${elemento.precio * elemento.cantidad}</p>
        </div>`
    })
};

//LLamado de la funciones
saludar();
consultarProductos();
agregarACarrito();
mostrarProductos(); 
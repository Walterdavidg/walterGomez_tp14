let productos = ["Heladera", "Lavarropas", "Microondas", "Televisor", "Licuadora", "Aspiradora"];
console.log("Productos iniciales:", productos);

console.log("Primer producto:", productos[0]);
console.log("Último producto:", productos[productos.length - 1]);
console.log("Tercer producto:", productos[2]);

let primerProducto = productos.shift();
productos.push(primerProducto);
console.log("Mover el primer producto al final del array:", productos);

productos.push("Plancha", "Ventilador");
console.log("Array después de agregar dos productos:", productos);

console.log("Cantidad de productos en el array:", productos.length);

let buscarProducto = "Cafetera";
if (productos.includes(buscarProducto)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

let productosString = productos.join(" ");
console.log("Cadena de texto de los productos:", productosString);

console.log("Cantidad de elementos en la cadena de texto:", productosString.length);

let actualizarString = productosString.replace("Ventilador", "Secador");
console.log("Cadena actualizada:", actualizarString);

let nuevoArray = actualizarString.split(" ");
console.log("Nuevo array generado a partir de la cadena:", nuevoArray);
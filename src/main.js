const Producto = require("./producto");
const { buscarPorCodigo } = require("./busqueda");

const inventario = [];

function registrarProducto(codigo, nombre, precio, existencia) {
  const producto = new Producto(codigo, nombre, precio, existencia);
  inventario.push(producto);
  console.log(`Producto registrado: ${codigo} - ${nombre}`);
  return producto;
}

function consultarProducto(codigo) {
  const producto = buscarPorCodigo(inventario, codigo);
  if (producto) {
    producto.mostrarInformacion();
  } else {
    console.log(`Producto ${codigo} no encontrado`);
  }
}

console.log("=== Sistema de Inventario ===");
registrarProducto("P001", "Teclado", 350, 10);
registrarProducto("P002", "Mouse", 180, 5);
console.log(`Total de productos registrados: ${inventario.length}`);

console.log("\nConsulta de P002:");
consultarProducto("P002");

console.log("\nConsulta de P999:");
consultarProducto("P999");

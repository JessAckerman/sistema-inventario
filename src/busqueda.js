const Producto = require("./producto");

function buscarPorCodigo(productos, codigo) {
  return productos.find((producto) => producto.codigo === codigo) ?? null;
}

module.exports = { buscarPorCodigo };

if (require.main === module) {
  const productos = [
    new Producto("P001", "Teclado mecánico", 899.5, 25),
    new Producto("P002", "Mouse inalámbrico", 349.0, 40),
  ];

  const encontrado = buscarPorCodigo(productos, "P002");
  if (encontrado) {
    encontrado.mostrarInformacion();
  }

  if (buscarPorCodigo(productos, "P999") === null) {
    console.log("Producto P999 no encontrado");
  }
}

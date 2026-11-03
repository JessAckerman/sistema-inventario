class Producto {
  constructor(codigo, nombre, precio, existencia) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.existencia = existencia;
  }

  mostrarInformacion() {
    console.log("Información del producto");
    console.log(`Código: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: $${this.precio.toFixed(2)}`);
    console.log(`Existencia: ${this.existencia}`);
  }
}

module.exports = Producto;

if (require.main === module) {
  const producto = new Producto("P001", "Teclado mecánico", 899.5, 25);
  producto.mostrarInformacion();
}

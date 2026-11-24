const { test } = require("node:test");
const assert = require("node:assert/strict");
const Producto = require("../src/producto");

// Ejecuta mostrarInformacion() y devuelve las lineas que imprimio en pantalla.
function capturarSalida(t, producto) {
  t.mock.method(console, "log", () => {});
  producto.mostrarInformacion();
  return console.log.mock.calls.map((llamada) => llamada.arguments.join(" "));
}

test("CP01 - Crear un producto", () => {
  const producto = new Producto("P001", "Teclado", 350, 10);

  assert.ok(producto instanceof Producto);
  assert.deepEqual(
    { ...producto },
    { codigo: "P001", nombre: "Teclado", precio: 350, existencia: 10 }
  );
});

test("CP02 - Mostrar el codigo", (t) => {
  const producto = new Producto("P001", "Teclado", 350, 10);

  assert.equal(producto.codigo, "P001");
  assert.ok(capturarSalida(t, producto).includes("Código: P001"));
});

test("CP03 - Mostrar el nombre", (t) => {
  const producto = new Producto("P001", "Teclado", 350, 10);

  assert.equal(producto.nombre, "Teclado");
  assert.ok(capturarSalida(t, producto).includes("Nombre: Teclado"));
});

test("CP04 - Mostrar el precio", (t) => {
  const producto = new Producto("P001", "Teclado", 350, 10);

  assert.equal(producto.precio, 350);
  assert.ok(capturarSalida(t, producto).includes("Precio: $350.00"));
});

test("CP05 - Mostrar la existencia", (t) => {
  const producto = new Producto("P001", "Teclado", 350, 10);

  assert.equal(producto.existencia, 10);
  assert.ok(capturarSalida(t, producto).includes("Existencia: 10"));
});

test("CP06 - Mostrar informacion completa", (t) => {
  const producto = new Producto("P001", "Teclado", 350, 10);
  const salida = capturarSalida(t, producto);

  for (const linea of ["Código: P001", "Nombre: Teclado", "Precio: $350.00", "Existencia: 10"]) {
    assert.ok(salida.includes(linea), `Falta la linea "${linea}" en: ${JSON.stringify(salida)}`);
  }
});

test("CP07 - Crear otro producto", (t) => {
  const primero = new Producto("P001", "Teclado", 350, 10);
  const segundo = new Producto("P002", "Mouse", 180, 5);

  assert.deepEqual(
    { ...segundo },
    { codigo: "P002", nombre: "Mouse", precio: 180, existencia: 5 }
  );
  assert.deepEqual(
    { ...primero },
    { codigo: "P001", nombre: "Teclado", precio: 350, existencia: 10 }
  );

  const salida = capturarSalida(t, segundo);
  for (const linea of ["Código: P002", "Nombre: Mouse", "Precio: $180.00", "Existencia: 5"]) {
    assert.ok(salida.includes(linea), `Falta la linea "${linea}" en: ${JSON.stringify(salida)}`);
  }
});

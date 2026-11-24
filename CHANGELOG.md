# Historial de versiones

## v1.0.2

Fecha: 2026-11-24

- Corrección del error detectado durante las pruebas: el nombre del producto se mostraba en mayúsculas.
- Validación satisfactoria de la funcionalidad Producto (7 de 7 pruebas).
- La versión v1.0.1 no se publicó porque sus pruebas fallaron.

## v1.0.0

Fecha: 2026-11-24

- Primera versión del Sistema de Inventario.
- Clase `Producto` con código, nombre, precio y existencia, y el método `mostrarInformacion()`.
- Búsqueda de productos por código (`buscarPorCodigo`).
- Pruebas automatizadas CP01 a CP07 con `node:test`.
- Workflows de GitHub Actions para build, pruebas y liberación.

import {
    obtenerProductos as obtenerProductosRepo,
    obtenerProductoPorId as obtenerProductoPorIdRepo,
    crearProducto as crearProductoRepo,
    actualizarProducto as actualizarProductoRepo,
    eliminarProducto as eliminarProductoRepo
} from "../repositories/producto.repository";

import { Producto } from "../models/producto.model";

// READ - Obtener todos los productos
export const obtenerProductos = async () => {
    return await obtenerProductosRepo();
};

// READ - Obtener producto por ID
export const obtenerProductoPorId = async (id: number) => {
    return await obtenerProductoPorIdRepo(id);
};

// CREATE - Crear producto
export const crearProducto = async (producto: Producto) => {
    return await crearProductoRepo(producto);
};

// UPDATE - Actualizar producto
export const actualizarProducto = async (
    id: number,
    producto: Producto
) => {
    return await actualizarProductoRepo(id, producto);
};

// DELETE - Eliminar producto
export const eliminarProducto = async (id: number) => {
    return await eliminarProductoRepo(id);
};
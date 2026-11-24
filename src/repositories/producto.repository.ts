import pool from "../config/database";
import { Producto } from "../models/producto.model";

// Consultar todos los productos
export const obtenerProductos = async () => {
    const resultado = await pool.query(
        "SELECT * FROM productos ORDER BY id ASC"
    );

    return resultado.rows;
};

// Consultar un producto por ID
export const obtenerProductoPorId = async (id: number) => {
    const resultado = await pool.query(
        "SELECT * FROM productos WHERE id = $1",
        [id]
    );

    return resultado.rows[0];
};

// Crear un producto
export const crearProducto = async (producto: Producto) => {
    const resultado = await pool.query(
        `INSERT INTO productos
        (nombre, descripcion, precio, categoria_id, disponible)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.categoria_id,
            producto.disponible
        ]
    );

    return resultado.rows[0];
};

// Actualizar un producto
export const actualizarProducto = async (
    id: number,
    producto: Producto
) => {
    const resultado = await pool.query(
        `UPDATE productos
        SET nombre = $1,
            descripcion = $2,
            precio = $3,
            categoria_id = $4,
            disponible = $5
        WHERE id = $6
        RETURNING *`,
        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.categoria_id,
            producto.disponible,
            id
        ]
    );

    return resultado.rows[0];
};

// Eliminar un producto
export const eliminarProducto = async (id: number) => {
    const resultado = await pool.query(
        "DELETE FROM productos WHERE id = $1 RETURNING *",
        [id]
    );

    return resultado.rows[0];
};
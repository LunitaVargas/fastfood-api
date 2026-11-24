import { Request, Response } from "express";
import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../services/producto.service";

// READ - Obtener todos los productos
export const obtenerTodos = async (req: Request, res: Response) => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

// READ - Obtener producto por ID
export const obtenerPorId = async (req: Request, res: Response) => {
    try {
        const producto = await obtenerProductoPorId(Number(req.params.id));

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto" });
    }
};

// CREATE - Crear producto
export const crear = async (req: Request, res: Response) => {
    try {
        const producto = await crearProducto(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto" });
    }
};

// UPDATE - Actualizar producto
export const actualizar = async (req: Request, res: Response) => {
    try {
        const producto = await actualizarProducto(
            Number(req.params.id),
            req.body
        );

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto" });
    }
};

// DELETE - Eliminar producto
export const eliminar = async (req: Request, res: Response) => {
    try {
        const producto = await eliminarProducto(Number(req.params.id));

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado correctamente", producto });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto" });
    }
};
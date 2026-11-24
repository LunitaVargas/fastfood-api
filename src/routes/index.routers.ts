import { Router } from "express";
import {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
} from "../controllers/producto.controller";

const router = Router();

// Ruta de bienvenida
router.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a FastFood API"
    });
});

// Obtener todos los productos
router.get("/productos", obtenerTodos);

// Obtener producto por ID
router.get("/productos/:id", obtenerPorId);

// Crear producto
router.post("/productos", crear);

// Actualizar producto
router.put("/productos/:id", actualizar);

// Eliminar producto
router.delete("/productos/:id", eliminar);

export default router;
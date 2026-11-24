import express from "express";
import cors from "cors";
import { PORT } from "./config/env";
import routes from "./routes/index.routers";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// Middlewares generales
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api", routes);

// Middleware para rutas inexistentes
app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada"
  });
});

// Middleware centralizado de errores
app.use(errorMiddleware);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor FastFood API funcionando en http://localhost:${PORT}`);
});
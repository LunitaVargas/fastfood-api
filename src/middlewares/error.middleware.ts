import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error("Error:", error.message);

  res.status(500).json({
    message: "Error interno del servidor",
    error: error.message
  });
};
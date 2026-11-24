export interface Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria_id: number;
    disponible: boolean;
    created_at?: Date;
}
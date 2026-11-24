import pool from "./config/database";

async function probarConexion() {
    try {
        const resultado = await pool.query("SELECT NOW()");
        console.log("Conexión exitosa a PostgreSQL:");
        console.log(resultado.rows);
    } catch (error) {
        console.error("Error al conectar:", error);
    } finally {
        await pool.end();
    }
}

probarConexion();
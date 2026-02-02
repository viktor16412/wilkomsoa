const express = require('express');
const cors = require('cors');
const productoService = require('./services/ProductoService');

// ❌ AQUÍ FALTA ESTA LÍNEA EN TU CÓDIGO ACTUAL
const app = express(); 
// ⬆️ ESTA LÍNEA ES OBLIGATORIA

app.use(cors());
app.use(express.json()); // Para leer datos JSON del body

// --- TUS RUTAS (API) ---

// 1. Obtener todos
app.get('/api/productos', async (req, res) => {
    try {
        const productos = await productoService.getAll();
        res.json(productos);
    } catch (error) {
        res.status(500).send("Error del servidor");
    }
});

// 2. Crear
app.post('/api/productos', async (req, res) => {
    try {
        const nuevoProducto = await productoService.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al guardar");
    }
});

// 3. Eliminar
app.delete('/api/productos/:id', async (req, res) => {
    try {
        await productoService.delete(req.params.id);
        res.send("Producto eliminado");
    } catch (error) {
        res.status(500).send("Error al eliminar");
    }
});

// --- INICIAR SERVIDOR ---

const PORT = process.env.PORT || 3000; // Variable de entorno para Clever Cloud

app.listen(PORT, () => {
    console.log(`Servidor SOA corriendo en puerto ${PORT}`);
});

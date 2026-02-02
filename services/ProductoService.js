const { v4: uuidv4 } = require('uuid');
const db = require('../db'); // Importa la conexión desde la raíz

class ProductoService {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM productos');
        return rows;
    }

    async create(productoData) {
        const nuevoId = uuidv4();
        const { nombreproducto, Descripcion, Precioproducto, Stock, nombretipoproducto_idtipoproducto } = productoData;
        
        const sql = `INSERT INTO productos (idproductos, nombreproducto, Descripcion, Precioproducto, Stock, FechaRegistro, nombretipoproducto_idtipoproducto) VALUES (?, ?, ?, ?, ?, NOW(), ?)`;
        
        await db.query(sql, [nuevoId, nombreproducto, Descripcion, Precioproducto, Stock, nombretipoproducto_idtipoproducto]);
        return { id: nuevoId, ...productoData };
    }

    async delete(id) {
        await db.query('DELETE FROM productos WHERE idproductos = ?', [id]);
    }
}

module.exports = new ProductoService();

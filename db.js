const mysql = require('mysql2');

// Si estamos en Clever Cloud, usamos las variables de entorno
// Si estamos en tu PC local, usamos tus datos de prueba
const connection = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST || 'bwbftuxwahocz0bhcynh-mysql.services.clever-cloud.com',
    user: process.env.MYSQL_ADDON_USER || 'ur8dnwcm4cauk8we',
    password: process.env.MYSQL_ADDON_PASSWORD || '',
    database: process.env.MYSQL_ADDON_DB || 'bwbftuxwahocz0bhcynh',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection.promise();

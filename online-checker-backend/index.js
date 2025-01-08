const express = require('express');
const cors = require('cors'); // Importar cors
const ping = require('ping');

const app = express();
const port = 5000;

// Habilitar CORS
app.use(cors());

// Lista de sitios web a monitorear
const websites = ["google.com", "vinsmake.dev", "datos.jalisco.gob.mx", 'unexistentwebsite.com'];

// Endpoint para verificar el estado de los sitios web
app.get('/api/check', async (req, res) => {
    const results = [];
    for (const website of websites) {
        try {
            const response = await ping.promise.probe(website);
            results.push({
                website: website,
                status: response.alive ? 'Online' : 'Offline',
                responseTime: response.alive ? `${response.time} ms` : 'N/A'
            });
        } catch (error) {
            results.push({
                website: website,
                status: 'Error',
                error: error.message
            });
        }
    }
    res.json(results);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
});

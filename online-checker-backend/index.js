const express = require('express');
const cors = require('cors'); // Importar cors
const ping = require('ping');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Habilitar CORS
app.use(cors());

// Ruta al archivo weblist.json
const weblistPath = path.join(__dirname, 'data', 'weblist.json');

// Endpoint para verificar el estado de los sitios web
app.get('/api/check', async (req, res) => {
    // Leer la lista de sitios desde weblist.json
    let websites;
    try {
        const data = fs.readFileSync(weblistPath, 'utf8');
        websites = JSON.parse(data);
    } catch (error) {
        return res.status(500).json({ error: 'No se pudo leer la lista de sitios web.' });
    }

    // Realizar ping a cada sitio
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

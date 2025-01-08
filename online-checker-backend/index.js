const express = require('express');
const cors = require('cors');
const axios = require('axios');
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
    // Leer la lista de sitios desde el archivo JSON
    let websites;
    try {
        const data = fs.readFileSync(weblistPath, 'utf8');
        websites = JSON.parse(data);
    } catch (error) {
        return res.status(500).json({ error: 'No se pudo leer la lista de sitios web.' });
    }

    // Verificar cada sitio web usando axios
    const results = await Promise.all(
        websites.map(async (website) => {
            try {
                const start = Date.now();
                const response = await axios.get(`https://${website}`, { timeout: 5000 });
                const end = Date.now();
                return {
                    website,
                    status: 'Online',
                    responseTime: `${end - start} ms`,
                    statusCode: response.status,
                };
            } catch (error) {
                return {
                    website,
                    status: 'Offline',
                    responseTime: 'N/A',
                    error: error.code || error.message,
                };
            }
        })
    );

    res.json(results);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
});

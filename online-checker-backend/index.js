const express = require('express');
const cors = require('cors');
const axios = require('axios');
const axiosRetry = require('axios-retry').default;
const fs = require('fs');
const path = require('path');
const app = express();

// Render asigna un puerto dinámico mediante la variable PORT
const port = process.env.PORT || 5000;

// Habilitar CORS
app.use(cors());

// Configurar axios-retry para reintentos automáticos
axiosRetry(axios, {
  retries: 3, // Número de reintentos
  retryDelay: (retryCount) => {
    console.log(`Intento de reintento: ${retryCount}`);
    return retryCount * 1000; // Retraso entre reintentos (1s, 2s, 3s)
  },
  retryCondition: (error) => {
    // Reintentar para errores específicos (ECONNABORTED o códigos 5xx)
    return error.code === 'ECONNABORTED' || error.response?.status >= 500;
  },
});

// Ruta al archivo weblist.json
const weblistPath = path.join(__dirname, 'data', 'weblist.json');

// Endpoint para verificar el estado de los sitios web
app.get('/api/check', async (req, res) => {
  // Leer la lista de sitios desde el archivo JSON
  let websites;
  try {
    const data = fs.readFileSync(weblistPath, 'utf8'); // Lee el archivo JSON de forma síncrona
    websites = JSON.parse(data); // Parsea el contenido del archivo JSON
  } catch (error) {
    return res.status(500).json({ error: 'No se pudo leer la lista de sitios web.' });
  }

  // Verificar cada sitio web usando axios con reintentos automáticos
  const results = await Promise.all(
    websites.map(async (website) => {
      try {
        const start = Date.now(); // Registra el tiempo de inicio de la solicitud
        const response = await axios.get(`https://${website}`, { timeout: 10000 }); // Hace una solicitud GET al sitio web con un tiempo de espera de 10 segundos
        const end = Date.now(); // Registra el tiempo de finalización de la solicitud
        return {
          website, // Nombre del sitio web
          status: 'Online', // Estado del sitio web (en línea)
          responseTime: `${end - start} ms`, // Tiempo de respuesta de la solicitud
          statusCode: response.status, // Código de estado HTTP de la respuesta
        };
      } catch (error) {
        return {
          website, // Nombre del sitio web
          status: 'Offline', // Estado del sitio web (fuera de línea)
          responseTime: 'N/A', // Tiempo de respuesta no disponible
          error: error.code || error.message, // Código o mensaje de error
        };
      }
    })
  );

  res.json(results); // Devuelve los resultados en formato JSON
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});

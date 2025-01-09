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
        const start = Date.now();
        const response = await axios.get(`https://${website}`, { timeout: 10000 });
        const end = Date.now();
        return {
          website,
          status: 'Online',
          responseTime: `${end - start} ms`,
          statusCode: response.status,
        };
      } catch (error) {
        let errorMessage;
        let status = 'Offline'; // Por defecto, marcamos como "Offline"
    
        if (error.code === 'ENOTFOUND') {
            errorMessage = 'Dominio no encontrado (ENOTFOUND)';
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'Tiempo de espera agotado (Timeout)';
        } else if (error.code === 'ECONNREFUSED') {
            errorMessage = 'Conexión rechazada (ECONNREFUSED)';
        } else if (error.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
            errorMessage = 'Problema con el certificado SSL';
            status = 'Danger'; // Marcar como "Danger" si es un problema de SSL
        } else if (error.code === 'CERT_HAS_EXPIRED') {
            errorMessage = 'El certificado SSL ha caducado';
            status = 'Danger'; // Marcar como "Danger" si el certificado ha caducado
        } else {
            errorMessage = error.message || 'Error desconocido';
        }
    
        return {
            website,
            status,
            responseTime: status === 'Danger' ? 'N/A' : 'N/A', // Tiempo no disponible para errores
            statusCode: status === 'Danger' ? 'N/A' : 'N/A',   // Código no disponible para errores
            error: errorMessage,
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

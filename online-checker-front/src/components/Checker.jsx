import axios from 'axios';
import { useEffect, useState } from 'react';
import { Webs } from './Webs';
import { Loading } from './Loading';
import { Error } from './Error';

export const Checker = () => {
    const apiBaseUrl = import.meta.env.VITE_API_URL;

    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const maxRetries = 5; // Máximo de intentos permitidos

    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/check`);
                setWebsites(response.data);
                setLoading(false);
                setError(null); // Limpia el error si el intento tiene éxito
            } catch (err) {
                console.error('Error fetching data:', err);
                if (retryCount < maxRetries) {
                    console.log(`Reintentando... (${retryCount + 1}/${maxRetries})`);
                    setRetryCount((prevCount) => prevCount + 1);
                    setTimeout(fetchWebsites, 5000); // Reintenta después de 5 segundos
                } else {
                    setError('No se pudieron obtener los datos. Inténtalo de nuevo más tarde.');
                    setLoading(false);
                }
            }
        };

        fetchWebsites(); // Llamada inicial

        const interval = setInterval(fetchWebsites, 60000); // Actualiza cada 60 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [retryCount]);

    if (loading) return <Loading />;

    if (error) return <Error/>;

    return <Webs websites={websites} />;
};

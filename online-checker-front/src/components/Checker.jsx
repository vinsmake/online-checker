import axios from 'axios';
import { useEffect, useState } from 'react';
import { Webs } from './Webs';

export const Checker = () => {
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await axios.get('https://online-checker.onrender.com/api/check');
                //Local version
                // const response = await axios.get('http://localhost:5000/api/check');
                setWebsites(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('No se pudieron obtener los datos. Inténtalo de nuevo más tarde.');
                setLoading(false);
            }
        };
    
        fetchWebsites(); // Llamada inicial
    
        const interval = setInterval(fetchWebsites, 60000); // Actualiza cada 60 segundos
    
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);
    

    if (loading) return <div>Cargando...</div>;

    if (error) return <div className="text-red-500">{error}</div>;

    return <Webs websites={websites} />;
};

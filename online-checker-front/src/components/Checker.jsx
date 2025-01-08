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
                const response = await axios.get('http://localhost:5000/api/check');
                setWebsites(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('No se pudieron obtener los datos. Inténtalo de nuevo más tarde.');
                setLoading(false);
            }
        };

        fetchWebsites();
    }, []);

    if (loading) return <div>Cargando...</div>;

    if (error) return <div className="text-red-500">{error}</div>;

    return <Webs websites={websites} />;
};

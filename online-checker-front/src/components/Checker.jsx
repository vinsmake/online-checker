import axios from 'axios';
import { useEffect, useState } from 'react';
import { Webs } from './Webs';

export const Checker = () => {

    //States
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Llama al backend para obtener el estado de los sitios web
    useEffect(() => {
        axios.get('http://localhost:5000/api/check')
            .then(response => {
                setWebsites(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Webs websites={websites} />
    )
}
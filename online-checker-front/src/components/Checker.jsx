import axios from 'axios';
import { useEffect, useState } from 'react';
import { Webs } from './Webs';
import { Loading } from './Loading';
import { Error } from './Error';

export const Checker = () => {



    const apiBaseUrl = import.meta.env.VITE_API_URL;



    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ServerError, setServerError ] = useState(false);
    const [retryCount, setRetryCount] = useState(0);



    const maxRetries = 5; 
    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/check`);
                setWebsites(response.data);
                setLoading(false);
                setError(false);
                setServerError(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                if (retryCount < maxRetries) {
                    console.log(`Reintentando... (${retryCount + 1}/${maxRetries})`);
                    setRetryCount((prevCount) => prevCount + 1);
                    setTimeout(fetchWebsites, 5000);
                } else {
                    setError(true);
                    setLoading(false);
                }
            }
        };

        fetchWebsites(); 

        const interval = setInterval(fetchWebsites, 60000); 

        return () => clearInterval(interval);
    }, [retryCount]);

    if (loading) return <Loading />;

    if (error) return <Error/>;

    return <Webs websites={websites} />;
};

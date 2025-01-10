import axios from 'axios';
import { useEffect, useState } from 'react';
import { Webs } from './Webs';
import { Loading } from './Loading';
import { Error } from './Error';

export const Checker = () => {



    const apiBaseUrl = import.meta.env.VITE_API_URL;



    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorAlarm, setErrorAlarm] = useState(false);
    const [ServerErrorAlarm, setServerErrorAlarm ] = useState(false);
    const [retryCount, setRetryCount] = useState(0);



    const maxRetries = 5; 
    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/check`);
                setWebsites(response.data);
                setLoading(false);
                setErrorAlarm(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                if (retryCount < maxRetries) {
                    console.log(`Reintentando... (${retryCount + 1}/${maxRetries})`);
                    setRetryCount((prevCount) => prevCount + 1);
                    setTimeout(fetchWebsites, 10000);
                } else {
                    setErrorAlarm(true);
                    setLoading(false);
                }
            }
        };

        fetchWebsites(); 

        const interval = setInterval(fetchWebsites, 60000); 

        return () => clearInterval(interval);
    }, [retryCount]);

    if (loading) return <Loading />;

    if (errorAlarm) return <Error/>;

    return <Webs websites={websites} />;
};

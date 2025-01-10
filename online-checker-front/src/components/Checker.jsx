import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Webs } from './Webs';
import { Loading } from './Loading';
import { Error } from './Error';
import { ServerError } from './ServerError';

export const Checker = () => {
    const apiBaseUrl = import.meta.env.VITE_API_URL;

    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorAlarm, setErrorAlarm] = useState(false);
    const [errorServerAlarm, seterrorServerAlarm] = useState();
    const retryCountRef = useRef(0);


    const firstTry = 5;
    const secondTry = 10;

    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/check`);
                setWebsites(response.data);
                retryCountRef.current = 0; // Reiniciar el contador si la solicitud es exitosa
                setLoading(false);
                setErrorAlarm(false);
                seterrorServerAlarm(false);
                setTimeout(fetchWebsites, 30000);
                console.log('Data fetched');
            } catch (err) {
                console.error('Error fetching data:', err);


                if (retryCountRef.current <= firstTry) {
                    console.log(`Reintentando... (${retryCountRef.current + 1}/${firstTry})`);
                    setTimeout(fetchWebsites, 5000);
                    retryCountRef.current += 1;
                }

                else if (retryCountRef.current <= secondTry) {
                    setErrorAlarm(true);
                    setLoading(false);
                    console.log(`Reintentando... (${retryCountRef.current + 1}/${secondTry})`);
                    setTimeout(fetchWebsites, 5000);
                    retryCountRef.current += 1;
                } else {
                    seterrorServerAlarm(true);
                    setErrorAlarm(false);
                    console.log(`Reintentando... (${retryCountRef.current + 1} veces)`);
                    setTimeout(fetchWebsites, 5000);
                    retryCountRef.current += 1;
                }
            }
        };

        fetchWebsites();

        // const interval = setInterval(fetchWebsites, 60000);
        // return () => clearInterval(interval);

    }, []);

    if (loading) return <Loading />;
    if (errorAlarm) return <Error />;
    if (errorServerAlarm) return <ServerError />;

    return <Webs websites={websites} />;
};

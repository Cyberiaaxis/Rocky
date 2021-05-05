import { useEffect, useState } from "react";

const useFetchApi =  (url, options) => {
    const [status, setStatus] = useState('idle')
    const [hasError, setErrors] = useState(false)
    const [responseData, setResponseData] = useState(null)
    const baseUrl  = 'https://api.rockwood.test/api/'+ url;

    useEffect(async () => {
        try{
            setErrors(false);
            setStatus('fetching');
                   
            const responseData = await fetch(baseUrl, {
                method: options.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   data: options.data,
                })
            });
    
            const body = await res.json();
            setResponseData(body);
            setStatus('fetched');
            console.log("response data " + body.nodes.length + responseData);
        } catch(err){
            setErrors(true)
            setStatus('failed');
            console.log(err);
        }
    }, []);
}

export default useFetchApi;
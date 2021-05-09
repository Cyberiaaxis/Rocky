const useFetchApi = (url, options) => {
    const [status, setStatus] = useState('idle')
    const [hasError, setErrors] = useState(false)
    const [responseData, setResponseData] = useState(null)
    
    if (!url) throw new Error('URL required');

    try{
        setErrors(false)
        setStatus('fetching')
        const baseUrl  = 'https://api.rockwood.test/api/'+ url;
        const responseData = await fetch(url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               data: options.data,
            })
        });
        const body = await res.json();
        setResponseData(response);
        setStatus('fetched');
        console.log("response data " + body.nodes.length + responseData);
    } catch(err){
        console.log(err);
    }
}


export default useFetchApi;
















// // import ky from "ky";
// import { useCallback, useState } from "react";

const useFetchApi = () => {
    const [status, setStatus] = useState('idle')
    const [hasError, setErrors] = useState(false)
    const [responseData, setResponseData] = useState(null)

    const  api = async (url, options) => {
        console.log(options);
        // console.log(options.data);
        if (!url) throw new Error('URL required');

        setErrors(false)
        setStatus('fetching')
        const baseUrl  = 'https://api.rockwood.test/api/'+ url;
        console.log(baseUrl);
        await fetch(baseUrl,  options)
                .then((response) => {
                    console.log('options' + options);
                    // console.log(response);
                    setResponseData(response);
                    setStatus('fetched');
                    console.log("response data " + responseData);
                })
                .catch((error) => {
                    setStatus('failed');
                    console.log("failed the fetch api ");
                    setErrors(error.response);
                });
    };

    // Return 'isLoading' not the 'setIsLoading' function
    return { setResponseData, status, hasError, api };
};

export default useFetchApi;


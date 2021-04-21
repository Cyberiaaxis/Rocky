import ky from "ky";
import { useCallback,useState } from "react";

export default function useFetchApi() {
    const [status, setStatus] = useState('idle')
    const [hasError, setErrors] = useState(false)
    const [responseData, setResponseData] = useState(null)

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const SELECTION_METHOD = {
        post: ky.post(Url, options).json(),
        get: ky.get(Url, options).json(),
      };

    const api = useCallback(async (url, options = {}) => {

        if (!url) throw new Error('URL required');

        setLoading(true);

        const Url  = 'https://api.rockwood.test/api/'+url;

        if (options.method == "post") {
            await ky.post(Url, options)
                .then((res) => {
                    const result = res.data;
                    setResult(result);
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response) {
                        setError(error.response.data);
                    } else {
                        console.log("error is coming");
                    }
                });
        } 
        else {
            await ky.get(Url, options)
                .then((res) => {
                    const result = res.data;
                    setResult(result);
                })
                .catch((error) => {
                    if (error.response) {
                        setError(error.response.data);
                    } else {
                        console.log(error);
                    }
                });
        }
        
    }, []);

    // Return 'isLoading' not the 'setIsLoading' function
    return { result, loading, error, api };
};

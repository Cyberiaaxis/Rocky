import ky from 'ky';

const useFetchApi = async (url, params) => {
    console.log(params);
    const options = {
        method: params.method,
        body: JSON.stringify({
            json: params.data,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    const baseURL = 'https://api.rockwood.test/api/' + url;

    const jsonResponse = await ky(baseURL, options).json();

    return jsonResponse;
}

export default useFetchApi;
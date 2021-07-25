import ky from 'ky';

const Fetch = async (url, params) => {
    console.log(params.method);
//    const methodType =  (!params.method ? 'get' : params.method);
    const options = {
        method: params.method,
        body: JSON.stringify(
            params.data
        ),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    try {
        const baseURL = 'https://api.rockwood.test/api/' + url;
        const jsonResponse = await ky(baseURL, options).json();
        return jsonResponse;
    } catch (error) {
        return await error.response.json();
    }

}

export default Fetch;
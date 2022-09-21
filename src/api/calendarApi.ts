import axios from 'axios';



const URL = process.env.REACT_APP_API_URL;

console.log(process.env.REACT_APP_API_URL);


const calendarApi = axios.create({
    baseURL: URL,
})

// INTERCEPTORS
// add token to every request
calendarApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,      
        'x-token': localStorage.getItem('token') || '',
    }

    return config;
})


export default calendarApi;


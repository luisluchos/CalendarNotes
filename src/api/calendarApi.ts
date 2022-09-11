import axios from 'axios';



const URL = process.env.REACT_APP_API_URL;

console.log(process.env.REACT_APP_API_URL);


const calendarApi = axios.create({
    baseURL: URL,
})

//TODO INTERCEPTORS


export default calendarApi;


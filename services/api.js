import axios from 'axios';

// 48904723/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;
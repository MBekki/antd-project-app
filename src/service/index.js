import axios from 'axios';
import { baseURL } from '../utils/index';

const service = axios.create({ baseURL });

service.interceptors.request.use(async config => {
    let token = await localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

service.interceptors.response.use(
    response => {
        return response;
    },

    async error => {
        if (error.response.status === 403) {
            localStorage.clear();
            window.location.reload();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export { service };

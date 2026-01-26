import axios from 'axios';
import { store } from '../redux/store';


const API_URL = import.meta.env.VITE_API_URL || 'https://musicappbackend-ccph.onrender.com/';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const state = store.getState()
    const token = state.auth.token;

    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
})

export default api;
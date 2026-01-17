import axios from 'axios';
import { store } from '../redux/store';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const state = store.getState()
    console.log(state)
    const token = state.auth.token;
    console.log(token)

    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
})

export default api;
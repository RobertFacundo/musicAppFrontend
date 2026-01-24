import api from "../../../shared/config/axios";
import type { RegisterDTO, LoginDTO, User } from "../types";

export interface AuthResponse {
    user: User;
    token: string;
}

export type MeResponse = User;

export const authService = {
    register: (data: RegisterDTO): Promise<AuthResponse> =>
        api.post('/auth/register', data).then(res => res.data),

    login: (data: LoginDTO): Promise<AuthResponse> =>
        api.post('/auth/login', data).then(res => res.data),

    getMe: (): Promise<MeResponse> => api.get('/auth/me').then(res => res.data),
}   
export interface RegisterDTO {
    username: string,
    email: string,
    password: string,
}

export interface LoginDTO {
    email: string,
    password: string
}

export type UserRole = 'USER' | 'ADMIN';

export interface User {
    username: string;
    email: string;
    role: UserRole;
    isPremium: boolean;
    favorites: string[];
    history: string[];
    createdAt: string;
    updatedAt: string;
}
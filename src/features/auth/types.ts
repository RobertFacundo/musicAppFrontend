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
export type HistoryItemType = 'track' | 'artist' | 'album';

export interface HistoryItem {
    type: HistoryItemType;
    deezerId: string;
    title: string;
    image?: string;
    createdAt: string;
}

export interface User {
    username: string;
    email: string;
    role: UserRole;
    isPremium: boolean;
    favorites: string[];
    history: HistoryItem[];
    createdAt: string;
    updatedAt: string;
}
import api from "../../../shared/config/axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? 'http://localhost:3000'}/api/music`;

export type HomeArtist = {
    id: number;
    name: string;
    image: string;
};

export type HomeGenre = {
    id: number;
    name: string;
    image: string;
};

export type HomePlaylist = {
    id: number;
    title: string;
    image: string;
};

class HomeMusicService {
    async getHomeArtists(): Promise<HomeArtist[]> {
        const { data } = await api.get(`${API_BASE_URL}/home/artists`);
        return data;
    }

    async getHomeGenres(): Promise<HomeGenre[]> {
        const { data } = await api.get(`${API_BASE_URL}/home/genres`);
        return data;
    }

    async getHomePlaylists(): Promise<HomePlaylist[]> {
        const { data } = await api.get(`${API_BASE_URL}/home/playlists`);
        return data;
    }
}

export const homeMusicService = new HomeMusicService();


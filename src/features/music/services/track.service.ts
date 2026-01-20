import api from "../../../shared/config/axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? 'http://localhost:3000'}/api/music`;

export type Track = {
    id: number;
    title: string;
    duration: string;
    preview: string | null;
    artist: {
        id: number;
        name: string;
        picture_medium?: string;
    };
    album: {
        id: number;
        cover_medium: string;
        title:string
    };
    bpm?: number;
    release_date?: string;
};

class TrackService {
    async getTrackById(id: string): Promise<Track> {
        const { data } = await api.get(`${API_BASE_URL}/track/${id}`);
        return data;
    }
}

export const trackService = new TrackService();
import api from "../../../shared/config/axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? 'http://localhost:3000'}/api/music`;

export type Album = {
    id: number;
    title: string;
    cover_medium: string;
    artist: {
        id: number;
        name: string;
    };
    release_date: string;
    tracklist: string;
    tracks?: {
        data: any[];
    };
}

class AlbumService{
    async getAlbumById(id:string):Promise<Album>{
        const {data} = await api.get(`${API_BASE_URL}/album/${id}`);
        return data;
    }
}

export const albumService = new AlbumService()
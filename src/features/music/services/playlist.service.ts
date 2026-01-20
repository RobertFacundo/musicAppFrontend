import axios from "axios";;

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? 'http://localhost:3000'}/api/music`;

export type PlaylistTrack = {
    id: number;
    title: string;
    duration: number;
    preview: string | null;
    artist: {
        id: number;
        name: string;
    };
    album: {
        id: number;
        title: string;
        cover_medium: string;
    };
};

export type Playlist = {
    id: number;
    title: string;
    description: string;
    picture_medium: string;
    nb_tracks: number;
    fans: number;
    tracks: {
        data: PlaylistTrack[];
    }
}

class PlaylistService {
    async getPlaylistById(id: string): Promise<Playlist> {
        const { data } = await axios.get(`${API_BASE_URL}/playlist/${id}`);
        return data;
    }
}

export const playlistService = new PlaylistService();
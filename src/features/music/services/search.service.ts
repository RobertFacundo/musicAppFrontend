import api from "../../../shared/config/axios";

const API_BASE_URL =
    `${import.meta.env.VITE_API_URL ?? "http://localhost:3000"}/api/music`;

export type SearchArtist = {
    id: number;
    name: string;
    image: string;
};

export type SearchTrack = {
    id: number;
    title: string;
    artist: string;
    image: string;
};

export type SearchAlbum = {
    id: number;
    title: string;
    artist: string;
    image: string;
};

export type SearchPlaylist = {
    id: number;
    title: string;
    image: string;
};

export type SearchResult = {
    artists: SearchArtist[];
    tracks: SearchTrack[];
    albums: SearchAlbum[];
    playlists: SearchPlaylist[];
};

class SearchService {
    async search(query: string): Promise<SearchResult> {
        const { data } = await api.get(
            `${API_BASE_URL}/search`,
            {
                params: { q: query }
            }
        );

        return data;
    }
}

export const searchService = new SearchService();
import api from "../../../shared/config/axios";

export type Artist = {
    id: number;
    name: string;
    image: string;
    fans: number;
    albums: number;
};

export type Track = {
    id: number;
    title: string;
    duration: number;
    preview: string | null;
    album: {
        id: number;
        title: string;
        image: string;
    };
};

export type ArtistResponse = {
    artist: Artist;
    topTracks: Track[];
};

class ArtistService {
    async getArtistById(id: string): Promise<ArtistResponse> {
        const { data } = await api.get(`/api/music/artist/${id}`);
        return data;
    }
}

export const artistService = new ArtistService();
import api from "../../../shared/config/axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? 'http://localhost:3000'}/api/music`;

export type GenreArtist = {
    id: number;
    name: string;
    picture_medium: string;
};

export type GenreArtistsResponse = {
    data: GenreArtist[];
};

class GenreService {
    async getArtistsByGenre(genreId: string): Promise<GenreArtistsResponse> {
        const { data } = await api.get(`${API_BASE_URL}/${genreId}/artists`);
        return data;
    }
}

export const genreService = new GenreService;
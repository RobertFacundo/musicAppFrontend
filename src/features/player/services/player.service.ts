import api from '../../../shared/config/axios';

const API_BASE_URL =
    `${import.meta.env.VITE_API_URL ?? "http://localhost:3000"}/api/player`;

export type AddHistoryPayload = {
    type: 'track' | 'artist' | 'album';
    deezerId: string;
    title: string;
    image?: string;
};

class PlayerService {
    async toggleFavorite(trackId: string) {
        const { data } = await api.post(`${API_BASE_URL}/favorite`, {
            trackId,
        });
        console.log(data, 'log del togglefavorite')

        return data;
    }

    async addHistory(payload: AddHistoryPayload) {
        const { data } = await api.post(`${API_BASE_URL}/history`, payload);
        return data;
    }
}

export const playerService = new PlayerService();
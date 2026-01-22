import { useMutation } from '@tanstack/react-query';
import { playerService, type AddHistoryPayload } from '../services/player.service';

export const useToggleFavoriteMutation = () => {
    return useMutation({
        mutationFn: (trackId: string) =>
            playerService.toggleFavorite(trackId),
    });
}

export const useAddHistoryMutation = () => {
    return useMutation({
        mutationFn: (payload: AddHistoryPayload) =>
            playerService.addHistory(payload)
    })
}

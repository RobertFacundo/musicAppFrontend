import { setUser } from "../../auth/store/authSlice";
import { useToggleFavoriteMutation, useAddHistoryMutation } from "./player.queries";
import type { AddHistoryPayload } from "../services/player.service";
import { useAppDispatch } from "../../../shared/redux/hooks";

export const usePlayerActions = () => {
    const dispatch = useAppDispatch();

    const toggleFavoriteMutation = useToggleFavoriteMutation();
    const addHistoryMutation = useAddHistoryMutation();

    const toggleFavorite = async (trackId: string) => {
        const user = await toggleFavoriteMutation.mutateAsync(trackId);
        dispatch(setUser(user));
    };

    const addHistory = async (payload: AddHistoryPayload) => {
        const user = await addHistoryMutation.mutateAsync(payload);
        dispatch(setUser(user));
    };

    return {
        toggleFavorite,
        addHistory,

        isTogglingFavorite: toggleFavoriteMutation.isPending,
        isAddingHistory: addHistoryMutation.isPending,
    }
}
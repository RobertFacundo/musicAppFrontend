import { useQuery } from "@tanstack/react-query";
import { trackService } from "../../music/services/track.service";
import type { TrackUI } from "../../../shared/types/track-ui";
import { mapTrackToUI } from "../../../shared/adapters/track.adapter";

export const useFavoriteTracks = (favoriteIds: string[]) => {
    return useQuery<TrackUI[]>({
        queryKey: ['favorite-tracks', favoriteIds],
        queryFn: async () => {
            if (favoriteIds.length === 0) {
                return [];
            }

            const tracks = await Promise.all(
                favoriteIds.map(id => trackService.getTrackById(id))
            );
            return tracks.map(mapTrackToUI);
        },
        enabled: favoriteIds.length > 0,
        staleTime: 1000 * 60 * 10,
    });
}
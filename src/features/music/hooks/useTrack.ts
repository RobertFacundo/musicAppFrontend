import { useQuery } from "@tanstack/react-query";
import { trackService } from "../services/track.service";

export const useTrack = (trackId: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['track', trackId],
        queryFn: () => trackService.getTrackById(trackId),
        enabled: !!trackId,
        staleTime: 1000 * 60 * 10,
    });

    return {
        track: data,
        isLoading,
        error
    }
}
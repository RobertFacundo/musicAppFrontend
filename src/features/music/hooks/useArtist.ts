import { useQuery } from "@tanstack/react-query";
import { artistService } from "../services/artist.service";

export const useArtist = (artistId?: string) => {
    return useQuery({
        queryKey: ['artist', artistId],
        queryFn: () => artistService.getArtistById(artistId!),
        enabled: !!artistId,
        staleTime: 1000 * 60 * 5,
    })
}
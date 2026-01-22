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

export const useArtistAlbums = (artistId?: string) => {
    return useQuery({
        queryKey: ['artist-albums', artistId],
        queryFn: () => artistService.getArtistAlbums(artistId!),
        enabled: !!artistId,
        staleTime: 1000 * 60 * 10,
    });
};
import { useQuery } from "@tanstack/react-query";
import { genreService } from "../services/genre.service";
import type { GenreArtistsResponse } from "../services/genre.service";

export const useGenre = (genreId?: string) => {
    const {
        data,
        isLoading,
        error,
    } = useQuery<GenreArtistsResponse>({
        queryKey: ['genre-artists', genreId],
        queryFn: () => genreService.getArtistsByGenre(genreId!),
        enabled: !!genreId,
        staleTime: 1000 * 60 * 10,
    });
    return {
        artists: data?.data ?? [],
        isLoading,
        error
    }
}
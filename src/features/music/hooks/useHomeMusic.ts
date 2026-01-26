import { useQuery } from "@tanstack/react-query";
import { homeMusicService } from "../services/homeMusic.service";
import type { HomeArtist, HomeGenre, HomePlaylist } from "../services/homeMusic.service";

export const useHomeMusic = () => {
    const {
        data: artists,
        isLoading: isLoadingArtists,
        error: artistsError,
    } = useQuery<HomeArtist[]>({
        queryKey: ['home-artists'],
        queryFn: () => homeMusicService.getHomeArtists(),
        staleTime: 1000 * 60 * 5,
    });

    const {
        data: genres,
        isLoading: isLoadingGenres,
        error: genresError,
    } = useQuery<HomeGenre[]>({
        queryKey: ['home-genres'],
        queryFn: () => homeMusicService.getHomeGenres(),
        staleTime: 1000 * 60 * 10,
    });

    const {
        data: playlists,
        isLoading: isLoadingPlaylists,
        error: playlistsError,
    } = useQuery<HomePlaylist[]>({
        queryKey: ['home-playlists'],
        queryFn: () => homeMusicService.getHomePlaylists(),
        staleTime: 1000 * 60 * 10,
    })

    const isLoading = isLoadingArtists || isLoadingGenres || isLoadingPlaylists;
    const error = playlistsError ?? artistsError ?? genresError

    return {
        artists: artists ?? [],
        genres: genres ?? [],
        playlists: playlists ?? [],
        isLoading,
        error,
    }
}
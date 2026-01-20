import { useQuery } from "@tanstack/react-query";
import { albumService, type Album } from "../services/album.service";
import type { TrackUI } from "../../../shared/types/track-ui";

type AlbumWithTrackUI = Omit<Album, "tracks"> & {
    tracks?: TrackUI[];
}

const mapTrackToUI = (track: any): TrackUI => ({
    id: track.id,
    title: track.title,
    duration: track.duration,
    preview: track.preview,
    album: {
        title: track.album.title,
        image: track.album.cover_medium,
        id: track.album.id
    },
    artist: {
        id: track.artist.id,
        name: track.artist.name,
    }
})

export const useAlbum = (albumId: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['album', albumId],
        queryFn: () => albumService.getAlbumById(albumId),
        enabled: !!albumId,
        staleTime: 1000 * 60 * 10,
    });

    const albumWithTracks: AlbumWithTrackUI | undefined = data
        ? {
            ...data,
            tracks: data.tracks?.data?.map(mapTrackToUI),
        }
        : undefined

    return {
        album: albumWithTracks,
        isLoading,
        error,
    }
}
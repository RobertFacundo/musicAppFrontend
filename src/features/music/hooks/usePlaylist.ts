import { useQuery } from "@tanstack/react-query";
import { playlistService } from "../services/playlist.service";

export const usePlaylist = (id?: string) => {
    return useQuery({
        queryKey: ['playlist', id],
        queryFn: () => playlistService.getPlaylistById(id!),
        enabled: !!id,
    })
}
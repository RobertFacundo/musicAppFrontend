import type { Track } from "../../features/music/services/track.service";
import type { TrackUI } from "../types/track-ui";

export const mapTrackToUI = (track: Track): TrackUI => ({
    id: track.id,
    title: track.title,
    duration: Number(track.duration), 
    preview: track.preview ?? null,
    album: {
        id: track.album.id,
        title: track.album.title,
        image: track.album.cover_medium, // 🔥 ACA estaba el problema visual
    },
    artist: track.artist
        ? {
            id: track.artist.id,
            name: track.artist.name,
        }
        : undefined,
});
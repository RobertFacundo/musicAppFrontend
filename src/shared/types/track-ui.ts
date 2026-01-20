export type TrackUI = {
    id: number;
    title: string;
    duration: number;
    preview: string | null;
    album: {
        title: string;
        image: string;
        id: number;
    };
    artist?: {
        id: number;
        name: string;
    }
}
import type { Track } from "../services/artist.service";
import TrackRow from "./TrackRow";

type Props = {
    tracks: Track[];
};

const TopTracksList = ({ tracks }: Props) => {
    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold dark:text-white">Top Tracks</h2>
            <div className="space-y-2">
                {tracks.map((track, index) => (
                    <TrackRow key={track.id} track={track} index={index + 1} />
                ))}
            </div>
        </section>
    );
};

export default TopTracksList;
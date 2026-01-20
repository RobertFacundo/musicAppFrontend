import { fadeContainer } from "../../../shared/animations/motionVariants";
import type { TrackUI } from "../../../shared/types/track-ui";
import TrackRow from "./TrackRow";
import { motion } from 'framer-motion'

type Props = {
    tracks: TrackUI[];
    title: string;
};

const TopTracksList = ({ tracks, title = 'Tracks' }: Props) => {
    return (
        <motion.section
            variants={fadeContainer}
            initial='hidden'
            animate='show'
        >
            <h2 className="mb-4 text-xl font-semibold dark:text-white">{title}</h2>
            <motion.div variants={fadeContainer} className="space-y-2">
                {tracks.map((track, index) => (
                    <TrackRow key={track.id} track={track} index={index + 1} />
                ))}
            </motion.div>
        </motion.section>
    );
};

export default TopTracksList;
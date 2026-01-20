import { motion } from 'framer-motion';
import { fadeItemUp } from "../../../shared/animations/motionVariants";
import type { TrackUI } from "../../../shared/types/track-ui";
import { useNavigate } from 'react-router-dom';

type Props = {
    track: TrackUI;
    index: number;
}

const TrackRow = ({ track, index }: Props) => {
    const navigate = useNavigate();
    console.log(track,'log del trackrow')
    return (
        <motion.div
            variants={fadeItemUp}
            className="flex items-center gap-4 rounded-lg p-3 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40 cursor-pointer"
            onClick={() => navigate(`/track/${track.id}`)}
        >
            <span className="w-6 text-sm text-neutral-500">{index}</span>
            <img src={track.album.image} alt={track.album.title} className="h-15 w-15 rounded object-cover" />
            <div className="flex-1">
                <p className="text-xl font-medium dark:text-white">{track.title}</p>
                <p className="text-l text-neutral-500 cursor-pointer" >{track.album.title}</p>
            </div>
            {track.preview && (
                <audio controls src={track.preview} className="h-8 w-220" />
            )}
        </motion.div>
    )
};

export default TrackRow;
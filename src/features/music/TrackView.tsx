import { useNavigate, useParams } from "react-router-dom";
import { useTrack } from "./hooks/useTrack";
import { motion } from 'framer-motion'
import { fadeContainer, fadeItemUp } from "../../shared/animations/motionVariants";

const TrackView = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    if (!id) {
        return <p className="p-6 text-red-500">Track ID is missing</p>
    }

    const { track, isLoading, error } = useTrack(id);

    if (isLoading) return <p className="p-6 text-neutral-500">Loading track...</p>
    if (error || !track) return <p className="p-6 text-red-500">Failed to load track</p>

    console.log(track, 'log !!')


    return (
        <div className="h-full flex items-center justify-center p-6">
            <motion.div variants={fadeContainer} initial='hidden' animate='show' className="max-w-md w-full bg-white/40 dark:bg-neutral-900/40 rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <motion.div variants={fadeItemUp}>
                    <motion.img variants={fadeItemUp} src={track.album.cover_medium} alt={track.title} className="w-85 h-85 rounded-xl object-cover mb-4" />
                    <motion.h1 variants={fadeItemUp} className="text-2xl font-bold dark:text-white text-center">{track.title}</motion.h1>
                    <motion.p variants={fadeItemUp} className="text-neutral-500 mt-2 cursor-pointer" onClick={() => navigate(`/artist/${track.artist.id}`)}>Artist: {track.artist.name}</motion.p>
                    <motion.p variants={fadeItemUp} className="text-neutral-500 mt-1 cursor-pointer" onClick={()=> navigate(`/album/${track.album.id}`)}>Album: <span className="text-neutral-900 dark:text-white">{track.album.title}</span></motion.p>
                    {track.preview && (
                        <motion.audio variants={fadeItemUp} className="mt-4 w-full" controls src={track.preview} />
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
};

export default TrackView;
import { useNavigate, useParams } from "react-router-dom";
import { useTrack } from "./hooks/useTrack";
import { motion } from 'framer-motion'
import { fadeContainer, fadeItemUp } from "../../shared/animations/motionVariants";
import { useAppSelector } from "../../shared/redux/hooks";
import { usePlayerActions } from "../player/hooks/usePlayerActions";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useEffect } from "react";
import { Loader } from "../../shared/components/Loader/Loader";

const TrackView = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    const user = useAppSelector(state => state.auth.user);
    const { toggleFavorite, addHistory } = usePlayerActions();
    
    if (!id) {
        return <p className="p-6 text-red-500">Track ID is missing</p>
    }

    const { track, isLoading, error } = useTrack(id);


     useEffect(() => {
        if (!user || !track) return;

        addHistory({
            type: 'track',
            deezerId: track.id.toString(),
            title: track.title,
            image: track.album.cover_medium,
        })
    }, [track?.id]);


    if (isLoading) return <Loader/>
    if (error || !track) return <p className="p-6 text-red-500">Failed to load track</p>

    const isFavorite = !!user && user.favorites.includes(track.id.toString());
    console.log(isFavorite, 'log del trackview')

    return (
        <div className="h-full flex items-center justify-center p-6">
            <motion.div variants={fadeContainer} initial='hidden' animate='show' className="max-w-md w-full bg-white/40 dark:bg-neutral-900/40 rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <motion.div variants={fadeItemUp}>
                    <motion.img variants={fadeItemUp} src={track.album.cover_medium} alt={track.title} className="w-85 h-85 rounded-xl object-cover mb-4" />
                    <motion.h1 variants={fadeItemUp} className="text-2xl font-bold dark:text-white text-center">
                        {track.title}
                    </motion.h1>
                    <motion.button
                        whileTap={{ scale: 1.5 }}
                        className="cursor-pointer"
                        variants={fadeItemUp}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(track.id.toString());
                        }}
                    >
                        {isFavorite ? (
                            <FaHeart className='text-red-500 hover:text-red-600' />
                        ) : (
                            <FaRegHeart className='text-neutral-400 hover:text-red-400' />
                        )}
                    </motion.button>
                    <motion.p variants={fadeItemUp} className="text-neutral-500 mt-2 cursor-pointer" onClick={() => navigate(`/artist/${track.artist.id}`)}>Artist: {track.artist.name}</motion.p>
                    <motion.p variants={fadeItemUp} data-testid='album-click' className="text-neutral-500 mt-1 cursor-pointer" onClick={() => navigate(`/album/${track.album.id}`)}>Album: <span className="text-neutral-900 dark:text-white">{track.album.title}</span></motion.p>
                    {track.preview && (
                        <motion.audio data-testid="audio-preview" variants={fadeItemUp} className="mt-4 w-full" controls src={track.preview} />
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
};

export default TrackView;
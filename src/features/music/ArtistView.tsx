import ArtistHeader from "./components/ArtistHeader";
import TopTracksList from "./components/TopTrackList";
import { useParams } from "react-router-dom";
import { useArtist } from "./hooks/useArtist";
import { motion } from 'framer-motion';
import { fadeContainer } from "../../shared/animations/motionVariants";

const ArtistView = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useArtist(id);

    if (isLoading) {
        return <p className="p-6 text-neutral-500">Loading artist...</p>
    }
    if (error || !data) {
        return <p className="p-6 text-red-500">Failed to load artist...</p>
    }

    return (
        <motion.div
            className="p-6"
            variants={fadeContainer}
            initial='hidden'
            animate='show'
        >
            <ArtistHeader artist={data.artist} />
            <TopTracksList tracks={data.topTracks} />
        </motion.div>
    )
};

export default ArtistView;
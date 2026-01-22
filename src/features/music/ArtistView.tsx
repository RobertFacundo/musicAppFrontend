import { useEffect } from "react";
import ArtistHeader from "./components/ArtistHeader";
import TopTracksList from "./components/TopTrackList";
import { useParams } from "react-router-dom";
import { useArtist, useArtistAlbums } from "./hooks/useArtist";
import { motion } from 'framer-motion';
import { fadeContainer } from "../../shared/animations/motionVariants";
import { usePlayerActions } from "../player/hooks/usePlayerActions";
import { useAppSelector } from "../../shared/redux/hooks";
import AlbumCards from "./components/AlbumCards";

const ArtistView = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useArtist(id);
    const { data: albums } = useArtistAlbums(id);

    const { addHistory } = usePlayerActions();
    const user = useAppSelector(state => state.auth.user);

    useEffect(() => {
        if (!user || !data?.artist) return;

        addHistory({
            type: 'artist',
            deezerId: data.artist.id.toString(),
            title: data.artist.name,
            image: data.artist.image,
        })
    }, [data?.artist?.id])

    console.log(albums,'log del artist view')

    if (isLoading) {
        return <p className="p-6 text-neutral-500">Loading artist...</p>
    }
    if (error || !data) {
        return <p className="p-6 text-red-500">Failed to load artist...</p>
    }

    return (
        <motion.div
            className="p-6 h-full flex flex-col overflow-y-auto"
            variants={fadeContainer}
            initial='hidden'
            animate='show'
        >
            <ArtistHeader artist={data.artist} />
            <TopTracksList tracks={data.topTracks} title="Top tracks" />
            {albums && <AlbumCards albums={albums} />}
        </motion.div>
    )
};

export default ArtistView;
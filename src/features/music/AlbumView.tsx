import TopTracksList from "./components/TopTrackList";
import { useAlbum } from "./hooks/useAlbum";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeContainer, fadeItemUp } from "../../shared/animations/motionVariants";
import { usePlayerActions } from "../player/hooks/usePlayerActions";
import { useAppSelector } from "../../shared/redux/hooks";
import { useEffect } from "react";
import { Loader } from "../../shared/components/Loader/Loader";

const AlbumView = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { addHistory } = usePlayerActions();

    const user = useAppSelector(state => state.auth.user);

    if (!id) return <p>No Album</p>

    const { album, isLoading, error } = useAlbum(id);

    useEffect(()=>{
        if(!user || !album)return;

        addHistory({
            type:'album',
            deezerId:album.id.toString(),
            title:album.title,
            image:album.cover_medium,
        })
    }, [album?.id])

    if (isLoading) return <Loader/>
    if (error) return <p>Error</p>
    if (!album) return <p>No Album found</p>

    return (
        <motion.div variants={fadeContainer} initial='hidden' animate='show' className="p-6 h-full flex flex-col overflow-y-auto">
            <motion.div variants={fadeContainer} className="flex flex-col items-center mb-6">
                <motion.img variants={fadeItemUp} src={album.cover_medium} alt={album.title} className="w-64 h-64 rounded-xl object-cover mb-4" />
                <motion.h1 variants={fadeItemUp} className="text-3xl font-bold">{album.title}</motion.h1>
                <motion.p variants={fadeItemUp} className="text-neutral-500 mt-2 cursor-pointer" onClick={() => navigate(`/artist/${album.artist.id}`)}>{album.artist.name}</motion.p>
                <motion.p variants={fadeItemUp} className="text-neutral-500 mt-1">Release:{album.release_date}</motion.p>
            </motion.div>
            <TopTracksList tracks={album.tracks ?? []} title="Tracks" />
        </motion.div>
    )
};

export default AlbumView;
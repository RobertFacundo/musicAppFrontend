import { useParams } from 'react-router-dom';
import { usePlaylist } from './hooks/usePlaylist';
import TopTracksList from './components/TopTrackList';
import { motion } from 'framer-motion';
import { fadeContainer, fadeItemUp } from '../../shared/animations/motionVariants';
import { Loader } from '../../shared/components/Loader/Loader';
import { useTranslation } from 'react-i18next';

const PlaylistView = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = usePlaylist(id);
    const { t } = useTranslation();

    if (isLoading) {
        return <Loader />
    }

    if (error || !data) {
        return <p className='p-6 text-red-500'>{t('home.error')}</p>
    }

    const tracksUI = data.tracks.data.map(track => ({
        id: track.id,
        title: track.title,
        duration: track.duration,
        preview: track.preview,
        album: {
            title: track.album.title,
            image: track.album.cover_medium,
            id: track.album.id
        }
    }))

    return (
        <motion.div
            variants={fadeContainer}
            initial='hidden'
            animate='show'
            className='p-6 h-full flex flex-col'
        >
            <motion.div variants={fadeItemUp} className='flex items-center gap-6 shrink-0'>
                <img src={data.picture_medium} alt={data.title} className='h-48 w-48 rounded-xl object-cover' />
                <div>
                    <h1 className='text-4l font-bold dark:text-white'>{data.title}</h1>
                    <p className='mt-2 text-neutral-400'>{data.nb_tracks} tracks - {data.fans} {t('artists.followers')}</p>
                </div>
            </motion.div>
            <motion.div variants={fadeItemUp} className='mt-5 flex-1 overflow-y-auto'>
                <TopTracksList title='Tracks' tracks={tracksUI} />
            </motion.div>
        </motion.div>
    )
};

export default PlaylistView;
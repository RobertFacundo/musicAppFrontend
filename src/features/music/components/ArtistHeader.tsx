import type { Artist } from "../services/artist.service";
import { motion } from 'framer-motion';
import { fadeItemUp } from "../../../shared/animations/motionVariants";

type Props = {
    artist: Artist;
};

const ArtistHeader = ({ artist }: Props) => {
    return (
        <motion.div variants={fadeItemUp} className="flex items-center justify-around gap-6 shrink-0">
            <img src={artist.image} alt={artist.name} className="h-80 w-80 rounded-xl object-cover" />
            <div>
                <h1 className="text-4xl font-bold dark:text-white">{artist.name}</h1>
                <p className="mt-2 text-2xl dark:text-white">
                    {artist.fans.toLocaleString()} followers - {artist.albums} albums
                </p>
            </div>
        </motion.div>
    )
};

export default ArtistHeader;
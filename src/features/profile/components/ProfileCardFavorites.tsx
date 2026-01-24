import type { User } from "../../auth/types";
import { useFavoriteTracks } from "../hooks/useFavoriteTracks";
import TrackRow from "../../music/components/TrackRow";
import { motion } from 'framer-motion'
import { fadeContainer } from "../../../shared/animations/motionVariants";

interface Props {
    favorites: User['favorites'];
}

export const ProfileCardFavorites = ({ favorites }: Props) => {
    const { data: tracks, isLoading } = useFavoriteTracks(favorites);

    if (isLoading) {
        return <p className="text-center">Loading favorites...</p>
    }

    return (
        <div className="p-4 rounded-xl shadow-md bg-white/70 dark:bg-neutral-900/70">
            <h3 className="font-bold mb-2 text-center">Favorites</h3>

            {favorites.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    No favorites songs yet
                </p>
            ) : (
                <motion.ul variants={fadeContainer} initial='hidden' animate='show' className="space-y-2 h-100 overflow-y-auto">
                    {tracks?.map((track, index) => (
                        <TrackRow
                            key={track.id}
                            track={track}
                            index={index + 1}
                        />
                    ))}
                </motion.ul>
            )}
        </div>
    );
};
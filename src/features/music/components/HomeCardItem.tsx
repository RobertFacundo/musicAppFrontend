import { motion } from 'framer-motion'
import { fadeItemUp } from '../../../shared/animations/motionVariants';

type HomeCardItemProps = {
    id: number | string;
    title: string;
    image: string;
    onClick?: (id: number | string) => void;
};

const HomeCardItem = ({
    id,
    title,
    image,
    onClick,
}: HomeCardItemProps) => {
    return (
        <motion.div
            variants={fadeItemUp}
            className="group
            cursor-pointer rounded-xl bg-neutral-100 dark:bg-neutral-900/40 p-4 transition-colors duration-500 hover:bg-neutral-200 dark:hover:bg-neutral-900/70"
            onClick={() => onClick?.(id)}
        >
            <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="
                h-full w-full object-cover transition-transform duration-300 ease-out
                group-hover:scale-105
                "
                    loading="lazy"
                />
            </div>
            <p className="mt-3 text-2xl font-medium truncate dark:text-white">
                {title}
            </p>
        </motion.div>
    )
}

export default HomeCardItem;
import { motion } from 'framer-motion';
import { fadeItemUp } from '../../../shared/animations/motionVariants';
import type { User } from '../../auth/types';

interface Props {
    item: User['history'][number];
    onClick: (item: User['history'][number]) => void;
}

export const HistoryRow = ({ item, onClick }: Props) => {
    return (
        <motion.li
            variants={fadeItemUp}
            className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40"
            onClick={() => onClick(item)}
        >
            {item.image && (
                <img src={item.image} alt={item.title} className='w-16 h-16 rounded object-cover' />
            )}

            <div className='flex flex-col'>
                <p className='font-medium text-xl dark:text-white'>
                    {item.title}
                </p>
                <span className='text-l text-neutral-500 capitalize'>
                    {item.type}
                </span>
            </div>
        </motion.li>
    )
}
import HomeCardItem from "./HomeCardItem";
import { motion } from 'framer-motion'
import { fadeContainer } from "../../../shared/animations/motionVariants";

type ItemBase = {
    id: number | string;
    title: string;
    image: string;
};

type HomeCardProps<T extends ItemBase> = {
    title: string;
    items: T[];
    onItemClick?: (id: number | string) => void;
};

const HomeCard = <T extends ItemBase>({
    title,
    items,
    onItemClick,
}: HomeCardProps<T>) => {
    if (!items.length) return null;

    return (
        <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">
                {title}
            </h2>
            <motion.div
                variants={fadeContainer}
                initial='hidden'
                animate='show'
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
                {items.map((item) => (
                    <HomeCardItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        onClick={onItemClick}
                    />
                ))}
            </motion.div>
        </section>
    )
};

export default HomeCard;
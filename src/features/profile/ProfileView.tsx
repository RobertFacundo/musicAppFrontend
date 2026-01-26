import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileCardFavorites } from "./components/ProfileCardFavorites";
import { ProfileSettings } from "./components/ProfileSettings";
import { ProfileCardHistory } from "./components/ProfileCardHistory";
import { useAppSelector } from "../../shared/redux/hooks";
import { motion } from 'framer-motion'
import { fadeContainer, fadeItemUp } from '../../shared/animations/motionVariants';

const ProfileView = () => {
    const user = useAppSelector((state) => state.auth.user)
    if (!user) return <p>No user loaded</p>

    return (
        <motion.div
            className="p-6 space-y-6 dark:text-white h-full flex flex-col overflow-y-auto"
            variants={fadeContainer}
            initial='hidden'
            animate='show'
        >
            <motion.div variants={fadeItemUp}>
                <ProfileHeader user={user} />
            </motion.div>
            <div className="flex flex-col space-y-12">
                <motion.div className="flex items-center" variants={fadeItemUp}>
                    <ProfileSettings />
                </motion.div>

                <div className="flex flex-col h-full space-y-3">
                    <motion.div variants={fadeItemUp}>
                        <ProfileCardFavorites favorites={user.favorites} />
                    </motion.div>
                    <motion.div variants={fadeItemUp}>
                        <ProfileCardHistory history={user.history} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
};

export default ProfileView;
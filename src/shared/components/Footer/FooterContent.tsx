import FooterLinks from "./FooterLinks";
import FooterProfile from "./FooterProfile";
import FooterSocial from "./FooterSocial";
import { motion } from 'framer-motion';
import { fadeItemUp } from "../../animations/motionVariants";

const FooterContent = () => {
    return (
        <div className=" 
                grid
                grid-cols-1
                md:grid-cols-[2fr_1fr_1fr]
                gap-12
                w-full
                text-center md:text-left
                dark:text-white
                "
        >
            <motion.div variants={fadeItemUp}>
                <FooterProfile />
            </motion.div>
            <motion.div variants={fadeItemUp}>
                <FooterLinks />
            </motion.div>
            <motion.div variants={fadeItemUp}>
                <FooterSocial />
            </motion.div>
        </div>
    );
};

export default FooterContent;
import FooterContent from "./FooterContent";
import FooterImage from "./FooterImage";
import { motion } from "framer-motion";
import { fadeContainer } from "../../animations/motionVariants";

const Footer = () => {

    return (
        <motion.footer
            variants={fadeContainer}
            initial="hidden"
            whileInView='show'
            viewport={{ margin: "-100px" }}
            className="
            relative
            w-full
            bg-white/40 dark:bg-neutral-900/40
            flex items-center justify-center
            z-10
             min-h-[calc(100vh-var(--header-h))]
        "
        >
            <div
                className="
                relative z-10
                h-full
                max-w-7xl mx-auto
                grid grid-cols-1 lg:grid-cols-3
                gap-12
                px-4 sm:px lg:px-0
                "
            >
                <div className="lg:col-span-2 flex items-center h-full">
                    <FooterContent />
                </div>
            </div>
            <div className="hidden lg:block">
                <FooterImage />
            </div>
        </motion.footer>
    )
};

export default Footer;
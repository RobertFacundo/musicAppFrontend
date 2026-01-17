import { footerProjects } from "../../config/footerProjects";
import { motion } from 'framer-motion'
import { fadeItemUp } from "../../animations/motionVariants";

const FooterLinks = () => {

    return (
        <nav className="mt-12">
            <h4 className="text-lg font-medium mb-4">
                <motion.span variants={fadeItemUp}>
                    links
                </motion.span>
            </h4>
            <ul className="space-y-2 text-sm">
                {footerProjects.map(project => (
                    <motion.li key={project.url} variants={fadeItemUp}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 dark:text-neutral-500 hover:underline"
                        >
                            {project.label}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
};

export default FooterLinks;
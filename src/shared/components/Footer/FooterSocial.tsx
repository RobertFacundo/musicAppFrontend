import { motion } from "framer-motion";
import { footerSocialLinks } from "../../config/footerSocial";
import { fadeItemUp } from "../../animations/motionVariants";

const FooterSocial = () => {

  return (
    <div className="mt-12 text-center">
      <motion.h4 variants={fadeItemUp} className="text-lg font-medium mb-4">
        Lorem ipsum dolor sit amet.
      </motion.h4>
      <div className="flex gap-4 justify-center md:justify-start">
        {footerSocialLinks.map(({ name, href, icon: Icon }) => (
          <motion.a
            key={name}
            variants={fadeItemUp}
            href={href}
            target={name !== "Email" ? "_blank" : undefined}
            rel={name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={name}
            className="p-2 rounded-md hover:text-primary text-neutral-400 hover:text-white hover:bg-neutral-800/40 transition"
          >
            <Icon className="w-10 h-10" />
          </motion.a>
        ))}
      </div>
    </div>
  )
};

export default FooterSocial;
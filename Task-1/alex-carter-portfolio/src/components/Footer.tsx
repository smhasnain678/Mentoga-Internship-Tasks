import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-secondary-foreground/80">
            © {currentYear} Alex Carter. All rights reserved.
          </p>
          <p className="font-body text-sm text-secondary-foreground/60">
            Designed & Built with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description, centered = false, light = false }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
    <p className={`mb-3 text-xs font-extrabold tracking-[0.2em] ${light ? "text-blue-300" : "text-labsi-blue"}`}>{eyebrow}</p>
    <h2 className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    {description && <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
  </motion.div>
);

export default SectionHeading;

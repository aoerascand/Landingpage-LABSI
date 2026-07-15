import { motion } from "framer-motion";
import { opportunity } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

const Opportunity = () => <section id="about" className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-end"><SectionHeading eyebrow="WHY NOW" title={opportunity.title} description={opportunity.description} /><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">{opportunity.stats.map((stat) => <div key={stat.value} className="px-3 sm:px-5"><p className="font-display text-2xl font-bold text-labsi-blue sm:text-3xl">{stat.value}</p><p className="mt-2 text-xs font-medium leading-5 text-slate-500">{stat.label}</p></div>)}</motion.div></div></section>;
export default Opportunity;

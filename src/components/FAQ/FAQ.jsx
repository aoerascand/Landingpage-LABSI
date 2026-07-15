import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { faqs } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

const FAQ = () => { const [active, setActive] = useState(0); return <section id="faq" className="bg-slate-50 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="FAQ" title="Questions, answered." description="Temukan jawaban atas beberapa pertanyaan umum dari orang tua dan calon siswa." /><div className="space-y-3">{faqs.map((faq, index) => { const isOpen = active === index; return <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white"><button type="button" className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-sm font-bold text-navy" onClick={() => setActive(isOpen ? -1 : index)} aria-expanded={isOpen}>{faq.question}<span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-50 text-labsi-blue">{isOpen ? <HiMinus /> : <HiPlus />}</span></button><AnimatePresence>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p></motion.div>}</AnimatePresence></article>})}</div></div></section>; };
export default FAQ;

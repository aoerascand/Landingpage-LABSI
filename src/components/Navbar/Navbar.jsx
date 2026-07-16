import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navLinks } from "../../data/siteData";

const linkToId = (label) => `#${label.toLowerCase()}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (hash) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 text-white backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
      <img src="/images/logo labsi putih.png" alt="LABSI Padel School" className="h-15 w-auto" />
      <div className="hidden items-center gap-7 lg:flex">{navLinks.map((item) => <a key={item} href={linkToId(item)} className="text-sm font-medium text-slate-300 transition hover:text-white">{item}</a>)}</div>
      <a href="#registration" className="hidden rounded-full bg-labsi-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-400 lg:inline-flex">Daftar Sekarang</a>
      <button type="button" className="grid size-10 place-items-center rounded-xl border border-white/15 text-xl lg:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <HiXMark /> : <HiBars3BottomRight />}</button>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"><div className="flex flex-col gap-1 px-5 py-4">{navLinks.map((item) => <a key={item} href={linkToId(item)} onClick={(e) => { e.preventDefault(); setOpen(false); scrollToSection(linkToId(item)); }} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">{item}</a>)}<a href="#registration" onClick={(e) => { e.preventDefault(); setOpen(false); scrollToSection("#registration"); }} className="mt-2 rounded-xl bg-labsi-orange px-4 py-3 text-center text-sm font-bold">Daftar Sekarang</a></div></motion.div>}</AnimatePresence>
  </header>;
};
export default Navbar;

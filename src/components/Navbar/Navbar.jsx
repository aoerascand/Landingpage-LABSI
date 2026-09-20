import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navLinks } from "../../data/siteData";

const linkToId = (label) => {
  const normalized = label.toLowerCase();
  if (normalized === "about") return "#vision";
  if (normalized === "contact") return "#admin-contact";
  return `#${normalized}`;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (hash) => {
    const section = document.querySelector(hash);
    if (section) {
      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", hash);
      });
    }
  };

  const handleMobileLinkClick = (hash) => {
    setOpen(false);
    setTimeout(() => scrollToSection(hash), 100);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.reload();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-white/10 bg-navy/95 backdrop-blur-xl" : "border-transparent bg-navy/40 backdrop-blur-md"
      } text-white`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="/" onClick={handleLogoClick} aria-label="Refresh halaman" className="shrink-0 cursor-pointer">
          <img src="/images/logo labsi putih.png" alt="LABSI Padel School" className="h-11 w-auto sm:h-12" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={linkToId(item)}
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-[#C6E85A] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#registration"
          className="relative hidden px-6 py-2.5 text-sm font-bold text-navy transition hover:brightness-105 lg:inline-block"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
        >
          <span className="absolute inset-0 -z-10 bg-labsi-orange" style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }} />
          Daftar Sekarang
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center border border-white/15 text-xl lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiXMark /> : <HiBars3BottomRight />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={linkToId(item)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(linkToId(item));
                  }}
                  className="border-l-2 border-transparent px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#C6E85A] hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
              <a
                href="#registration"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLinkClick("#registration");
                }}
                className="mt-2 bg-labsi-orange px-4 py-3 text-center text-sm font-bold text-navy"
                style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)" }}
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
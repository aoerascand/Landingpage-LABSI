import { useState } from "react";
import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { academyNetwork } from "../../data/networkData";
import SectionHeading from "../ui/SectionHeading";

const statusStyles = {
  "NOW OPEN": "bg-[#C6E85A] text-navy",
  "COMING SOON": "bg-labsi-orange text-white",
  "OPENING 2026": "bg-labsi-blue text-white",
};

const venueFilters = [
  { value: "NOW OPEN", label: "Sudah berjalan" },
  { value: "ALL", label: "Semua venue" },
  { value: "COMING SOON", label: "Segera hadir" },
];

const NetworkSection = ({ setSelectedBranch }) => {
  const [activeFilter, setActiveFilter] = useState("NOW OPEN");
  const visibleVenues = activeFilter === "ALL"
    ? academyNetwork
    : academyNetwork.filter((academy) => academy.status === activeFilter);

  return (
    <section id="venue" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          centered
          eyebrow="Venue LABSI Padel School"
          title="Temukan venue latihan LABSI."
          description="Cek venue LABSI yang sudah berjalan dan pilih lokasi latihan yang paling dekat dengan Anda."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-6 border-b border-slate-200" role="tablist" aria-label="Filter venue">
          {venueFilters.map((filter) => {
            const count = filter.value === "ALL"
              ? academyNetwork.length
              : academyNetwork.filter((academy) => academy.status === filter.value).length;
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative pb-4 text-sm font-bold transition ${
                  isActive ? "text-navy" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {filter.label} ({count})
                <span
                  className={`absolute inset-x-0 -bottom-px h-0.5 bg-labsi-orange transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleVenues.map((academy, index) => {
            const isNowOpen = academy.status === "NOW OPEN";
            return (
              <motion.article
                key={academy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 88%)" }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={academy.image}
                    alt={academy.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-0 top-3 px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      statusStyles[academy.status] || "bg-slate-500 text-white"
                    }`}
                    style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
                  >
                    {academy.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col pt-5">
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <LuMapPin className="text-labsi-blue" />
                    {academy.location}
                  </p>
                  <h3 className="mt-2.5 font-display text-base font-bold leading-tight text-navy transition-colors duration-200 group-hover:text-labsi-blue">
                    {academy.name}
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      {academy.badge}
                    </span>
                    <a
                      href={isNowOpen ? "#registration" : undefined}
                      onClick={(e) => {
                        if (isNowOpen) {
                          e.preventDefault();
                          setSelectedBranch(academy.name);
                          const element = document.getElementById("registration");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      className={`px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                        isNowOpen
                          ? "cursor-pointer bg-labsi-orange text-white hover:bg-orange-400"
                          : "cursor-not-allowed bg-slate-100 text-slate-400"
                      }`}
                      aria-disabled={!isNowOpen}
                    >
                      {academy.buttonText}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* B2B CTA - dark panel, matching the Hero/Navbar/Form system */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden bg-navy p-8 text-center text-white sm:p-12"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%)" }}
        >
          <svg className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-10" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="networkMesh" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <path d="M0 17H34M17 0V34" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#networkMesh)" />
          </svg>

          <h3 className="relative font-display text-2xl font-bold sm:text-3xl">
            Want to Bring LABSI to Your Venue?
          </h3>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Kami membuka kesempatan bagi venue padel di seluruh Indonesia untuk bergabung menjadi bagian dari
            jaringan LABSI Padel School melalui skema Join Operation maupun Franchise.
          </p>
          <div className="relative mt-8">
            <a
              href="#admin-contact"
              className="group relative inline-block px-8 py-3.5 text-sm font-bold text-navy"
              style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
            >
              <span
                className="absolute inset-0 -z-10 bg-[#C6E85A] transition group-hover:brightness-95"
                style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
              />
              Become Our Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkSection;
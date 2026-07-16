import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { academyNetwork } from "../../data/networkData";
import SectionHeading from "../ui/SectionHeading";

const statusColors = {
  "NOW OPEN": "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  "COMING SOON": "bg-orange-500/10 text-orange-600 border border-orange-500/20",
  "OPENING 2026": "bg-blue-500/10 text-blue-600 border border-blue-500/20",
};

const NetworkSection = ({ setSelectedBranch }) => {
  return (
    <section id="network" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          centered
          eyebrow="GROWING TOGETHER ACROSS INDONESIA"
          title="Bangun masa depan padel bersama LABSI."
          description="LABSI Padel School hadir sebagai academy partner yang bekerja sama dengan berbagai venue melalui sistem Join Operation maupun Franchise untuk menghadirkan standar pembinaan yang profesional, kurikulum yang terstruktur, dan komunitas yang terus berkembang."
        />

        {/* Responsive Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academyNetwork.map((academy, index) => {
            const isNowOpen = academy.status === "NOW OPEN";
            return (
              <motion.article
                key={academy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={academy.image}
                    alt={academy.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                      statusColors[academy.status] || "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {academy.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-5">
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <LuMapPin className="text-labsi-blue" />
                    {academy.location}
                  </p>
                  <h3 className="mt-2.5 font-display text-base font-bold text-navy leading-tight group-hover:text-labsi-blue transition-colors duration-200">
                    {academy.name}
                  </h3>
                  
                  {/* Badge & Action Container */}
                  <div className="mt-auto pt-6 flex items-center justify-between gap-2 border-t border-slate-100">
                    <span className="rounded-lg bg-blue-50/50 border border-blue-100 px-2 py-0.5 text-[9px] font-bold text-labsi-blue uppercase tracking-wide">
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
                      className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                        isNowOpen
                          ? "bg-labsi-orange text-white hover:bg-orange-400 cursor-pointer"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
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

        {/* B2B CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md sm:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(18,105,232,0.05),transparent_40%)]" />
          <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            Want to Bring LABSI to Your Venue?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Kami membuka kesempatan bagi venue padel di seluruh Indonesia untuk bergabung menjadi bagian dari jaringan LABSI Padel School melalui skema Join Operation maupun Franchise.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 shadow-md"
            >
              Become Our Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkSection;

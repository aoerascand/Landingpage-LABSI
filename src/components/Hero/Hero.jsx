import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { heroContent } from "../../data/siteData";

const stats = [
  { label: "Usia peserta", value: "5-25 th" },
  { label: "Coach", value: "Bersertifikat" },
  { label: "Trial pertama", value: "Gratis" },
];

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
    video.play();
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy pt-32 text-white sm:pt-40">
      {/* diamond-mesh motif, echoing the court's glass wall - positioned off to one side, not centered decoration */}
      <svg
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-[560px] w-[560px] opacity-[0.14] sm:opacity-20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <pattern id="mesh" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 17H34M17 0V34" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#mesh)" />
      </svg>

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl lg:pr-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-slate-200">
            <span className="size-1.5 rounded-full bg-[#C6E85A]" />
            Usia 5-25 tahun - Trial class gratis
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
            {heroContent.title.map((line, index) => (
              <span key={line} className={index === 1 ? "text-blue-300" : ""}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#registration"
              className="group relative px-7 py-3.5 text-sm font-bold text-navy"
              style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
            >
              <span
                className="absolute inset-0 bg-labsi-orange transition group-hover:bg-orange-400"
                style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
              />
              <span className="relative">Trial Sekarang</span>
            </a>
            <a
              href="#vision"
              className="text-sm font-bold text-white/80 underline decoration-white/30 underline-offset-8 transition hover:text-white hover:decoration-white"
            >
              Learn More
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-slate-400">{stat.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="pointer-events-none absolute inset-y-24 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div
            className="relative aspect-[4/4.6] overflow-hidden border border-white/15 shadow-2xl sm:aspect-[5/4]"
            style={{ clipPath: "polygon(0 0, 94% 0, 100% 8%, 100% 100%, 0 100%)" }}
          >
            <video
              ref={videoRef}
              className="size-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={heroContent.poster}
              aria-label="Video opening LABSI Padel School"
            >
              <source src={heroContent.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <p className="text-xs font-semibold text-blue-200">The next rally starts here</p>
                <p className="mt-1 font-display text-xl font-semibold">A better system. A stronger court.</p>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-xl text-navy transition hover:scale-105"
                aria-label={isMuted ? "Nyalakan suara video" : "Matikan suara video"}
              >
                {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
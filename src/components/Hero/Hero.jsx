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

  const toggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = !video.muted;
      setIsMuted(video.muted);

      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy pt-32 text-white sm:pt-40"
    >
      {/* Background mesh */}
      <svg
        className="pointer-events-none absolute -right-24 top-10 z-0 h-[560px] w-[560px] opacity-[0.14] sm:opacity-20"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="mesh"
            width="34"
            height="34"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path d="M0 17H34M17 0V34" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="400" height="400" fill="url(#mesh)" />
      </svg>

      <div className="relative z-10 mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-8 lg:pb-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 max-w-xl lg:pr-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-slate-200">
            <span className="size-1.5 rounded-full bg-[#C6E85A]" />
            Usia 5-25 tahun - Trial class gratis
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
            {heroContent.title.map((line, index) => (
              <span
                key={line}
                className={index === 1 ? "text-blue-300" : ""}
              >
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
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
              }}
            >
              <span
                className="absolute inset-0 bg-labsi-orange transition group-hover:bg-orange-400"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
                }}
              />

              <span className="relative z-10">
                Trial Sekarang
              </span>
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
                <dt className="text-xs text-slate-400">
                  {stat.label}
                </dt>

                <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* CENTER DIVIDER */}
        <div className="pointer-events-none absolute inset-y-24 left-1/2 z-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />

        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-20 mx-auto w-full max-w-2xl"
        >
          <div
            className="relative aspect-[4/4.6] overflow-hidden border border-white/15 bg-black shadow-2xl sm:aspect-[5/4]"
            style={{
              clipPath:
                "polygon(0 0, 94% 0, 100% 8%, 100% 100%, 0 100%)",
            }}
          >
            {/* VIDEO LAYER */}
            <video
              ref={videoRef}
              className="absolute inset-0 z-0 h-full w-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              poster={heroContent.poster}
              aria-label="Video opening LABSI Padel School"
            >
              <source
                src={heroContent.video}
                type="video/mp4"
              />
            </video>

            {/* DARK GRADIENT OVERLAY */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent"
              aria-hidden="true"
            />

            {/* VIDEO CONTENT */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-blue-200">
                  The next rally starts here
                </p>

                <p className="mt-1 font-display text-lg font-semibold sm:text-xl">
                  A better system. A stronger court.
                </p>
              </div>

              {/* SOUND BUTTON */}
              <button
                type="button"
                onClick={toggleSound}
                className="pointer-events-auto grid size-12 shrink-0 place-items-center rounded-full bg-white text-xl text-navy shadow-lg transition hover:scale-105 hover:bg-slate-100"
                aria-label={
                  isMuted
                    ? "Nyalakan suara video"
                    : "Matikan suara video"
                }
              >
                {isMuted ? (
                  <HiSpeakerXMark />
                ) : (
                  <HiSpeakerWave />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


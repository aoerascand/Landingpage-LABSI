import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { heroContent } from "../../data/siteData";

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

  return <section id="home" className="relative isolate overflow-hidden bg-navy pt-32 text-white sm:pt-40">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_12%,rgba(18,105,232,.42),transparent_24%),radial-gradient(circle_at_14%_92%,rgba(255,122,26,.14),transparent_26%)]" />
  <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:pb-20">
    <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-xl">
      <p className="mb-5 text-xs font-extrabold tracking-[.22em] text-blue-300">{heroContent.eyebrow}</p>
      <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">{heroContent.title.map((line, index) => <span key={line} className={index === 1 ? "text-blue-300" : ""}>{line}<br /></span>)}</h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">{heroContent.description}</p>
      <div className="mt-9 flex flex-wrap gap-3"><a href="#registration" className="rounded-full bg-labsi-orange px-6 py-3.5 text-sm font-bold shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-400">Daftar Sekarang</a><a href="#about" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10">Learn More</a></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-2xl"><div className="absolute -inset-3 rounded-[2rem] bg-blue-500/20 blur-3xl" /><div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl sm:aspect-[5/4]"><video ref={videoRef} className="size-full object-cover" autoPlay loop muted={isMuted} playsInline poster={heroContent.poster} aria-label="Video opening LABSI Padel School"><source src={heroContent.video} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6"><div><p className="text-xs font-bold tracking-[.16em] text-blue-200">THE NEXT RALLY STARTS HERE</p><p className="mt-1 font-display text-xl font-semibold">A better system. A stronger court.</p></div><button type="button" onClick={toggleSound} className="grid size-12 place-items-center rounded-full bg-white text-xl text-navy transition hover:scale-105" aria-label={isMuted ? "Nyalakan suara video" : "Matikan suara video"}>{isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}</button></div></div></motion.div>
  </div>
</section>;
};
export default Hero;

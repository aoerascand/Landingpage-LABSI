import { whyLabsi } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

const WhyLabsi = () => <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading centered eyebrow="THE LABSI DIFFERENCE" title="Mengapa Memilih LABSI Padel School?" description="Kami menyediakan ekosistem belajar padel junior terbaik yang aman, menyenangkan, dan berorientasi pada perkembangan karakter serta prestasi anak." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{whyLabsi.map(({ title, text, icon: Icon }, index) => <article key={title} className={`rounded-2xl border p-5 ${index === 0 ? "border-labsi-blue bg-blue-50 lg:col-span-2" : "border-slate-200 bg-white"}`}><Icon className="text-2xl text-labsi-blue" /><h3 className="mt-6 font-display font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}</div></div></section>;
export default WhyLabsi;

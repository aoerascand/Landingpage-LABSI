import { benefits } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

const Benefits = () => <section className="bg-slate-50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><SectionHeading eyebrow="ACADEMY BENEFITS" title="Tumbuh maksimal di dalam & luar lapangan." description="Program latihan di LABSI dirancang untuk memberikan manfaat positif jangka panjang bagi kesehatan fisik, ketahanan mental, dan interaksi sosial anak Anda." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{benefits.map(({ title, icon: Icon }) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><Icon className="text-2xl text-labsi-orange" /><p className="mt-5 text-sm font-bold leading-5 text-navy">{title}</p></div>)}</div></div></div></section>;
export default Benefits;

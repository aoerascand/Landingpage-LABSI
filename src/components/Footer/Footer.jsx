import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { contactInfo } from "../../data/siteData";
const Footer = () => <footer id="contact" className="bg-[#051326] py-10 text-slate-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between"><div>
    <img src="/images/logo labsi putih.png" alt="LABSI Padel School" className="h-15 w-auto" />
<p className="mt-3 max-w-xs text-sm leading-6">Building Future Players. Growing Stronger Communities.</p>
</div><div className="flex gap-3"><a href="https://instagram.com" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/10 text-white hover:bg-white/10">
<FaInstagram /></a><a href="https://linkedin.com" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-white/10 text-white hover:bg-white/10">
<FaLinkedinIn /></a></div><p className="text-xs">© {new Date().getFullYear()} LABSI Padel School. {contactInfo.address}</p></div>
</footer>;
export default Footer;

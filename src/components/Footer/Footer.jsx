import { FaEnvelope, FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { contactInfo } from "../../data/siteData";

const Footer = () => (
  <footer id="contact" className="border-t border-white/10 bg-[#04101f] py-14 text-slate-300">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm md:flex-row md:items-start md:justify-between md:p-8">
        <div className="max-w-md">
          <img
            src="/images/logo labsi putih.png"
            alt="LABSI Padel School"
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Building Future Players. Growing Stronger Communities.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200 transition hover:border-labsi-blue hover:bg-labsi-blue/10"
            >
              <FaEnvelope className="text-labsi-blue" />
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200 transition hover:border-labsi-blue hover:bg-labsi-blue/10"
            >
              <FaPhone className="text-labsi-blue" />
              {contactInfo.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <FaLocationDot className="text-labsi-blue" />
            {contactInfo.address}
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/labsipadelclub/"
              aria-label="Instagram LABSI"
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-labsi-blue"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} LABSI Padel School. All rights reserved.</p>
        <p>Let&apos;s grow the next generation of players.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

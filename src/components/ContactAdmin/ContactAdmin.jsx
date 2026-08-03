import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { contactInfo } from "../../data/siteData";

const ContactAdmin = () => (
  <section id="admin-contact" className="bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-navy shadow-[0_20px_50px_rgba(8,27,51,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-labsi-blue">
              Kontak Admin
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">
              Siap membantu pendaftaran Anda.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Hubungi tim administrasi untuk informasi jadwal, trial class, dan kebutuhan pendaftaran.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-labsi-blue/40 hover:shadow-md"
          >
            <div className="grid size-11 place-items-center rounded-2xl bg-labsi-blue/10 text-labsi-blue">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Email</p>
              <p className="mt-1 text-sm text-slate-600">{contactInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-labsi-blue/40 hover:shadow-md"
          >
            <div className="grid size-11 place-items-center rounded-2xl bg-labsi-blue/10 text-labsi-blue">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">No. Telepon / WhatsApp</p>
              <p className="mt-1 text-sm text-slate-600">{contactInfo.phone}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactAdmin;

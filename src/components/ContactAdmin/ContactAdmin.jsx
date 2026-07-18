import { contactInfo } from "../../data/siteData";

const ContactAdmin = () => (
  <section id="admin-contact" className="bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-navy">
        <h3 className="font-display text-2xl font-bold">Kontak Admin</h3>
        <p className="mt-3 text-sm text-slate-600">Hubungi tim administrasi untuk pendaftaran dan informasi jadwal.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium text-sm">Email</p>
            <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-labsi-blue">{contactInfo.email}</a>
          </div>

          <div>
            <p className="font-medium text-sm">No. Telepon / WhatsApp</p>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="mt-1 block text-labsi-blue">{contactInfo.phone}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactAdmin;

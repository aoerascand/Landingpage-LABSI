import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { registrationFields } from "../../data/siteData";
import { submitRegistration } from "../../services/registrationService";
import SectionHeading from "../ui/SectionHeading";

const ContactForm = ({ selectedBranch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (selectedBranch) {
      setValue("branch", selectedBranch);
    }
  }, [selectedBranch, setValue]);

  const onSubmit = async (data) => {
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        registration: data,
        submittedAt: new Date().toISOString(),
      };

      const result = await submitRegistration(payload);

      // Track event for Google Analytics if available
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "labsi_registration_submitted",
          registration: data,
        });
      }

      setStatus({
        type: "success",
        message:
          result?.message ||
          "Pendaftaran berhasil dikirim. Tim LABSI akan segera menghubungi Anda.",
      });
      reset();
    } catch (error) {
      console.error("Registration submission failed:", error);
      setStatus({
        type: "error",
        message:
          error?.message ||
          "Maaf, terjadi kendala saat mengirim pendaftaran. Silakan coba kembali.",
      });
    }
  };

  return (
    <section id="registration" className="relative overflow-hidden bg-[linear-gradient(135deg,#081b33_0%,#0f2d50_45%,#154c7b_100%)] py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.22),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionHeading
            light
            eyebrow="STUDENT REGISTRATION"
            title="Mulai perjalanan padel anak Anda."
            description="Isi formulir berikut untuk mendaftarkan calon pemain LABSI Padel School."
          />

          <div className="mt-10 rounded-[24px] border border-white/10 bg-white/10 p-6 text-sm leading-7 text-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <div className="inline-flex rounded-full border border-labsi-orange/40 bg-labsi-orange/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              Informasi penting
            </div>
            <p className="mt-4 font-semibold text-white">
              Silakan isi asal sekolah calon pemain untuk membantu tim LABSI memproses pendaftaran.
            </p>
            <p className="mt-3 text-slate-300">Sesi latihan yang tersedia:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-slate-200">
              <li>Sesi Pagi: 08.00 - 10.00</li>
              <li>Sesi Siang: 10.00 - 12.00</li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[32px] bg-white p-6 text-navy shadow-[0_24px_80px_rgba(8,27,51,0.25)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {registrationFields.map((field) => (
              <label
                key={field.name}
                className={field.fullWidth ? "sm:col-span-2" : ""}
              >
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                  {field.label}
                </span>
                {field.type === "select" ? (
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-labsi-blue focus:ring-2 focus:ring-blue-100"
                    {...register(field.name, {
                      required: `${field.label} wajib diisi`,
                    })}
                  >
                    <option value="">Pilih Cabang Latihan</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    min={field.min}
                    max={field.max}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-labsi-blue focus:ring-2 focus:ring-blue-100"
                    {...register(field.name, {
                      required: `${field.label} wajib diisi`,
                    })}
                  />
                )}
                {errors[field.name] && (
                  <span className="mt-1 block text-xs text-red-600">
                    {errors[field.name].message}
                  </span>
                )}
              </label>
            ))}

            <label className="flex items-start gap-3 text-xs leading-5 text-slate-600 sm:col-span-2">
              <input
                type="checkbox"
                className="mt-0.5 size-4 accent-labsi-blue"
                {...register("consent", { required: true })}
              />
              <span>
                Saya setuju data pendaftaran ini digunakan LABSI Padel School untuk
                proses administrasi dan komunikasi.
              </span>
            </label>

            {errors.consent && (
              <span className="-mt-3 text-xs text-red-600 sm:col-span-2">
                Persetujuan wajib diberikan.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-2xl bg-labsi-orange px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400 disabled:opacity-60"
          >
            {isSubmitting ? "Mengunggah dan mengirim..." : "Kirim Pendaftaran"}
          </button>

          {status.message && (
            <p
              role="status"
              className={`mt-4 rounded-2xl px-4 py-3 text-center text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

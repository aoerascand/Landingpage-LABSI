import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { registrationFields } from "../../data/siteData";
import { submitRegistration } from "../../services/registrationService";
import SectionHeading from "../ui/SectionHeading";

const sessions = [
  { label: "Sesi Pagi", time: "08.00 - 10.00" },
  { label: "Sesi Siang", time: "10.00 - 12.00" },
];

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
    <section
      id="registration"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#081b33_0%,#0f2d50_45%,#154c7b_100%)] py-20 text-white sm:py-28"
    >
      {/* mesh motif carried over from Hero/Navbar for a consistent system */}
      <svg
        className="pointer-events-none absolute -left-20 -top-20 -z-0 h-[420px] w-[420px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <pattern id="formMesh" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 17H34M17 0V34" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#formMesh)" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionHeading
            light
            eyebrow="Formulir pendaftaran"
            title="Mulai perjalanan padel anak Anda."
            description="Isi formulir berikut untuk mendaftarkan calon pemain LABSI Padel School."
          />

          <div
            className="relative mt-10 border border-white/10 bg-white/[0.06] p-6 text-sm leading-7 text-slate-200"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
          >
            <div className="flex items-center gap-2 text-white">
              <span className="size-2 shrink-0 rounded-full bg-[#C6E85A]" />
              <p className="font-semibold">
                Cantumkan asal sekolah calon pemain agar tim LABSI bisa memproses pendaftaran lebih cepat.
              </p>
            </div>

            <p className="mt-5 text-xs font-semibold text-slate-400">Sesi latihan tersedia</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {sessions.map((session) => (
                <div key={session.label} className="border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-400">{session.label}</p>
                  <p className="mt-1 font-display text-base font-semibold text-white">{session.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative border border-white/10 bg-white p-6 text-navy shadow-[0_24px_80px_rgba(8,27,51,0.3)] sm:p-9"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)" }}
        >
          <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-labsi-orange">
                LABSI Padel School
              </span>
              <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                Registration Form
               </h2>
              <p className="mt-2 text-sm text-slate-500">
                Lengkapi data di bawah ini untuk melakukan pendaftaran.
              </p>
            </div>
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {registrationFields.map((field) => (
              <label key={field.name} className={field.fullWidth ? "sm:col-span-2" : ""}>
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">{field.label}</span>
                {field.type === "select" ? (
                  <select
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 text-sm text-navy outline-none transition focus:border-labsi-orange"
                    {...register(field.name, {
                      required: `${field.label} wajib diisi`,
                    })}
                  >
                    <option value="">Pilih cabang latihan</option>
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
                    className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 text-sm text-navy outline-none transition focus:border-labsi-orange"
                    {...register(field.name, {
                      required: `${field.label} wajib diisi`,
                    })}
                  />
                )}
                {errors[field.name] && (
                  <span className="mt-1 block text-xs text-red-600">{errors[field.name].message}</span>
                )}
              </label>
            ))}

            <label className="flex items-start gap-3 pt-2 text-xs leading-5 text-slate-600 sm:col-span-2">
              <input
                type="checkbox"
                className="mt-0.5 size-4 accent-labsi-orange"
                {...register("consent", { required: true })}
              />
              <span>
                Saya setuju data pendaftaran ini digunakan LABSI Padel School untuk proses administrasi dan
                komunikasi.
              </span>
            </label>

            {errors.consent && (
              <span className="-mt-3 text-xs text-red-600 sm:col-span-2">Persetujuan wajib diberikan.</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative mt-8 block w-full px-5 py-3.5 text-center text-sm font-bold text-white disabled:opacity-60"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 4% 100%)" }}
          >
            <span
              className="absolute inset-0 -z-10 bg-labsi-orange transition group-hover:bg-orange-400"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 4% 100%)" }}
            />
            {isSubmitting ? "Mengunggah dan mengirim..." : "Kirim Pendaftaran"}
          </button>

          {status.message && (
            <p
              role="status"
              className={`mt-4 px-4 py-3 text-center text-sm ${
                status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
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
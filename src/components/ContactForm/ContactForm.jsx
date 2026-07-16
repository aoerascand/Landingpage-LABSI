import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { registrationFields } from "../../data/siteData";
import { submitRegistration } from "../../services/registrationService";
import { MAX_KK_FILE_SIZE } from "../../utils/constants";
import SectionHeading from "../ui/SectionHeading";

const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("File Kartu Keluarga tidak dapat dibaca."));
    reader.readAsDataURL(file);
  });

const ContactForm = ({ selectedBranch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm();

  const [status, setStatus] = useState({ type: "", message: "" });
  const selectedFile = watch("familyCard")?.[0];

  useEffect(() => {
    if (selectedBranch) {
      setValue("branch", selectedBranch);
    }
  }, [selectedBranch, setValue]);

  const onSubmit = async (data) => {
    setStatus({ type: "", message: "" });

    try {
      const { familyCard, ...registration } = data;
      const file = familyCard?.[0];

      if (!file) {
        throw new Error("Fotokopi Kartu Keluarga wajib diunggah.");
      }

      const familyCardBase64 = await fileToBase64(file);

      const payload = {
        registration,
        familyCard: {
          name: file.name,
          type: file.type,
          size: file.size,
          base64: familyCardBase64,
        },
        submittedAt: new Date().toISOString(),
      };

      const result = await submitRegistration(payload);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "labsi_registration_submitted",
        registration: {
          ...registration,
          familyCardName: file.name,
        },
      });

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
    <section id="registration" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionHeading
            light
            eyebrow="STUDENT REGISTRATION"
            title="Mulai perjalanan padel anak Anda."
            description="Isi formulir berikut untuk mendaftarkan calon pemain LABSI Padel School."
          />

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
            <p className="font-bold text-white">Dokumen yang diperlukan</p>
            <p className="mt-2">
              Unggah fotokopi Kartu Keluarga dalam format PDF, JPG, atau PNG dengan
              ukuran maksimal 5 MB.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl bg-white p-6 text-navy sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {registrationFields.map((field) => (
              <label
                key={field.name}
                className={field.fullWidth ? "sm:col-span-2" : ""}
              >
                <span className="mb-2 block text-xs font-bold text-slate-600">
                  {field.label}
                </span>
                {field.type === "select" ? (
                  <select
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-labsi-blue focus:ring-2 focus:ring-blue-100 bg-white"
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
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-labsi-blue focus:ring-2 focus:ring-blue-100"
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

            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold text-slate-600">
                Fotokopi Kartu Keluarga{" "}
                <span className="font-medium">(maks. 5 MB)</span>
              </span>

              <span className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-500 transition hover:border-labsi-blue">
                <HiDocumentArrowUp className="shrink-0 text-2xl text-labsi-blue" />
                <span className="min-w-0 truncate">
                  {selectedFile
                    ? `${selectedFile.name} (${(
                        selectedFile.size /
                        1024 /
                        1024
                      ).toFixed(2)} MB)`
                    : "Pilih file PDF, JPG, atau PNG"}
                </span>
                <input
                  type="file"
                  accept=".pdf,image/jpeg,image/png"
                  className="sr-only"
                  {...register("familyCard", {
                    required: "Fotokopi Kartu Keluarga wajib diunggah",
                    validate: {
                      size: (files) =>
                        !files?.[0] ||
                        files[0].size <= MAX_KK_FILE_SIZE ||
                        "Ukuran file maksimal 5 MB",
                      type: (files) =>
                        !files?.[0] ||
                        ALLOWED_FILE_TYPES.includes(files[0].type) ||
                        "File harus berformat PDF, JPG, atau PNG",
                    },
                  })}
                />
              </span>

              {errors.familyCard && (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.familyCard.message}
                </span>
              )}
            </label>

            <label className="sm:col-span-2 flex items-start gap-3 text-xs leading-5 text-slate-600">
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
            className="mt-6 w-full rounded-xl bg-labsi-orange px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-400 disabled:opacity-60"
          >
            {isSubmitting ? "Mengunggah dan mengirim..." : "Kirim Pendaftaran"}
          </button>

          {status.message && (
            <p
              role="status"
              className={`mt-4 rounded-xl px-4 py-3 text-center text-sm ${
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

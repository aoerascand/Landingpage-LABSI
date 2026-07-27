import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  const phone = "6281599391115"; // ganti dengan nomor WhatsApp tujuan (format internasional tanpa +)
  const message = "Halo, saya ingin bertanya tentang Labsi.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.373 0 .03 5.344.03 11.97c0 2.108.55 4.18 1.59 6.01L0 24l6.2-1.62A11.93 11.93 0 0 0 12 23.94c6.627 0 11.97-5.344 11.97-11.97 0-3.2-1.25-6.2-3.45-8.49zM12 21.06c-1.6 0-3.14-.42-4.5-1.22l-.32-.19-3.69.97.98-3.59-.2-.36A8.03 8.03 0 0 1 3 11.97 8.97 8.97 0 0 1 12 3c2.38 0 4.6.93 6.28 2.62A8.88 8.88 0 0 1 21 11.97C21 17.03 16.97 21.06 12 21.06z" />
        <path d="M17.2 14.4c-.3-.15-1.76-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.54-.05-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.66-.51-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 1-1 2.44 0 1.44 1.03 2.83 1.17 3.03.15.2 2.02 3.08 4.9 4.32 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.28-.18-.58-.33z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;

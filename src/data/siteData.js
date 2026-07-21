import { FaCalendarDays, FaChartLine, FaMedal, FaPeopleGroup, FaTrophy, FaUserGraduate } from "react-icons/fa6";
import { GiTennisRacket } from "react-icons/gi";
import { HiAcademicCap, HiOutlineLightBulb, HiOutlineUserGroup } from "react-icons/hi2";
import { LuBadgeCheck, LuGraduationCap, LuMapPinned, LuShieldCheck } from "react-icons/lu";

export const navLinks = ["Home", "About", "Programs", "FAQ", "Contact"];

export const heroContent = {
  eyebrow: "LABSI PADEL SCHOOL",
  title: ["Membentuk Pemain Masa Depan.", "Sekolah Padel Junior Terbaik."],
  description: "Program pelatihan padel terstruktur untuk anak-anak dan remaja (usia 5–25 tahun). Dapatkan trial class gratis untuk melatih motorik, karakter, dan keterampilan olahraga anak Anda bersama coach profesional.",
  video: "/videos/labsi-opening.mp4",
  poster: "https://images.unsplash.com/photo-1617083934555-ac7b25c9f73d?auto=format&fit=crop&w=1600&q=85",
};

export const opportunity = {
  title: "Olahraga Dinamis untuk Tumbuh Kembang Anak.",
  description: "Padel adalah olahraga dengan pertumbuhan tercepat di dunia yang menggabungkan keseruan tenis dan squash. Sangat mudah dipelajari oleh anak-anak, melatih koordinasi motorik, ketangkasan fisik, sekaligus membangun rasa percaya diri di dalam dan luar lapangan.",
  stats: [
    { value: "Fun", label: "Metode Belajar Interaktif" },
    { value: "5-25", label: "Kategori Usia Program" },
    { value: "Pro", label: "Kurikulum & Coach Berlisensi" }
  ],
};

export const pillars = [
  { title: "Academy", text: "Kurikulum bertahap yang disesuaikan dengan umur dan tumbuh kembang anak.", icon: HiAcademicCap },
  { title: "Karakter", text: "Menanamkan nilai sportivitas, disiplin, kerja sama tim, dan kepemimpinan.", icon: HiOutlineUserGroup },
  { title: "Pelatih Pro", text: "Sesi latihan dipimpin oleh pelatih tersertifikasi dengan pendekatan ramah anak.", icon: HiOutlineLightBulb },
  { title: "Kompetisi", text: "Mengasah mental juara anak melalui festival olahraga dan turnamen persahabatan.", icon: FaTrophy },
];

export const whyLabsi = [
  { title: "Kurikulum Terstruktur", text: "Materi belajar progresif yang dirancang khusus untuk melatih teknik dasar hingga taktik tingkat lanjut.", icon: LuBadgeCheck },
  { title: "Pelatih Berlisensi", text: "Tim pelatih profesional yang berpengalaman, suportif, dan ramah terhadap anak-anak.", icon: LuGraduationCap },
  { title: "Pembentukan Karakter", text: "Fokus pada kedisiplinan, ketahanan mental, kerja sama tim, dan sportivitas tinggi.", icon: LuShieldCheck },
  { title: "Laporan Kemajuan", text: "Laporan evaluasi berkala untuk membantu orang tua memantau perkembangan fisik dan teknik anak.", icon: FaCalendarDays },
  { title: "Trial Class Gratis", text: "Beri anak Anda kesempatan merasakan serunya olahraga padel secara gratis sebelum bergabung.", icon: HiOutlineLightBulb },
  { title: "Lingkungan Positif", text: "Membangun komunitas olahraga junior yang aktif, sehat, suportif, dan menyenangkan.", icon: FaPeopleGroup },
  { title: "Aktivasi & Turnamen", text: "Panggung kompetisi internal yang menyenangkan untuk melatih kepercayaan diri anak di lapangan.", icon: FaTrophy },
];

export const programs = [
  { age: "U5–U8", name: "Foundation", text: "Fokus pada pengenalan gerak dasar, kelincahan, koordinasi motorik, dan keseruan bermain padel.", color: "bg-blue-500" },
  { age: "U8–U10", name: "Development", text: "Memantapkan teknik dasar pukulan, pemahaman aturan main, serta menumbuhkan rasa cinta pada olahraga.", color: "bg-cyan-500" },
  { age: "U10–U15", name: "Performance", text: "Mengembangkan taktik permainan, konsistensi pukulan, kelancaran reli, dan ketahanan mental tanding.", color: "bg-orange-400" },
  { age: "U15–U25", name: "High Performance", text: "Fokus persiapan turnamen kompetitif, fisik atletis maksimal, taktik mendalam, dan pengembangan potensi elite.", color: "bg-violet-500" },
];

export const partnerships = [
  { title: "Join Operation", subtitle: "Managed by LABSI", split: ["LABSI 70%", "Partner 30%"], description: "LABSI menjalankan standard academy, team, program, dan activation bersama venue Anda.", featured: true },
  { title: "Franchise Partnership", subtitle: "Operated by Partner", split: ["LABSI 30%", "Partner 70%"], description: "Venue menjalankan operasi harian dengan playbook, curriculum, dan brand support dari LABSI.", featured: false },
];

export const benefits = [
  { title: "Fisik Aktif & Sehat", icon: FaChartLine },
  { title: "Karakter & Disiplin", icon: FaUserGraduate },
  { title: "Pelatihan Premium", icon: GiTennisRacket },
  { title: "Komunitas Junior", icon: FaPeopleGroup },
  { title: "Jalur Prestasi", icon: FaMedal },
  { title: "Jadwal Fleksibel", icon: LuMapPinned },
];

export const galleryImages = [
  { src: "/images/Gallery-1.jpeg", alt: "Training session" },
  { src: "/images/Gallery-2.jpeg", alt: "Training session" },
  { src: "/images/Gallery-3.jpeg", alt: "Training session" },
  { src: "/images/Gallery-4.jpeg", alt: "Training session" },
  // { src: "public/images/Gallery-5.jpeg", alt: "Training session" },
];

export const faqs = [
  { question: "Apakah anak saya harus memiliki dasar bermain padel sebelum bergabung?", answer: "Tidak perlu. Program kami dirancang mulai dari kelas Foundation yang ramah pemula, sangat cocok untuk anak-anak yang belum pernah bermain olahraga raket sekalipun." },
  { question: "Bagaimana cara mendaftar untuk Trial Class gratis?", answer: "Sangat mudah! Anda hanya perlu mengisi formulir pendaftaran di bagian bawah halaman ini. Tim admin kami akan segera menghubungi Anda melalui WhatsApp untuk menjadwalkan kelas uji coba." },
  { question: "Peralatan apa saja yang perlu dipersiapkan untuk latihan?", answer: "Untuk sesi Trial Class, kami menyediakan racket (padel bat) dan bola secara gratis. Anak Anda hanya perlu memakai pakaian olahraga yang nyaman dan sepatu olahraga (seperti sepatu tenis atau running)." },
  { question: "Di mana lokasi latihan LABSI Padel School?", answer: "Kami mengadakan program latihan di berbagai partner venue padel premium di area Jakarta. Lokasi terdekat dari domisili Anda akan diinformasikan oleh tim kami saat konfirmasi jadwal." },
  { question: "Apakah ada evaluasi perkembangan untuk anak?", answer: "Ya, pelatih kami memberikan Progress Report secara berkala kepada orang tua di setiap akhir periode program untuk memantau perkembangan fisik, motorik, dan teknik bermain anak." },
];

export const contactInfo = { email: "labsipadelschool@gmail.com", phone: "+62 851-9939-1115", address: "Jakarta, Indonesia" };

export const registrationFields = [
  { name: "name", label: "Nama Anak", type: "text" },
  { name: "age", label: "Umur", type: "number", min: 3, max: 25 },
  { name: "branch", label: "Cabang Latihan", type: "select", options: ["LABSI x ThePadelSide(Condet)", "LABSI x Backyard(Cilandak)"] },
  { name: "address", label: "Alamat", type: "text" },
  { name: "schoolOrigin", label: "Asal Sekolah", type: "text", fullWidth: true },
  { name: "email", label: "Email Orang Tua", type: "email" },
  { name: "phone", label: "No. Telepon / WhatsApp", type: "tel" },
];

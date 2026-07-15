import { galleryImages } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

const Gallery = () => <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading centered eyebrow="ON & OFF THE COURT" title="The LABSI experience." description="Ruang untuk belajar, bertanding, dan membangun koneksi." /><div className="mt-12 columns-2 gap-4 md:columns-3">{galleryImages.map((image, index) => <figure key={image.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-slate-100"><img src={image.src} alt={image.alt} className={`w-full object-cover transition duration-500 hover:scale-105 ${index === 1 || index === 4 ? "aspect-[4/5]" : "aspect-[4/3]"}`} /></figure>)}</div></div></section>;
export default Gallery;

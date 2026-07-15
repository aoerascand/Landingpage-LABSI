import Benefits from "../components/Benefits/Benefits";
import ContactForm from "../components/ContactForm/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Opportunity from "../components/Opportunity/Opportunity";
import Programs from "../components/Programs/Programs";
import VisionMission from "../components/VisionMission/VisionMission";
import WhyLabsi from "../components/WhyLabsi/WhyLabsi";
import MainLayout from "../layouts/MainLayout";

const Home = () => <MainLayout><Hero /><Opportunity /><VisionMission /><WhyLabsi /><Programs /><Benefits /><Gallery /><FAQ /><ContactForm /></MainLayout>;
export default Home;

import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import NetworkSection from "../components/Network/NetworkSection";
import Programs from "../components/Programs/Programs";
import VisionMission from "../components/VisionMission/VisionMission";
import WhyLabsi from "../components/WhyLabsi/WhyLabsi";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

  return (
    <MainLayout>
      <Hero />
      <ContactForm selectedBranch={selectedBranch} />
      <NetworkSection setSelectedBranch={setSelectedBranch} />
      <VisionMission />
      <WhyLabsi />
      <Programs />
      <Gallery />
      <FAQ />
    </MainLayout>
  );
};
export default Home;

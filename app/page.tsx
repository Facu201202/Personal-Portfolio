import AboutSection from "@/src/components/AboutSection";
import ContactSection from "@/src/components/ContactSection";
import Footer from "@/src/components/Footer";
import MainSection from "@/src/components/MainSection";
import Navbar from "@/src/components/Navbar";
import ProjectsSection from "@/src/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <MainSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

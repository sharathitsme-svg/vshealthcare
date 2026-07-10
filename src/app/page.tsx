import ClinicGallery from "./components/ClinicGallery";
import Footer from "./components/Footer";
import Conditions from "./components/Conditions";
import FloatingButtons from "./components/FloatingButtons";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "@/app/components/Stats";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChoose />
      <Services />
      <Conditions />
      <About />
      <Certifications />
      <ClinicGallery />
      <Appointment />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
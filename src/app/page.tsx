"use client";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
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

export default function Home() {const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}
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
      <BackToTop />
    </>
  );
}
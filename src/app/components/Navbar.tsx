"use client";

import { useState } from "react";
import "../styles/navbar.css";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">

      <div className="logoSection">

        <Image
          src="/images/logo/logo.png"
          alt="VS Health Care"
          width={200}
          height={200}
          className="logoImage"
        />

        <div className="logoText">
          <h1 className="logoTitle">
            VS Health Care
          </h1>

          <p className="logoSubtitle">
            Healing • Wellness • Trust
          </p>
        </div>

      </div>

      <nav className="navLinks">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#gallery">Gallery</a>
  <a href="#contact">Contact</a>
</nav>

<a href="#appointment" className="bookButton">
  📅 Book Appointment
</a>

<button
  className="menuButton"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>
{menuOpen && (
  <div className="mobileMenu">

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#gallery" onClick={() => setMenuOpen(false)}>
      Gallery
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

    <a
      href="#appointment"
      className="mobileBookButton"
      onClick={() => setMenuOpen(false)}
    >
      📅 Book Appointment
    </a>

    <a
      href="tel:+918790959025"
      className="mobileCallButton"
    >
      📞 Call Now
    </a>

  </div>
)}

    </header>
  );
}
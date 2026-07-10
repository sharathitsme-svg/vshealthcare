import "../styles/navbar.css";
import Image from "next/image";

export default function Navbar() {
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
        Book Appointment
      </a>

    </header>
  );
}
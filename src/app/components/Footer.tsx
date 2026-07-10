import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* Left */}

        <div className="footerColumn">
          <h2>VS Health Care</h2>

          <p className="tagline">
            Healing • Wellness • Trust
          </p>

          <p>
            Providing compassionate, evidence-based Internal Medicine
            services with personalized care for every patient.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footerColumn">
          <h3>Quick Links</h3>

          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#certifications">Certifications</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}

        <div className="footerColumn">
          <h3>Services</h3>

          <ul>
            <li>Internal Medicine</li>
            <li>Diabetes Care</li>
            <li>Hypertension</li>
            <li>Respiratory Diseases</li>
            <li>Fever & Infectious Diseases</li>
            <li>Preventive Health Check-ups</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footerColumn">
          <h3>Contact</h3>

          <p>📞 +91 87909 59025</p>

          <p>
            6-22/2,<br />
            Near Bhashyam Public School,<br />
            Bhavani Nagar,<br />
            Dilsukhnagar,<br />
            Hyderabad – 500060
          </p>

          <p>
            ✉️ vshealthcaremedicine@gmail.com
          </p>
        </div>

      </div>

      <div className="footerBottom">

        <p>
          © {new Date().getFullYear()} VS Health Care. All Rights Reserved.
        </p>

        <a href="#home" className="backToTop">
          ↑ Back to Top
        </a>

      </div>

    </footer>
  );
}
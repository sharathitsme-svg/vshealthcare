import Image from "next/image";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section
  id="home"
  className="hero"
  data-aos="fade-up"
>
      <div className="heroLeft">
        <p
          style={{
            color: "#0f766e",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          WELCOME TO VS HEALTH CARE
        </p>

        <h1 className="heroTitle">
          Compassionate Internal Medicine Care
        </h1>

        <p className="heroSubtitle">
          Personalized, evidence-based healthcare for adults with a focus on
          prevention, accurate diagnosis and long-term wellness.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "25px",
            flexWrap: "wrap",
          }}
        >
          <div className="heroBadge">⭐ 6+ Years Experience</div>
          <div className="heroBadge">🏥 MD (Internal Medicine)</div>
          <div className="heroBadge">📜 ICP Certified</div>
        </div>

        <h2
          style={{
            marginTop: "20px",
            color: "#064e3b",
          }}
        >
          Dr. B. Darshan Koel
        </h2>

        <p>MBBS | MD (General Medicine)</p>

        <p>Institute of Internal Medicine</p>

        <p>Madras Medical College</p>

        <div className="heroButtons">
          <a href="#appointment" className="heroButton primaryButton">
            📅 Book Appointment
          </a>

          <a
            href="tel:+918790959025"
            className="heroButton secondaryButton"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      <div className="heroRight">
        <Image
          src="/images/doctor/doctor.jpeg"
          alt="Dr. B. Darshan Koel"
          width={430}
          height={540}
          className="heroImage"
          priority
        />
      </div>
    </section>
  );
}
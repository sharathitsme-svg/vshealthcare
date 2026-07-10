"use client";

import "../styles/contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";

export default function Contact() {
  return (
   <section
  id="contact"
  className="contact"
  data-aos="fade-up"
>

      <div className="contactContainer">

        <div className="contactHeading">

          <h5>GET IN TOUCH</h5>

          <h2>Contact VS Health Care</h2>

          <p>
            We are committed to providing compassionate, evidence-based
            healthcare. Contact us to schedule your consultation or visit our
            clinic for quality medical care.
          </p>

        </div>

        <div className="contactGrid">

          {/* Left Side */}

          <div className="contactInfo">

            <div className="infoCard">

              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3>Clinic Address</h3>

                <p>
                  6-22/2,
                  <br />
                  Near Bhashyam Public School,
                  <br />
                  Bhavani Nagar,
                  <br />
                  Dilsukhnagar,
                  <br />
                  Hyderabad - 500060
                </p>

              </div>

            </div>

            <div className="infoCard">

              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>

                <h3>Phone</h3>

                <a href="tel:+918790959025">
                  +91 87909 59025
                </a>

              </div>

            </div>

            <div className="infoCard">

              <div className="icon">
                <FaWhatsapp />
              </div>

              <div>

                <h3>WhatsApp</h3>

                <a
                  href="https://wa.me/918790959025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

            <div className="infoCard">

              <div className="icon">
                <FaEnvelope />
              </div>

              <div>

                <h3>Email</h3>

                <a href="mailto:vshealthcaremedicine@gmail.com">
                  vshealthcaremedicine@gmail.com
                </a>

              </div>

            </div>

            <div className="infoCard">

              <div className="icon">
                <FaClock />
              </div>

              <div>

                <h3>Clinic Timings</h3>

                <p>
                  Monday – Saturday
                  <br />
                  9:00 AM – 1:00 PM
                  <br />
                  5:00 PM – 9:00 PM
                  <br />
                  <br />
                  Sunday
                  <br />
                  6:00 PM – 9:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="mapSection">

            <iframe
              title="VS Health Care Location"
              src="https://www.google.com/maps?q=VS%20Health%20Care%20Dilsukhnagar%20Hyderabad&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

            <div className="contactButtons">

              <a
                href="tel:+918790959025"
                className="callBtn"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/918790959025"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsappBtn"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/iyhYcYjgjNPVnKnF6"
                target="_blank"
                rel="noopener noreferrer"
                className="directionBtn"
              >
                <FaDirections />
                Get Directions
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
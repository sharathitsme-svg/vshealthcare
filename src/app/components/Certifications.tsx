"use client";

import { useState } from "react";
import Image from "next/image";
import "../styles/certifications.css";
import {
  FaSearchPlus,
  FaCertificate,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

const certificates = [
  {
    title: "Cardiology",
    image: "/images/certificates/cardiology.jpeg",
  },
  {
    title: "Clinical Medicine",
    image: "/images/certificates/clinical-medicine.jpeg",
  },
  {
    title: "Diabetes Mellitus",
    image: "/images/certificates/diabetes.jpeg",
  },
  {
    title: "Emergency Medicine",
    image: "/images/certificates/emergency-medicine.jpeg",
  },
  {
    title: "Hematology",
    image: "/images/certificates/hematology.jpeg",
  },
  {
    title: "Infectious & Tropical Diseases",
    image: "/images/certificates/infectious-diseases.jpeg",
  },
  {
    title: "Respiratory Disorders",
    image: "/images/certificates/respiratory.jpeg",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
  id="certifications"
  className="certifications"
  data-aos="fade-up"
>
        <div className="certifications-container">

          <h5 className="sectionTag">
            PROFESSIONAL DEVELOPMENT
          </h5>

          <h2>
            Professional Certifications & Continuing Medical Education
          </h2>

          <p className="subtitle">
            Dedicated to continuous learning and evidence-based clinical
            practice through advanced certification programmes conducted by the
            Indian College of Physicians (ICP), ensuring the highest standards
            of patient care.
          </p>

          {/* Statistics */}

          <div className="statsGrid">

            <div className="statCard">
              <FaCertificate className="statIcon" />
              <h3>7+</h3>
              <p>Advanced Certifications</p>
            </div>

            <div className="statCard">
              <FaUserMd className="statIcon" />
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>

            <div className="statCard">
              <FaHeartbeat className="statIcon" />
              <h3>100%</h3>
              <p>Evidence-Based Care</p>
            </div>

          </div>

          {/* Certificate Grid */}

          <div className="certificate-grid">

            {certificates.map((cert, index) => (

              <div
                className="certificate-card"
                key={index}
                onClick={() => setSelectedImage(cert.image)}
              >

                <span className="badge">
                  ICP Certified
                </span>

                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={450}
                  height={320}
                  className="certificate-image"
                />

                <div className="certificate-content">

                  <h3>{cert.title}</h3>

                  <button className="viewButton">

                    <FaSearchPlus />

                    <span>View Certificate</span>

                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Information Box */}

          <div className="educationBox">

            <h3>
              Commitment to Continuous Medical Education
            </h3>

            <p>
              Dr. B. Darshan Koel believes that medical learning is a lifelong
              journey. Through regular participation in certification
              programmes and continuing medical education, she remains updated
              with the latest developments in Internal Medicine, enabling her
              to provide evidence-based, ethical and patient-centred medical
              care to every patient.
            </p>

          </div>

        </div>
      </section>

      {/* Lightbox */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="closeButton"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Certificate"
              width={1000}
              height={700}
              className="popupImage"
            />

          </div>

        </div>

      )}

    </>
  );
}
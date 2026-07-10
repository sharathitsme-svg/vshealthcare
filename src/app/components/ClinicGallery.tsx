"use client";

import { useState } from "react";
import Image from "next/image";
import "../styles/clinicGallery.css";

const gallery = [
  {
    title: "VS Health Care Clinic",
    image: "/images/clinic/exterior-1.jpeg",
  },
  {
    title: "Clinic Entrance",
    image: "/images/clinic/exterior-2.jpeg",
  },
  {
    title: "Patient Waiting Area",
    image: "/images/clinic/waiting-1.jpeg",
  },
  {
    title: "Comfortable Seating",
    image: "/images/clinic/waiting-2.jpeg",
  },
  {
    title: "Clinic Entrance",
    image: "/images/clinic/entrance.jpeg",
  },
  {
    title: "Examination Room",
    image: "/images/clinic/examination.jpeg",
  },
  {
    title: "Treatment Area",
    image: "/images/clinic/treatment.jpeg",
  },
  {
    title: "Consultation Chamber",
    image: "/images/clinic/consultation.jpeg",
  },
];

export default function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
  id="gallery"
  className="gallery"
  data-aos="fade-up"
>
        <div className="gallery-container">

          <h2>Our Clinic</h2>

          <p className="gallery-subtitle">
            A clean, modern and patient-friendly healthcare environment designed
            for your comfort.
          </p>

          <div className="gallery-grid">

            {gallery.map((photo, index) => (
              <div
                className="gallery-card"
                key={index}
                onClick={() => setSelectedImage(photo.image)}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={500}
                  height={350}
                  className="gallery-image"
                />

                <div className="gallery-overlay">
                  <h3>{photo.title}</h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Clinic Image"
              width={1200}
              height={800}
              className="gallery-popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
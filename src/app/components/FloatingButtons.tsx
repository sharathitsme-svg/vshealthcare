"use client";

import "../styles/floatingButtons.css";

import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

export default function FloatingButtons() {
  return (
    <div className="floatingButtons">

      <a href="#appointment" className="appointmentFloat">
        <MdCalendarMonth size={24} />
        <span>Book Appointment</span>
      </a>

      <a
        href="https://wa.me/918790959025"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappFloat"
      >
        <FaWhatsapp size={24} />
        <span>WhatsApp</span>
      </a>

      <a
        href="https://maps.app.goo.gl/iyhYcYjgjNPVnKnF6"
        target="_blank"
        rel="noopener noreferrer"
        className="directionFloat"
      >
        <FaMapMarkerAlt size={22} />
        <span>Get Directions</span>
      </a>

    </div>
  );
}
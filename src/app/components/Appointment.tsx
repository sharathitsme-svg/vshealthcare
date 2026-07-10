"use client";

import { useState } from "react";
import "../styles/appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookAppointment = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `Hello Dr. B. Darshan Koel,

I would like to book an appointment.

Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Preferred Date: ${form.date}

Preferred Time: ${form.time}

Health Concern:
${form.concern}`;

    window.open(
      `https://wa.me/918790959025?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="appointment" className="appointment">

      <div className="appointmentContainer">

        <h2>Book an Appointment</h2>

        <p>
          Schedule your consultation with Dr. B. Darshan Koel
        </p>

        <div className="appointmentGrid">

          <input
            name="name"
            placeholder="Full Name *"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Mobile Number *"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
          />

          <textarea
            rows={5}
            name="concern"
            placeholder="Describe your health concern..."
            onChange={handleChange}
          />

          <button onClick={bookAppointment}>
            Book Appointment on WhatsApp
          </button>

        </div>

      </div>

    </section>
  );
}
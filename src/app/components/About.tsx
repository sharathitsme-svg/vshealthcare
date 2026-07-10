import Image from "next/image";
import "../styles/about.css";
import {
  FaUserMd,
  FaGraduationCap,
  FaCertificate,
  FaHeartbeat,
  FaStethoscope,
  FaClinicMedical,
} from "react-icons/fa";

export default function About() {
  return (
    <section
  id="about"
  className="about"
  data-aos="fade-up"
>
      <div className="aboutContainer">

        <div className="aboutImage">

          <Image
            src="/images/doctor/doctor.jpeg"
            alt="Dr. B. Darshan Koel"
            width={360}
            height={460}
            className="doctorImage"
          />

          <div className="doctorCard">

            <h3>Dr. B. Darshan Koel</h3>

            <p>Consultant Physician</p>

            <p>Internal Medicine Specialist</p>

            <span>6+ Years Clinical Experience</span>

          </div>

        </div>

        <div className="aboutContent">

          <h5>ABOUT THE DOCTOR</h5>

          <h2>Compassionate Care with Clinical Excellence</h2>

          <p>
            Dr. B. Darshan Koel is a dedicated <strong>Consultant Physician and
            Internal Medicine Specialist</strong> committed to providing
            comprehensive, evidence-based healthcare with compassion and
            clinical excellence. Her approach focuses on accurate diagnosis,
            preventive healthcare, personalized treatment plans, and long-term
            patient well-being.
          </p>

          <p>
            She completed her <strong>MBBS</strong> from
            <strong> Dr. NTR University of Health Sciences</strong> and earned
            her <strong>MD in Internal Medicine</strong> from the prestigious
            <strong> Institute of Internal Medicine, Madras Medical College.</strong>
          </p>

          <p>
            With more than <strong>6 years of clinical experience</strong>, she
            has treated patients with diabetes, hypertension, thyroid disorders,
            respiratory diseases, infectious diseases, cardiovascular diseases
            and other complex medical illnesses using an evidence-based and
            patient-centred approach.
          </p>

          <p>
            She has successfully completed multiple certification programmes
            conducted by the <strong>Indian College of Physicians (ICP)</strong>
            in Cardiology, Diabetology, Respiratory Medicine, Emergency
            Medicine, Clinical Medicine, Infectious Diseases and Hematology,
            reflecting her commitment to continuous medical education.
          </p>

          <div className="aboutGrid">

            <div className="aboutCard">
              <FaGraduationCap className="aboutIcon" />
              <h4>MBBS</h4>
              <p>Dr. NTR University of Health Sciences</p>
            </div>

            <div className="aboutCard">
              <FaUserMd className="aboutIcon" />
              <h4>MD</h4>
              <p>Internal Medicine</p>
            </div>

            <div className="aboutCard">
              <FaCertificate className="aboutIcon" />
              <h4>ICP Certified</h4>
              <p>7 Advanced Certifications</p>
            </div>

            <div className="aboutCard">
              <FaHeartbeat className="aboutIcon" />
              <h4>Experience</h4>
              <p>6+ Years Clinical Practice</p>
            </div>

          </div>

          <div className="expertise">

            <h3>
              <FaClinicMedical className="sectionIcon" />
              Areas of Clinical Expertise
            </h3>

            <ul>

              <li><FaStethoscope /> Internal Medicine</li>

              <li><FaStethoscope /> Diabetes Management</li>

              <li><FaStethoscope /> Hypertension</li>

              <li><FaStethoscope /> Thyroid Disorders</li>

              <li><FaStethoscope /> Respiratory Diseases</li>

              <li><FaStethoscope /> Infectious Diseases</li>

              <li><FaStethoscope /> Preventive Health Check-ups</li>

              <li><FaStethoscope /> Geriatric Care</li>

            </ul>

          </div>

          <div className="missionBox">

            <h3>Mission</h3>

            <p>
              Her goal is to build long-term relationships with patients by
              providing personalized, evidence-based medical care in a
              compassionate and welcoming environment. She believes that
              prevention, early diagnosis, patient education and continuity of
              care are the cornerstones of lifelong health. Through every
              consultation, she strives to ensure that her patients feel heard,
              informed and confident in their healthcare journey.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
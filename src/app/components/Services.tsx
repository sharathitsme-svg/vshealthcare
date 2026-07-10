import "../styles/services.css";
import {
  FaUserMd,
  FaHeartbeat,
  FaLungs,
  FaNotesMedical,
  FaClinicMedical,
  FaProcedures,
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaUserMd />,
      title: "Internal Medicine",
      description:
        "Comprehensive diagnosis and management of acute and chronic medical conditions affecting adults.",
      points: ["Adult Healthcare", "Evidence-Based Treatment"],
    },
    {
      icon: <FaHeartbeat />,
      title: "Diabetes Care",
      description:
        "Personalized diabetes management including lifestyle counselling, medication optimization and long-term follow-up.",
      points: ["Blood Sugar Control", "Lifestyle Guidance"],
    },
    {
      icon: <FaHeartbeat />,
      title: "Hypertension",
      description:
        "Evaluation and treatment of high blood pressure to reduce cardiovascular risk and improve long-term health.",
      points: ["BP Monitoring", "Heart Health"],
    },
    {
      icon: <FaLungs />,
      title: "Respiratory Diseases",
      description:
        "Diagnosis and treatment of asthma, COPD, respiratory infections and other lung diseases.",
      points: ["Asthma", "COPD"],
    },
    {
      icon: <FaNotesMedical />,
      title: "Fever & Infectious Diseases",
      description:
        "Evidence-based diagnosis and treatment of bacterial, viral and tropical infectious diseases.",
      points: ["Viral Fever", "Infection Management"],
    },
    {
      icon: <FaClinicMedical />,
      title: "Preventive Health Check-ups",
      description:
        "Routine health screening, early disease detection and preventive medical consultations.",
      points: ["Health Screening", "Preventive Care"],
    },
    {
      icon: <FaStethoscope />,
      title: "Thyroid Disorders",
      description:
        "Diagnosis and management of hypothyroidism, hyperthyroidism and other endocrine disorders.",
      points: ["Hormonal Balance", "Long-term Care"],
    },
    {
      icon: <FaProcedures />,
      title: "Geriatric Care",
      description:
        "Comprehensive healthcare focused on maintaining health, independence and quality of life for older adults.",
      points: ["Senior Health", "Chronic Disease Care"],
    },
  ];

  return (
    <section
  id="services"
  className="services"
  data-aos="fade-up"
>
      <div className="servicesContainer">
        <div className="servicesHeader">
          <h5>OUR SERVICES</h5>

          <h2>Comprehensive Internal Medicine Services</h2>

          <p>
            We provide comprehensive, evidence-based healthcare with a
            patient-centred approach for the prevention, diagnosis and
            management of acute and chronic medical conditions.
          </p>
        </div>

        <div className="servicesGrid">
          {services.map((service, index) => (
            <div className="serviceCard" key={index}>
              <div className="serviceIcon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul className="serviceList">
                <li>✔ {service.points[0]}</li>
                <li>✔ {service.points[1]}</li>
              </ul>

              <a href="#appointment" className="learnMore">
                Book Appointment <FaArrowRight />
              </a>
            </div>
          ))}
        </div>

        <div className="trustBanner">
          <div>
            <FaUserMd size={34} />
            <h4>Expert Medical Care</h4>
          </div>

          <div>
            <FaHeartbeat size={34} />
            <h4>Evidence-Based Treatment</h4>
          </div>

          <div>
            <FaClinicMedical size={34} />
            <h4>Personalized Care</h4>
          </div>

          <div>
            <FaStethoscope size={34} />
            <h4>Long-Term Follow-up</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
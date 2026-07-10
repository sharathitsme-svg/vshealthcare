export default function Conditions() {

  const conditions = [
    "Diabetes Management",
    "Hypertension (High Blood Pressure)",
    "Thyroid Disorders",
    "Fever & Infectious Diseases",
    "Respiratory Diseases",
    "Heart Diseases",
    "Kidney Disorders",
    "Liver Diseases",
    "Anemia & Blood Disorders",
    "Gastrointestinal Disorders",
    "Preventive Health Check-ups",
    "General Medical Consultation",
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#0f766e",
          marginBottom: "15px",
        }}
      >
        Health Conditions We Treat
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Comprehensive Internal Medicine care for a wide range of medical conditions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {conditions.map((condition) => (
          <div
            key={condition}
            style={{
              background: "#f8fffc",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              borderLeft: "6px solid #0f766e",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0f766e",
                fontSize: "20px",
              }}
            >
              ✓ {condition}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
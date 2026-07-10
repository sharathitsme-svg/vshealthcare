export default function WhyChoose() {
  const features = [
    "Evidence-Based Treatment",
    "Personalized Patient Care",
    "Experienced Internal Medicine Specialist",
    "Comprehensive Health Check-ups",
    "Compassionate Medical Care",
    "Convenient Clinic Timings",
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        backgroundColor: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          color: "#0f766e",
          marginBottom: "15px",
        }}
      >
        Why Choose VS Health Care?
      </h2>

      <p
        style={{
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto 50px",
          fontSize: "18px",
        }}
      >
        We are committed to providing compassionate, evidence-based medical care
        with a focus on prevention, accurate diagnosis, and long-term wellness.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature}
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "15px" }}>✔️</div>

            <h3 style={{ color: "#0f766e" }}>{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
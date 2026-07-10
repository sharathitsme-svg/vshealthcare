export default function Stats() {
  const stats = [
    {
      number: "6+",
      label: "Years Experience",
    },
    {
      number: "4000+",
      label: "Patients Treated",
    },
    {
      number: "7",
      label: "ICP Certifications",
    },
    {
      number: "100%",
      label: "Patient-Centered Care",
    },
  ];

  return (
    <section
      style={{
        padding: "70px 10%",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#f8fffc",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid #e8f5ef",
            }}
          >
            <h2
              style={{
                color: "#0f766e",
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                margin: 0,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
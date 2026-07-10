import Image from "next/image";

export default function Gallery() {
const images = [
  "clinic1.JPEG",
  "clinic2.JPEG",
  "clinic3.JPEG",
  "clinic4.JPEG",
  "clinic5.JPEG",
  "clinic6.JPEG",
  "clinic7.JPEG",
  "clinic8.JPEG",
];
  return (
    <section
      id="gallery"
      style={{
        padding: "80px 40px",
        background: "#f8fafc",
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
        Our Clinic Gallery
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "50px",
        }}
      >
        A glimpse of VS Health Care and our patient-friendly environment.
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
        {images.map((image) => (
          <div
            key={image}
            style={{
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src={`/images/clinic/${image}`}
              alt="VS Health Care Clinic"
              width={500}
              height={350}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "VS Health Care",
    url: "https://vshealthcare.in",
    telephone: "+91 8790959025",
    email: "vshealthcaremedicine@gmail.com",
    image: "https://vshealthcare.in/images/logo/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "6-22/2, Near Bhashyam Public School, Bhavani Nagar, Dilsukhnagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500060",
      addressCountry: "IN",
    },
    medicalSpecialty: "Internal Medicine",
    physician: {
      "@type": "Physician",
      name: "Dr. B. Darshan Koel",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
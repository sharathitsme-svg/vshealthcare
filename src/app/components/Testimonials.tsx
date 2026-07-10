import "../styles/testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh K.",
      initials: "RK",
      review:
        "Excellent consultation. The doctor listened patiently, explained my condition clearly and provided effective treatment. Highly recommended.",
    },
    {
      name: "Priya R.",
      initials: "PR",
      review:
        "Very professional and caring approach. The clinic is clean, appointments are well managed and the treatment was excellent. I felt reassured throughout my visit.",
    },
    {
      name: "Swathi",
      initials: "S",
      review:
        "One of the best physicians I have consulted. The consultation was thorough, all my questions were answered patiently, and I recovered quickly with the prescribed treatment.",
    },
  ];

  return (
   <section
  id="testimonials"
  className="testimonials"
  data-aos="fade-up"
>
      <div className="testimonialsContainer">

        <div className="testimonialsHeader">

          <h5>PATIENT TESTIMONIALS</h5>

          <h2>What Our Patients Say</h2>

          <p>
            Compassionate care, trusted treatment and a commitment to improving
            the health and well-being of every patient who walks through our
            doors.
          </p>

        </div>

        <div className="testimonialGrid">

          {reviews.map((review, index) => (
            <div className="testimonialCard" key={index}>

              <div className="quoteIcon">
                <FaQuoteLeft />
              </div>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="reviewText">
                "{review.review}"
              </p>

              <div className="patientInfo">

                <div className="avatar">
                  {review.initials}
                </div>

                <div>

                  <h4>{review.name}</h4>

                  <span>Verified Patient</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
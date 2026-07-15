"use client";

import "../styles/stats.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    {
      end: 6,
      suffix: "+",
      label: "Years Experience",
    },
    {
      end: 5000,
      suffix: "+",
      label: "Patients Treated",
    },
    {
      end: 7,
       suffix: "+",
      label: "ICP Certifications",
    },
    {
      end: 100,
      suffix: "%",
      label: "Patient-Centered Care",
    },
  ];

  return (
    <section className="statsSection">

      <div
        className="statsContainer"
        ref={ref}
      >

        {stats.map((item) => (

          <div
            key={item.label}
            className="statsCard"
          >

            <h2 className="statsNumber">

              {inView && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={2.5}
                  separator=","
                />
              )}

              {item.suffix}

            </h2>

            <p className="statsLabel">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
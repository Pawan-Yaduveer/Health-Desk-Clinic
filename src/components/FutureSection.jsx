import React from "react";
import naturalImg from "../assets/natural.jpg";
import researchImg from "../assets/research.jpg";
import manufacturingImg from "../assets/manufacturing.jpg";

const futureHighlights = [
  {
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description:
      "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
    image: naturalImg,
    alt: "Assorted citrus fruits on a white background",
  },
  {
    title: "Research-backed Formulas",
    subtitle: "Formulated with Clinically Tested Ingredients",
    description:
      "We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.",
    image: researchImg,
    alt: "Laboratory glassware with blue solution",
  },
  {
    title: "Eco-conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    description:
      "Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.",
    image: manufacturingImg,
    alt: "Modern manufacturing lab with clean equipment",
  },
];

const FutureSection = () => (
  <section className="future-section">
    <div className="section-header">
      <h2>
        Health Care Desk
        <br />
        The Future Of Smart Health
      </h2>
      <p>
        At Health Care Desk, we are committed to producing supplements that harness the
        power of all-natural superfoods. Our products help support the body's natural
        processes, improving our customers' quality of life.
      </p>
    </div>
    <div className="future-grid">
      {futureHighlights.map((item, index) => (
        <article key={item.title} className={`future-card ${index % 2 === 1 ? "reverse" : ""}`}>
          <div className="future-media">
            <img src={item.image} alt={item.alt} />
          </div>
          <div className="future-text">
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
            <button className="ghost-button1">Learn More</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FutureSection;
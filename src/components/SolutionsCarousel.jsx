// src/components/SolutionsCarousel.jsx
import React from "react";
import { solutions } from "../data/landingData"; // your data array
import "./solutions-carousel.css"; // create/import the CSS below// if your global styles live here (or import a dedicated CSS file)

const SolutionsCarousel = () => {
  // duplicate the items to create a seamless loop
  const items = [...solutions, ...solutions, ...solutions];

  return (
    <section className="solutions-section carousel-section" aria-label="Solutions carousel">
      <div className="section-header">
        <h2>Nutrition Solutions<br/>for Your Complete Well-Being</h2>
      </div>

      {/* viewport that masks overflow and pauses on focus/hover */}
      <div className="carousel-viewport" tabIndex={0} aria-roledescription="carousel">
        <div className="carousel-track" role="list">
          {items.map((s, idx) => (
            <article
              key={`${s.title}-${idx}`}
              className="solution-card carousel-item"
              role="listitem"
              aria-label={s.title}
            >
              <div className={`solution-icon ${s.badge || ""}`}>
                {s.icon && React.createElement(s.icon, { size: 28, strokeWidth: 1.5 })}
              </div>

              <div className="solution-body">
                <h3>{s.title}</h3>
                <p className="solution-desc">{s.description}</p>
              </div>

              <div className="card-cta">
                <button className="cta-buy">Buy now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel;

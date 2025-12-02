import React from "react";
import { trustIcons } from "../data/landingData";
import trustBgImage from '../assets/trustBG.jpg';

const TrustSection = () => (
  <section 
    className="trust-section"
    style={{
      backgroundImage: `url(${trustBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div >
      <h2>A Brand That You Can Trust</h2>
      <p>
        Our result-driven supplements are made with premium & safe ingredients
      </p>
    </div>
    <div className="trust-grid">
      {trustIcons.map((item) => {
        // We don't need "const Icon = item.icon" anymore
        
        return (
          <div key={item.label} className="trust-card">
            {/* USE IMG TAG HERE */}
            <img 
              src={item.icon} 
              alt={item.label} 
              className="trust-icon-img" /* Added a new class for styling */
            />
            <span className="trust-icon-label">{item.label}</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default TrustSection;
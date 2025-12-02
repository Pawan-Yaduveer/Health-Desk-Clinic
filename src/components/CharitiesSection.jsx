import React from "react";
import { charities } from "../data/landingData";
import trustBgImage from '../assets/charBG.jpg';

const CharitiesSection = () => (
  <section className="charities-section"
    style={{
        backgroundImage: `url(${trustBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
      
    <div className="charity-content">
      <h2>Our Charitable Initiatives<br/>Health Care Desk Gives Back</h2>
      <p>
        At Health Care Desk, a portion of our profits are committed 
        to supporting charities and global health research initiatives.
      </p>
    </div>

    <div className="charity-grid">
      {charities.map((c, i) => (
        <img key={i} src={c.icon} alt="charity" className="charity-logo"/>
      ))}
    </div>

  </section>
);

export default CharitiesSection;

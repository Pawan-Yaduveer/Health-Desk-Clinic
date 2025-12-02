
import heroImage from "../assets/hero-doctor.png";
const Hero = () => (
  <section className="hero-section">
    <div className="hero-box">
      <div className="hero-text-area">
        <div className="hero-inner-card">

          <h1>
            Health Desk Clinic: <br/>All Natural Supplements
          </h1>
          <p>
            Health Care Desk is the premier choice for those seeking wellness
            through wholesome, superfood-enriched formulas that actually work. Our
            all-natural, organic health supplements give your body what it needs
            to thrive and optimize your health each day.
          </p>
          <div className="hero-actions">
            <button className="cta-button">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-glow" aria-hidden="true" />
       <img src={heroImage} alt="Smiling doctor" />
       
      </div>
    </div>
  </section>
);
export default Hero;

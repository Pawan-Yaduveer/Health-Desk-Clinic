import React from "react";
import { footerProducts } from "../data/landingData";
import LogoSmall from "../assets/HealthDeskLogo.png";
import PaymentCards from "../assets/paymentCards.png";

const Footer = () => (
  <footer className="site-footer">

    {/* Top Section: Logo + Products */}
    <div className="container footer-columns">
      <div className="footer-column contact-col">
        <img src={LogoSmall} alt="Health Desk" className="footer-logo-small" />

        <address className="contact-info">
          <div>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</div>
          <div>Phone: (512) 555-2376</div>
          <div>Email: Ereforce@outlook.com</div>
        </address>
      </div>

      <div className="footer-column products-col">
        <h3>Our Products</h3>
        <div className="footer-products">
          {footerProducts.map((column, index) => (
            <div key={index} className="footer-products-column">
              {column.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Regulatory + Payment + Footer Note (SAME BG) */}
    <div className="footer-regulatory">
      <div className="container regulatory-inner">

        {/* Regulatory Text */}
        <p className="regulatory-text">
          These statements have not been evaluated by the Food and Drug Administration.
          These products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        {/* Payment Logo */}
        <div className="payment-logos single-image">
          <img src={PaymentCards} alt="Payment Methods" className="payment-all-img" />
        </div>

        {/* Bottom Note Row (centered) */}
        <div className="footer-note centered">
          <span>© 2025 Health Desk Clinic. All Rights Reserved.</span>

          <div className="footer-links">
            <a href="#">Terms And Conditions</a>
            <span className="divider-vert">|</span>
            <a href="#">Privacy Policy</a>
            <span className="divider-vert">|</span>
            <a href="#">Contact Us</a>
          </div>
        </div>

      </div>
    </div>

  </footer>
);

export default Footer;

import React from "react";
import { Facebook, Linkedin, Send, Twitter } from "lucide-react";
import Logo from "../assets/HealthDeskLogo.png";   // ⬅ import your logo image

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Send, label: "Telegram" },
  { icon: Linkedin, label: "LinkedIn" }
];

const ContactSocial = () => (
  <section className="contact-social-wrapper">
    <div className="contact-social">

      {/* === Centered Logo/CTA block === */}
      <div className="social-cta">        {/* ← ADD THIS WRAPPER */}
        <div className="logo-wrapper">
          <img src={Logo} alt="Health Desk Logo" className="contact-logo" />
        </div>

        <button className="ghost-button">Follow Us</button>

        <div className="social-buttons centered">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <button key={social.label} className="social-icon" title={social.label}>
                <Icon size={16}/>
              </button>
            );
          })}
        </div>
      </div>                              {/* ← CLOSE WRAPPER */}

    </div>

    {/* Bottom grid section (FAQ / Connect / Social) */}
    <div className="contact-footer">
      <div className="contact-grid container">
        <article>
          <h3>Have a Question?</h3>
          <p>Check out our FAQs where we answer the most commonly asked questions.</p>
          <button className="outline-button">Read FAQs</button>
        </article>

        <article>
          <h3>Connect With Us</h3>
          <p>Enjoy free shipping for all orders.</p>
          <h2 className="connect-phone">1-800-822-7777</h2>
        </article>

        <article>
          <h3>We're Social</h3>
          <p>Like us, love us, follow us!</p>
        </article>
      </div>
    </div>
  </section>
);

export default ContactSocial;

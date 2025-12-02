import React from "react";

const Newsletter = () => (
  <section className="newsletter-banner">
    <div className="container newsletter-inner">
      <div className="newsletter-left">
        <h2>Let's Grow Together</h2>
        <p className="newsletter-sub">We'll keep it simple. Only the news and updates you need.</p>
      </div>

      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Please Enter Your Email"
          aria-label="Email"
          required
        />
        <button type="submit" className="newsletter-submit">Submit</button>
      </form>
    </div>
  </section>
);

export default Newsletter;

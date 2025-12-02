import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data/landingData";

const Testimonials = () => (
  <section className="testimonial-section">
    <div className="section-header">
      <h2>Verified Customer Testimonials</h2>
    </div>
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
       <article key={testimonial.name} className="testimonial-card">
  
  <img className="product-badge" src={testimonial.product} alt="" />  {/* NEW */}

  <div className="testimonial-meta">
    
    <div>
      <h3>{testimonial.name}</h3>
      <div className="stars small">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} className="star"
      fill="#FFC107"     // ⭐ full yellow fill
      stroke="#FFC107" />)}
      </div>
    </div>
  </div>

  <p>{testimonial.review}</p>
  <span className="author">- {testimonial.author}</span>
</article>

      ))}
    </div>
  </section>
);

export default Testimonials;

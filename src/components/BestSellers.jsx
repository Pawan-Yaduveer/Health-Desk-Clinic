import React from "react";
import { Star } from "lucide-react";
import { features, products } from "../data/landingData";

const BestSellers = () => (
  <section className="best-sellers">
    <div className="best-header">
      <div>
        <h2>Our Best Sellers</h2>
        <p>
          Formulated with science-backed all-natural ingredients, our unique
           supplements support holistic health, healing & wellness.
        </p>
      </div>
      <div className="features-line">
        {features.map((item, index) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {index < features.length - 1 && <span className="divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="products-grid">
      {products.map((product) => (
        <article key={product.name} className="product-card">
          <div className="product-media">
            <img src={product.image} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={16} className="star" />
            ))}
          </div>
          <button className="outline-button">Shop Now</button>
        </article>
      ))}
    </div>
  </section>
);

export default BestSellers;

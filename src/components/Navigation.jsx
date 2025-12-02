import { useState } from "react";
import { ShoppingBag, Menu, X, Plus } from "lucide-react";
import { navLinks } from "../data/landingData";
import logoImage from "../assets/HealthDeskLogo.png";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="top-nav">
        <div className="logo-group">
          <img src={logoImage} alt="Health Desk Clinic" className="logo-image" />
        </div>
        <nav className="nav-links">
          {navLinks.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Shopping bag">
            <ShoppingBag size={18} />
            <span className="badge-dot" />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;

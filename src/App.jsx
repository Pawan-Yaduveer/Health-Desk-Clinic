import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import TrustSection from "./components/TrustSection";
import FutureSection from "./components/FutureSection";
import CharitiesSection from "./components/CharitiesSection";
import Testimonials from "./components/Testimonials";
import ContactSocial from "./components/ContactSocial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import SolutionsCarousel from "./components/SolutionsCarousel";

const App = () => (
  <div className="app-shell">
    <Navigation />
    <main>
      <Hero />
      <SolutionsCarousel />
      <BestSellers />
      <TrustSection />
      <FutureSection />
      <CharitiesSection />
      <Testimonials />
      <ContactSocial />
      <Newsletter />
    </main>
    <Footer />
  </div>
);

export default App;

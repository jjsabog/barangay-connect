import "./Hero.css";
import Shape1 from "../../assets/shape1.png";
import CTAButton from "../CTAButton/CTAButton";
import HeroMockup from "../../assets/portrait-mockup.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        <img src={Shape1} alt="Random Shape" className="heading__shape" /> Built
        to support your daily needs in the barangay
      </h1>
      <p className="hero__subheading">
        ─ We reimagined barangay services and turned them into a simple digital
        experience. No need to line up or chase paperwork.
      </p>
      <div className="hero__cta-button--mobile">
        <CTAButton label="Download the App" onClick={() => null} />
      </div>
      <div className="hero__phone-mockup--mobile">
        <img src={HeroMockup} alt="Phone with BarangayConnect Splash" />
      </div>
    </div>
  );
};

export default Hero;

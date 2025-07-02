import "./Hero.css";
import Shape1 from "../../assets/shape1.png";
import CTAButton from "../CTAButton/CTAButton";
import HeroMockup from "../../assets/hero-mockup.png";
import HeroImage1 from "../../assets/hero-image-1.png";
import HeroImage2 from "../../assets/hero-image-2.png";
import CTAQR from "../CTAQR/CTAQR";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        {/* Shape */}
        <img src={Shape1} alt="Random Shape" className="heading__shape" />
        Built to support your {/* Hero Image 1*/}
        <img
          src={HeroImage1}
          alt="Hero Image"
          className="heading__image-1 heading__image--1024px"
        />
        <br className="hero__br" />
        daily needs in the barangay
      </h1>
      <div className="hero__wrapper">
        <div>
          <img
            src={HeroImage2}
            alt="Hero Image"
            className="heading__image-2 heading__image--1024px"
          />
        </div>
        <div>
          <p className="hero__subheading">
            ─ We reimagined barangay services and turned them into a simple
            digital experience. No need to line up or chase paperwork.
          </p>
          <div className="CTAQR">
            <CTAQR />
          </div>
        </div>
      </div>

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

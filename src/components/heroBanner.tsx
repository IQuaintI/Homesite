import heroBanner from "../../public/heroBanner.png";
import "../styles/heroBanner.scss";

function HeroBanner() {
  return (
    <div className="hero-banner-image">
      <img src={heroBanner} alt="hero banner" />
      <div className="hero-banner-text">
        <h1>Hello.</h1>
        <h2>I hope you are here to cause some trouble.</h2>
      </div>
    </div>
  );
}

export default HeroBanner;

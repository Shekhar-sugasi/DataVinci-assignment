import Header from "../Header";
import LandingDescription from "../LandingDescription";
import LandingImages from "../LandingImages";
import "./index.css";

const LandingSection = () => (
  <div className="page-wrapper">
    <Header />
    <div className="main-container">
      <LandingImages />
      <LandingDescription />
    </div>
  </div>
);

export default LandingSection;

import leftArrow from "../../assets/left-arrow.png";
import L14Bottle from "../../assets/link.png";
import rightArrow from "../../assets/right-arrow.png";
import ModalSpoon from "../../assets/modal-spoon.png";
import Iframe from "../../assets/Iframe.png";
import ModalGinger from "../../assets/modal-ginger.png";
import ModalHand from "../../assets/modal-hand.png";
import ModalLemon from "../../assets/modal-lemon.png";
import ModalMat from "../../assets/modal-mat.png";
import NaturalRaw from "../../assets/natural-raw.png";
import "./index.css";

const LandingImages = () => (
  <div className="main-images-container">
    <div className="main-slide-container">
      <img src={leftArrow} alt="left-arrow-img" className="left-arrow" />
      <img src={L14Bottle} alt="main-bottle-img" />
      <img src={rightArrow} alt="right-arrow-img" className="right-arrow" />
    </div>

    <div className="small-images-container">
      <img src={ModalSpoon} alt="modal-spoon-img" className="small-images" />
      <img src={ModalHand} alt="modal-hand-img" className="small-images" />
    </div>
    <img src={Iframe} alt="Iframe-img" className="person-img" />
    <div className="small-images-container">
      <img src={ModalGinger} alt="modal-ginger-img" className="small-images" />
      <img src={ModalLemon} alt="modal-lemon-img" className="small-images" />
    </div>
    <div className="small-images-container">
      <img src={ModalMat} alt="modal-with-mat-image" className="small-images" />
      <img src={NaturalRaw} alt="natural-raw-img" className="small-images" />
    </div>
  </div>
);

export default LandingImages;

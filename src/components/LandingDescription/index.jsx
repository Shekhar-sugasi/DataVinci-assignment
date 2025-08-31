import InfoIcon from "../../assets/info-icon.png";
import RatingHeart from "../../assets/rating-heart.png";
import CertificateHoney from "../../assets/certifications-honey.png";
import CertificateFianz from "../../assets/certifications-fianz.png";
import CertificateMgo from "../../assets/certifications-mgo.png";
import CertificateNongmo from "../../assets/certifications-nongmo.png";
import CertificateResidue from "../../assets/certifications-residue.png";
import CertificateZealand from "../../assets/certifications-zealand.png";
import ManukaFirst from "../../assets/first-manuka-honey.png";
import ManukaSecond from "../../assets/manuka-2mg.png";
import ManukaThird from "../../assets/raw-manuka-withspoon.png";
import ManukaFourth from "../../assets/raw-manuka.png";
import ManukaFifth from "../../assets/raw-manuka-nonspoon.png";
import ManukaSixth from "../../assets/four-manuka.png";
import ManukaSeventh from "../../assets/soothing-drops.png";
import RefreshIcon from "../../assets/refresh-icon.png";
import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";
import UMF20 from "../../assets/umf20.png";
import UMF24 from "../../assets/umf24.png";
import WoodenSpoon from "../../assets/wooden-spoon.png";
import DownArrow from "../../assets/down-arrow.png";
import ColourClubLogo from "../../assets/colourclub-logo.png";
import AfterPayLogo from "../../assets/afterpay-logo.png";
import "./index.css";

const LandingDescription = () => (
  <div className="main-description-container">
    <h1 className="main-heading">Manuka Honey</h1>
    <h2 className="umf-mgo">
      UMF™ <span className="umf-mgo-quantity">24+</span>
      <br />
      MGO <span className="umf-mgo-quantity mgo-quantity">1122+</span>
    </h2>

    <div className="info-wrapper">
      <button
        className="info-container"
        aria-expanded="false"
        aria-controls="umf-mgo-popover"
      >
        <img src={InfoIcon} alt="info-icon" className="info-icon-rules" />
        What is UMF and MGO?
      </button>

      <div
        id="umf-mgo-popover"
        className="info-popover"
        role="dialog"
        aria-hidden="true"
      >
        <div className="popover-inner">
          <div className="individual-info">
            <h3 className="umf-txt-info">
              <span className="umf-span-txt-info">UMF</span> is the strength and
              purity rating of Manuka honey.
            </h3>
            <div className="scale-row">
              <span className="info-stats-popup popup-info-ten">10+</span>
              <span className="info-stats-popup popup-info-fifteen">15+</span>
              <span className="info-stats-popup popup-info-twenty">20+</span>
              <span className="info-stats-popup popup-info-twenty-four">
                24+
              </span>
              <span className="info-stats-popup popup-info-twenty-six">
                26+
              </span>
              <span className="info-stats-popup popup-info-twenty-eight">
                28+
              </span>
              <span className="info-stats-popup popup-info-thirty">30+</span>
            </div>
            <p className="popover-text mgo-umf-description-info">
              The higher the number, the greater the potency and rarity of
              Manuka honey.
            </p>
          </div>

          <div className="second-info-mgo">
            <h3 style={{ marginTop: "18px" }} className="umf-txt-info">
              <span className="umf-span-txt-info">MGO</span> is the key natural
              compound that gives Manuka honey its antibacterial strength.
            </h3>
            <div className="scale-row">
              <span className="info-stats-popup popup-info-ten">263+</span>
              <span className="info-stats-popup popup-info-fifteen">514+</span>
              <span className="info-stats-popup popup-info-twenty">829+</span>
              <span className="info-stats-popup popup-info-twenty-four">
                1122+
              </span>
              <span className="info-stats-popup popup-info-twenty-six">
                1282+
              </span>
              <span className="info-stats-popup popup-info-twenty-eight">
                1450+
              </span>
              <span className="info-stats-popup popup-info-thirty">1620+</span>
            </div>
            <p className="popover-text mgo-umf-description-info">
              The higher the number, the higher the antibacterial properties in
              the honey.
            </p>
          </div>

          <div className="popover-close close-button">Close</div>
        </div>
      </div>
    </div>

    <div className="optimiser-container">
      <div className="the-optimiser-heading">The Optimiser</div>
      <div className="optimiser-reveiws-container">
        <div>
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={RatingHeart}
              alt="rating-heart-icon"
              className="heart-rating"
            />
          ))}
        </div>
        <div className="reveiws">825 REVIEWS</div>
      </div>
    </div>

    <p className="optimiser-description">
      For those times in life when quality comes first. This pure UMF™ 24+
      Manuka Honey is powerfully active, sourced from wild and rugged locations
      around Aotearoa New Zealand and great for almost all uses. It has a full,
      delicious flavour and your body will love you for it.
    </p>

    <div className="certifications-container">
      <img src={CertificateHoney} alt="honey-logo" className="certificate" />
      <img src={CertificateNongmo} alt="nonmgo-logo" className="certificate" />
      <img
        src={CertificateResidue}
        alt="residue-logo"
        className="certificate"
      />
      <img src={CertificateFianz} alt="fianz-logo" className="certificate" />
      <img
        src={CertificateZealand}
        alt="zealand-logo"
        className="certificate"
      />
      <img src={CertificateMgo} alt="mgo-logo" className="certificate" />
    </div>

    <p className="size-select">SIZE (SELECT ONE)</p>
    <p className="variant">Variant: 125g | 4.4oz</p>
    <div className="variants-container">
      <img src={ManukaFirst} alt="first-manuka-img" className="variant-image" />
      <img
        src={ManukaSecond}
        alt="second-manuka-img"
        className="variant-image"
      />
      <img src={ManukaThird} alt="third-manuka-img" className="variant-image" />
      <img src={ManukaFifth} alt="fifth-manuka-img" className="variant-image" />
      <img
        src={ManukaFourth}
        alt="fourth-manuka-img"
        className="variant-image"
      />
      <img src={ManukaSixth} alt="sixth-manuka-img" className="variant-image" />
      <img
        src={ManukaSeventh}
        alt="seventh-manuka-img"
        className="variant-image"
      />
    </div>

    <p className="payment-options">PAYMENT OPTIONS (SELECT ONE)</p>
    <div className="payment-options-container">
      <div className="one-time-purchase">
        <div className="payment-options-internal-container">
          <p className="onetime-txt">
            One Time <br /> Purchase
          </p>
          <p className="onetime-txt">
            $55.88 <br /> USD
          </p>
        </div>
        <div className="refresh-container">
          <img src={RefreshIcon} alt="refresh-icon" className="refresh-icon" />
          <p className="subscription-question">What is a Subscription?</p>
        </div>
      </div>

      <div className="subscription">
        <div className="payment-options-internal-container">
          <p className="save-txt-subscription">
            Subscribe & save <br /> 20%
          </p>
          <p className="save-txt-subscription">
            $44.70 <br /> USD
          </p>
        </div>
      </div>
    </div>

    <p className="select-quantity-txt">SELECT QUANTITY</p>
    <div className="quantity-container">
      <div className="buttons-container">
        <button className="quantity-buttons">-</button>
        <button className="quantity-buttons">1</button>
        <button className="quantity-buttons">+</button>
      </div>
      <button className="add-to-cart-button">ADD TO CART</button>
    </div>

    <div className="bundle-container">
      <div className="bundle-slide-container">
        <img
          src={LeftArrow}
          alt="left-arrow-icon"
          className="left-arrow-bundle"
        />
        <span className="beauty-bundle-heading">Beauty Bundle</span>
        <img
          src={RightArrow}
          alt="right-arrow-icon"
          className="right-arrow-bundle"
        />
      </div>

      <div className="bundle-item-container">
        <div className="bundle-items">
          <div>
            <img src={UMF20} alt="umf20-img" className="bundle-image" />
            <p className="image-txt">UMF 20+</p>
            <p className="bundle-quantity quantity-txt">
              250g{" "}
              <img
                src={DownArrow}
                alt="down-arrow-icon"
                className="down-arrow"
              />
            </p>
          </div>
          <div className="plus-icon">+</div>
          <div>
            <img src={UMF24} alt="umf24-img" className="bundle-image" />
            <p className="image-txt">UMF 24+</p>
            <p className="bundle-quantity quantity-txt">
              250g{" "}
              <img
                src={DownArrow}
                alt="down-arrow-icon"
                className="down-arrow"
              />
            </p>
          </div>
          <div className="plus-icon">+</div>
          <div>
            <img
              src={WoodenSpoon}
              alt="wooden-spoon"
              className="bundle-image"
            />
            <p className="image-txt">Wooden spoon</p>
          </div>
        </div>

        <div className="bundle-price-container">
          <p>
            <span className="cost-decoration-txt">$478.75 USD</span>{" "}
            <span className="current-price">$430.88 USD</span>
            <span className="save-txt">save 10%</span>
          </p>
          <button className="add-bundle-to-cart-btn bundle-btn-txt">
            ADD BUNDLE TO CART
          </button>
        </div>
      </div>
    </div>

    <div className="colourclub-logo-container">
      <img
        src={ColourClubLogo}
        alt="colourclub-logo"
        className="colourclub-logo"
      />
      <p className="colourclub-txt">
        Colourclub members earn up to <span className="points-txt">56</span>{" "}
        reward points when buy this item. Sign up or log in
      </p>
    </div>

    <div className="delivery-section">
      <div className="free-delivery">
        <p className="delivery-txt">DELIVERY</p>
        <p className="delivery-txt">FREE DELIVERY ON ORDERS OVER $30</p>
      </div>
      <div>
        <p className="delivery-info">ESTIMATED DELIVERY DATE:</p>
        <p className="delivery-info">Jun 9 - Jun 13</p>
      </div>
    </div>

    <hr className="horizontal-line" />
    <p className="afterpay-txt">AFTER PAY</p>
    <p className="txt-logo">
      or 4 interest-free payments of $13.97 with{" "}
      <img src={AfterPayLogo} alt="afterpay-icon" className="paylater-logo" />{" "}
      <img src={InfoIcon} alt="info-icon" className="info-logo-paylater" />
    </p>

    <hr className="horizontal-line" />

    <p className="umf-stats-heading scale">UMF™ SCALE</p>
    <div className="stats-container">
      <p className="umf-stats umf10-border">UMF™ 10+</p>
      <p className="umf-stats umf15-border">UMF™ 15+</p>
      <p className="umf-stats umf20-border">UMF™ 20+</p>
      <p className="umf-stats umf24-border">UMF™ 24+</p>
      <p className="umf-stats umf26-border">UMF™ 26+</p>
      <p className="umf-stats umf28-border">UMF™ 28+</p>
      <p className="umf-stats umf30-border">UMF™ 30+</p>
    </div>

    <p className="umf-stats-heading">TASTE PROFILE</p>
    <div className="slider-container">
      <div className="slider-line"></div>
      <div className="slider-knob"></div>
    </div>
    <div className="clean-bold">
      <p>Clean & Intense</p>
      <p>Bold & intense</p>
    </div>
  </div>
);

export default LandingDescription;

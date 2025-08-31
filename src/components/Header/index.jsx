import logo from "../../assets/newZealandCo.png";
import userIcon from "../../assets/user-account.png";
import searchIcon from "../../assets/search-icon.png";
import dialogIcon from "../../assets/Button-dialog.png";
import "./index.css";

function Header() {
  return (
    <div className="newest-wrapper">
      <div className="navbar">
        <div className="navbar-question">Which Manuka is for me?</div>
        <ul className="shop-about">
          <li>Shop</li>
          <li>Explore</li>
        </ul>
        <div>
          <img src={logo} alt="New-zealand-co-logo" className="nav-logo" />
        </div>
        <ul className="shop-about">
          <li>About</li>
          <li>Rewards</li>
          <li>Contact</li>
        </ul>
        <div className="nav-icons">
          <img src={userIcon} alt="user-account" />
          <img
            src={searchIcon}
            alt="search-icon"
            style={{ marginLeft: "10px" }}
          />
          <img src={dialogIcon} alt="button-dialog" />
        </div>
      </div>
    </div>
  );
}

export default Header;

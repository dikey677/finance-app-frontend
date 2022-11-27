import { ReactComponent as Logout } from "../image/SVG/Exit.svg";
import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wallet">
        <span className="header__logo">
          <Wallet />
        </span>
        <h2 className="header__title">Wallet</h2>
      </div>
      <div className="header__user">
        <p className="header__name">Имя</p>
        <button type="submit" className="header__logout">
          <Logout />
        </button>
      </div>
    </div>
  );
};

export default Header;

import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";
import { ReactComponent as Currency } from "../image/SVG/Currency.svg";
import { ReactComponent as Statistic } from "../image/SVG/Statistic.svg";
import { ReactComponent as Logout } from "../image/SVG/Exit.svg";
import { ReactComponent as Home } from "../image/SVG/Home.svg";
import CurrencyComponent from "../components/Currency";

const DashboardPage = () => {
  return (
    <div className="db">
      <div className="db-header">
        <div className="db-header__wallet">
          <span className="db-geader__logo">
            <Wallet />
          </span>
          <h2 className="db-header__title">Wallet</h2>
        </div>
        <div className="db-header__user">
          <p className="db-header__current-user">Имя</p>
          <button type="submit" className="db-header__logout">
            <Logout />
          </button>
        </div>
      </div>

      <ul className="db-list">
        <li className="db-list__item">
          <button type="button" className="db-list__button ">
            <Home />
          </button>
        </li>
        <li className="db-list__item">
          <button type="button" className="db-list__button">
            <Statistic />
          </button>
        </li>
        <li className="db-list__item">
          <button type="button" className="db-list__button">
            <Currency />
          </button>
        </li>
      </ul>

      <CurrencyComponent />
    </div>
  );
};

export default DashboardPage;

import { ReactComponent as Currency } from "../image/SVG/Currency.svg";
import { ReactComponent as Statistic } from "../image/SVG/Statistic.svg";
import { ReactComponent as Home } from "../image/SVG/Home.svg";
import CurrencyComponent from "../components/Currency";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <ul className="dashboard-list">
        <li className="dashboard-list__item">
          <button type="button" className="dashboard-list__button ">
            <Home />
          </button>
        </li>
        <li className="dashboard-list__item">
          <button type="button" className="dashboard-list__button">
            <Statistic />
          </button>
        </li>
        <li className="dashboard-list__item">
          <button type="button" className="dashboard-list__button">
            <Currency />
          </button>
        </li>
      </ul>

      <CurrencyComponent />
    </div>
  );
};

export default DashboardPage;

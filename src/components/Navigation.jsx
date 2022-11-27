import { ReactComponent as Currency } from "../image/SVG/Currency.svg";
import { ReactComponent as Statistic } from "../image/SVG/Statistic.svg";
import { ReactComponent as Home } from "../image/SVG/Home.svg";
import { Link, Routes, Route } from "react-router-dom";
import CurrencyComponent from "../components/Currency";
import HomeTab from "../components/HomeTab";

const Navigation = () => {
  return (
    <>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="home">
            <button type="button" className="nav-list__button ">
              <Home />
            </button>
          </Link>
        </li>
        <li className="nav-list__item">
          <Link to="diagram">
            <button type="button" className="nav-list__button">
              <Statistic />
            </button>
          </Link>
        </li>
        <li className="anv-list__item">
          <Link to="currency">
            <button type="button" className="nav-list__button">
              <Currency />
            </button>
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="home" element={<HomeTab />} />
        <Route path="currency" element={<CurrencyComponent />} />
      </Routes>

      {/* <Outlet /> */}
    </>
  );
};
export default Navigation;

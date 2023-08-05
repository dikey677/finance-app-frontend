import { ReactComponent as Currency } from "../image/SVG/Currency.svg";
import { ReactComponent as Statistic } from "../image/SVG/Statistic.svg";
import { ReactComponent as StatTablet } from "../image/SVG/statTablet.svg";
import { ReactComponent as Home } from "../image/SVG/Home.svg";
import { ReactComponent as HomeTablet } from "../image/SVG/homeTablet.svg";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import CurrencyComponent from "../components/Currency";
import HomeTab from "../components/HomeTab";
import Table from "../components/Table";
import Chart from "../components/Chart";
import React, { Fragment } from "react";
import Media from "react-media";

const Navigation = () => {
  return (
    <>
      <Media
        queries={{
          small: "(min-width: 320px) and (max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {
              // Media screen and (min-width: 320px) and (max-width: 767px)
              matches.small && (
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
                    <li className="nav-list__item">
                      <Link to="currency">
                        <button type="button" className="nav-list__button">
                          <Currency />
                        </button>
                      </Link>
                    </li>
                  </ul>

                  <Routes>
                    <Route path="home" element={<HomeTab />} />
                    <Route path="diagram" element={<Chart />} />
                    <Route path="currency" element={<CurrencyComponent />} />
                  </Routes>

                  <Outlet />
                </>
              )
            }
            {
              // Media screen and (min-width: 768px) and (max-width: 1199px)
              matches.medium && (
                <>
                  <div className="nav">
                    <div className="nav-tablet">
                      <ul className="nav-list">
                        <li className="nav-list__item">
                          <Link to="home" className="nav-list__item-link">
                            <button type="button" className="nav-list__button ">
                              <HomeTablet />
                            </button>
                            <p className="nav-list__home">Главная</p>
                          </Link>
                        </li>
                        <li className="nav-list__item">
                          <Link to="diagram" className="nav-list__item-link">
                            <button type="button" className="nav-list__button">
                              <StatTablet />
                            </button>
                            <p className="nav-list__stat">Статистика</p>
                          </Link>
                        </li>
                      </ul>

                      <HomeTab />
                    </div>

                    <div className="nav-currency">
                      <CurrencyComponent />
                    </div>
                  </div>
                  <Routes>
                    <Route path="home" element={<Table />} />
                    <Route path="diagram" element={<Chart />} />
                  </Routes>
                  <Outlet />
                </>
              )
            }
            {
              // Media screen and (min-width: 1200px)
              matches.large && (
                <>
                  <div className="nav">
                    <div className="nav-desktop">
                      <ul className="nav-list">
                        <li className="nav-list__item">
                          <Link to="home" className="nav-list__item-link">
                            <button type="button" className="nav-list__button ">
                              <HomeTablet />
                            </button>
                            <p className="nav-list__home">Главная</p>
                          </Link>
                        </li>
                        <li className="nav-list__item">
                          <Link to="diagram" className="nav-list__item-link">
                            <button type="button" className="nav-list__button">
                              <StatTablet />
                            </button>
                            <p className="nav-list__stat">Статистика</p>
                          </Link>
                        </li>
                      </ul>

                      <HomeTab />
                      <CurrencyComponent />
                    </div>

                    <div className="nav-linkPage">
                      <Routes>
                        <Route path="home" element={<Table />} />
                        <Route path="diagram" element={<Chart />} />
                      </Routes>
                      <Outlet />
                    </div>
                  </div>
                </>
              )
            }
          </Fragment>
        )}
      </Media>
    </>
  );
};
export default Navigation;

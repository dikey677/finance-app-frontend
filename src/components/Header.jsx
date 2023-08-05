import Media from "react-media";
import React, { Fragment } from "react";

import { ReactComponent as Logout } from "../image/SVG/Exit.svg";
import { ReactComponent as LogoMobile } from "../image/SVG/LogoMobile.svg";
import { ReactComponent as LogoTablet } from "../image/SVG/Wallet.svg";
import { ReactComponent as LogoDesktop } from "../image/SVG/Wallet40x40.svg";

const Header = () => {
  return (
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
              <div className="header">
                <div className="header__wallet">
                  <span className="header__logo">
                    <LogoMobile />
                  </span>
                </div>
                <div className="header__user">
                  <p className="header__user-name">Имя</p>
                  <button type="submit" className="header__logout">
                    <Logout />
                  </button>
                </div>
              </div>
            )
          }
          {
            // Media screen and (min-width: 768px) and (max-width: 1199px)
            matches.medium && (
              <div className="header">
                <div className="header__wallet">
                  <span className="header__logo">
                    <LogoTablet />
                  </span>
                  <h2 className="header__title">Wallet</h2>
                </div>
                <div className="header__user">
                  <p className="header__name">Имя</p>
                  <div className="header__logout">
                    <button type="submit" className="header__button">
                      <Logout />
                    </button>
                    <p className="header__exit">Выйти</p>
                  </div>
                </div>
              </div>
            )
          }
          {
            // Media screen and (min-width: 1200px)
            matches.large && (
              <div className="header">
                <div className="header__wallet">
                  <span className="header__logo">
                    <LogoDesktop />
                  </span>
                  <h2 className="header__title">Wallet</h2>
                </div>
                <div className="header__user">
                  <p className="header__name">Имя</p>
                  <div className="header__logout">
                    <button type="submit" className="header__button">
                      <Logout />
                    </button>
                    <p className="header__exit">Выйти</p>
                  </div>
                </div>
              </div>
            )
          }
        </Fragment>
      )}
    </Media>
  );
};

export default Header;

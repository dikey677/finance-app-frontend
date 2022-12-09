import Media from "react-media";
import React, { Fragment } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { ReactComponent as EllipsePurple } from "../image/SVG/EllipsePurple.svg";
import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";

const DashboardPage = () => {
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
              <div className="db">
                <Header />
                <Navigation />
              </div>
            )
          }
          {
            // Media screen and (min-width: 768px) and (max-width: 1199px)
            matches.medium && (
              <div className="db">
                <Header />
                <Navigation />
                <EllipsePurple className="db__ellipsePurple" />
                <EllipseСoral className="db__ellipseCoral" />
              </div>
            )
          }
          {
            // Media screen and (min-width: 1200px)
            matches.large && (
              <div className="db">
                <Header />
                <Navigation />
                <EllipsePurple className="db__ellipsePurple" />
                <EllipseСoral className="db__ellipseCoral" />
              </div>
            )
          }
        </Fragment>
      )}
    </Media>
  );
};

export default DashboardPage;

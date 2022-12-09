import Table from "./Table";
import React, { Fragment } from "react";
import Media from "react-media";

const Chart = () => {
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
              // Media screen and (min-width: 320px) and (max-width: 767px)c
              matches.small && (
                <>
                  <div className="chart">
                    <p className="chart__title">Ваш баланс</p>
                    <span className="chart__balance">₴ 24 000.00</span>
                  </div>

                  <div className="table">
                    <Table />
                  </div>
                </>
              )
            }
            {
              // Media screen and (min-width: 768px) and (max-width: 1199px)
              matches.medium && (
                <div className="chart">
                  <p className="chart__title">Ваш баланс</p>
                  <span className="chart__balance">₴ 24 000.00</span>
                </div>
              )
            }
          </Fragment>
        )}
      </Media>
    </>
  );
};

export default Chart;

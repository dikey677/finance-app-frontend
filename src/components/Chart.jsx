import Table from "./Table";
import React, { Fragment } from "react";
import Media from "react-media";

const Chart = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 480px)",
          medium: "(min-width: 481px) and (max-width: 768px)",
          large: "(min-width: 769px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {
              // Media screen and (max-width: 480px)
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
              // Media screen and (min-width: 481px) and (max-width: 768px)
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

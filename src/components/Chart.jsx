import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { Fragment } from "react";
import Media from "react-media";
import TableStat from "./TableStat";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut = () => {
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 8, 10, 3],
        backgroundColor: [
          "#FED057",
          "#FFD8D0",
          "#FD9498",
          "#C5BAFF",
          "#6E78E8",
          "#4A56E2",
          "#81E1FF",
          "#24CCA7",
          "#00AD84",
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    // <Doughnut data={data} style={{ width: "320px", height: "320px" }} />;

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
                  <div className="stat">
                    <p className="stat__title">Статистика</p>
                    <div className="stat__doughnut">
                      <Doughnut data={data} />
                    </div>

                    <TableStat />
                  </div>
                </>
              )
            }
            {
              // Media screen and (min-width: 768px) and (max-width: 1199px)
              matches.medium && (
                <>
                  <div
                    style={{
                      width: "320px",
                      height: "320px",
                    }}
                  >
                    <Doughnut data={data} />
                  </div>
                </>
              )
            }
            {
              // Media screen and (min-width: 768px) and (max-width: 1199px)
              matches.large && (
                <>
                  <div>
                    <h1>Статистика</h1>
                    <div
                      style={{
                        width: "320px",
                        height: "320px",
                      }}
                    >
                      <Doughnut data={data} />
                    </div>
                    <div></div>
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

export default ChartDoughnut;

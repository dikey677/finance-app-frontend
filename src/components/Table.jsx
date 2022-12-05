import Media from "react-media";
import React, { Fragment } from "react";

const Table = () => {
  return (
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
            // Media screen and max-width: 480px
            matches.small && (
              <table
                style={{
                  margin: "30px auto 0",
                  background: "#FFFFFF",
                  width: "280px",
                  height: "282px",
                  borderRadius: "10px",
                  display: "block",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #DCDCDF",
                      width: "280px",
                      height: "47px",
                      justifyContent: "space-between",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Дата</th>
                    <td>04.01.19</td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #DCDCDF",
                      justifyContent: "space-between",
                      width: "280px",
                      height: "47px",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Тип</th>
                    <td>-</td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #DCDCDF",
                      justifyContent: "space-between",
                      width: "280px",
                      height: "47px",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Категория</th>
                    <td>Разное</td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #DCDCDF",
                      justifyContent: "space-between",
                      width: "280px",
                      height: "47px",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Комментарий</th>
                    <td>Подарок жене</td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #DCDCDF",
                      justifyContent: "space-between",
                      width: "280px",
                      height: "47px",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Сумма</th>
                    <td>
                      <span
                        style={{
                          // fontFamily: "Circe",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#FF6596",
                        }}
                      >
                        300.00
                      </span>
                    </td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "280px",
                      height: "47px",
                      padding: "12px 20px",
                    }}
                  >
                    <th>Баланс</th>
                    <td>6900.00</td>
                  </tr>
                </tbody>
              </table>
            )
          }
        </Fragment>
      )}
    </Media>
  );
};

export default Table;

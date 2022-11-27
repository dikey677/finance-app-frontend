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
          {matches.small && (
            <table
              style={{
                margin: "30px auto 0",
                background: "#FFFFFF",
                width: "280px",
                height: "282px",
                borderRadius: "10px",
                display: "block",
              }}
            >
              <tbody
                style={{
                  display: "block",
                }}
              >
                <tr
                  style={{
                    borderBottom: "1px solid #DCDCDF",
                  }}
                >
                  <th>Дата</th>
                  <td>04.01.19</td>
                </tr>
                <tr>
                  <th>Тип</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Категория</th>
                  <td>Разное</td>
                </tr>
                <tr>
                  <th>Комментарий</th>
                  <td>Подарок жене</td>
                </tr>
                <tr>
                  <th>Сумма</th>
                  <td>300.00</td>
                </tr>
                <tr>
                  <th>Баланс</th>
                  <td>6900.00</td>
                </tr>
              </tbody>
            </table>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default Table;

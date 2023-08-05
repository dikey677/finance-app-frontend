import Media from "react-media";
import React, { Fragment, useState } from "react";
import ModalAddTransaction from "../components/ModalAddTransaction";

const Table = () => {
  const [modalActive, setModalActive] = useState(false);
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
              <>
                <table
                  style={{
                    margin: "30px auto 0",
                    background: "#FFFFFF",
                    width: "280px",
                    height: "282px",
                    borderRadius: "10px",
                    display: "flex",
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
                            fontFamily: "Circe",
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

                <button
                  type="button"
                  className="button-add"
                  onClick={() => setModalActive(true)}
                ></button>

                <ModalAddTransaction
                  active={modalActive}
                  setActive={setModalActive}
                />
              </>
            )
          }
          {
            // Media screen and (min-width: 768px) and (max-width: 1199px)
            matches.medium && (
              <>
                <table className="table-tablet">
                  <tbody>
                    <tr>
                      <th>Дата</th>
                      <th>Тип</th>
                      <th>Категория</th>
                      <th>Комментарий</th>
                      <th>Сумма</th>
                      <th>Баланс</th>
                    </tr>
                    <tr>
                      <td>04.01.19</td>
                      <td>-</td>
                      <td>Разное</td>
                      <td>Подарок жене</td>
                      <td>300.00</td>
                      <td>6 900.00</td>
                    </tr>
                    <tr>
                      <td>05.01.19</td>
                      <td>+</td>
                      <td>Регулярный доход</td>
                      <td>Бонус за январь</td>
                      <td>8 000.00</td>
                      <td>14 900.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>-</td>
                      <td>Машина</td>
                      <td>Масло</td>
                      <td>1 000.00</td>
                      <td>13 900.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>-</td>
                      <td>Продукты</td>
                      <td>Овощи на неделю</td>
                      <td>280.00</td>
                      <td>13 870.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>+</td>
                      <td>Нерегулярный доход</td>
                      <td>Подарок на др</td>
                      <td>1 000.00</td>
                      <td>14 870.00</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  className="button-add"
                  onClick={() => setModalActive(true)}
                ></button>

                <ModalAddTransaction
                  active={modalActive}
                  setActive={setModalActive}
                />
              </>
            )
          }
          {
            // Media screen and (min-width: 1200px)
            matches.large && (
              <>
                <table className="table-tablet">
                  <tbody>
                    <tr>
                      <th>Дата</th>
                      <th>Тип</th>
                      <th>Категория</th>
                      <th>Комментарий</th>
                      <th>Сумма</th>
                      <th>Баланс</th>
                    </tr>
                    <tr>
                      <td>04.01.19</td>
                      <td>-</td>
                      <td>Разное</td>
                      <td>Подарок жене</td>
                      <td>300.00</td>
                      <td>6 900.00</td>
                    </tr>
                    <tr>
                      <td>05.01.19</td>
                      <td>+</td>
                      <td>Регулярный доход</td>
                      <td>Бонус за январь</td>
                      <td>8 000.00</td>
                      <td>14 900.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>-</td>
                      <td>Машина</td>
                      <td>Масло</td>
                      <td>1 000.00</td>
                      <td>13 900.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>-</td>
                      <td>Продукты</td>
                      <td>Овощи на неделю</td>
                      <td>280.00</td>
                      <td>13 870.00</td>
                    </tr>
                    <tr>
                      <td>07.01.19</td>
                      <td>+</td>
                      <td>Нерегулярный доход</td>
                      <td>Подарок на др</td>
                      <td>1 000.00</td>
                      <td>14 870.00</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  className="button-add"
                  onClick={() => setModalActive(true)}
                ></button>

                <ModalAddTransaction
                  active={modalActive}
                  setActive={setModalActive}
                />
              </>
            )
          }
        </Fragment>
      )}
    </Media>
  );
};

export default Table;

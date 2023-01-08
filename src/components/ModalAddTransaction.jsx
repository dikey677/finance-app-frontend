import Media from "react-media";
import React, { Fragment } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";

const ModalAddTransaction = ({ active, setActive }) => {
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  // const [date, setDate] = useState(new Date());
  // const [spend, setSpend] = useState(true);
  // const [comment, setСomment] = useState("");

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
            matches.small && <div></div>
          }
          {
            // Media screen and (min-width: 768px) and (max-width: 1199px)
            matches.medium && <></>
          }
          {
            // Media screen and (min-width: 1200px)
            matches.large && (
              <div
                className={active ? "modal active" : "modal"}
                onClick={() => setActive(false)}
              >
                <div
                  className="modal__content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <form className="modal__form">
                    <p className="modal__title">Добавить транзакцию</p>

                    <div className="modal__switch">
                      {/* По-умолчанию выбран тип "Расход" */}
                      <label>
                        <span
                          className={
                            checked
                              ? "modal__profit--checked modal__unprofit"
                              : "modal__profit"
                          }
                        >
                          Доход
                        </span>
                        <input
                          type="checkbox"
                          value={false}
                          active={checked}
                          defaultChecked={false}
                          onClick={() => setChecked(true)}
                        />
                        <span
                          className={
                            checked
                              ? "modal__unprofit--checked modal__profit"
                              : "modal__unprofit"
                          }
                        >
                          Расход
                        </span>
                      </label>
                    </div>

                    <select
                      className="modal__select"
                      placeholder="Выберите категорию"
                      name="category"
                    >
                      <option value="Основной">Основной</option>
                      <option value="Еда">Еда</option>
                      <option value="Авто">Авто</option>
                      <option value="Развитие">Развитие</option>
                      <option value="Дети">Дети</option>
                      <option value="Дом">Дом</option>
                      <option value="Образование">Образование</option>
                      <option value="Остальное">Остальное</option>
                    </select>

                    <div className="modal__grid">
                      <input
                        className="modal__pay"
                        type="text"
                        placeholder="0.00"
                      />
                      <Datetime
                        inputProps={{ className: "modal__calendar" }}
                        value={date}
                      />
                    </div>

                    <input
                      className="modal__comment"
                      type="text"
                      placeholder="Комментарий"
                    />

                    <button type="submit" className="modal__button-add">
                      Добавить
                    </button>
                    <button type="button" className="modal__button-cancel">
                      Отмена
                    </button>
                  </form>
                </div>
              </div>
            )
          }
        </Fragment>
      )}
    </Media>
  );
};

export default ModalAddTransaction;

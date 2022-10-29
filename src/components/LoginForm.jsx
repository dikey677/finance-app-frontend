import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="signForm">
      <form className="signForm__form--login">
        <ul className="signForm__list">
          <li className="signForm__item">
            <Wallet />
          </li>
          <li className="signForm__item">
            <h1 className="signForm__wallet">Wallet</h1>
          </li>
        </ul>

        <input
          className="signForm__inputEmail signForm__input--all"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="signForm__inputPass signForm__input--all"
          type="password"
          placeholder="Пароль"
        />

        <button type="submit" className="signForm__button--login">
          Вход
        </button>
        <button type="button" className="signForm__button--login">
          <Link className="signForm__button--link" to="/signup">
            Регистрация
          </Link>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

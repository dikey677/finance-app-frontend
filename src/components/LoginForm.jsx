import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";

const LoginForm = () => {
  return (
    <div className="signForm">
      <form className="signForm__form">
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
        <input
          className="signForm__inputConfPass signForm__input--all"
          type="password"
          placeholder="Подтвердите пароль"
        />
        <input
          className="signForm__inputName signForm__input--all"
          type="name"
          placeholder="Ваше имя"
        />

        <button type="submit" className="signForm__button">
          Вход
        </button>
        <button type="button" className="signForm__button">
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

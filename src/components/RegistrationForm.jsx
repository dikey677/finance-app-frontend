import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (1 > values.name.length > 12) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.pass) {
    errors.pass = "Required";
  } else if (values.pass.length > 20) {
    errors.pass = "Must be 20 characters or less";
  }

  if (!values.confPass) {
    errors.confPass = "Required";
  } else if (values.confPass.length > 20) {
    errors.confPass = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
      confPass: "",
      name: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="registrationForm">
      <form className="registrationForm__form">
        <ul className="registrationForm__list">
          <li className="registrationForm__item">
            <Wallet />
          </li>
          <li className="registrationForm__item">
            <h1 className="registrationForm__wallet">Wallet</h1>
          </li>
        </ul>

        <input
          className="registrationForm__inputEmail registrationForm__input--all"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="registrationForm__inputPass registrationForm__input--all"
          type="password"
          placeholder="Пароль"
        />
        <input
          className="registrationForm__inputConfPass registrationForm__input--all"
          type="password"
          placeholder="Подтвердите пароль"
        />
        <input
          className="registrationForm__inputName registrationForm__input--all"
          type="name"
          placeholder="Ваше имя"
        />

        <button type="submit" className="registrationForm__button">
          Регистрация
        </button>
        <button type="button" className="registrationForm__button">
          Вход
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

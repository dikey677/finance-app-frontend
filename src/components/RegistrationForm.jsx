import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPass: "",
      name: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (1 > values.name.length > 12) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.pass.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.confirmPass) {
      errors.confPass = "Required";
    } else if (values.confPass.length > 20) {
      errors.confirmPass = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <div className="signForm">
      <form className="signForm__form">
        <ul className="signForm__list--register">
          <li className="signForm__item">
            <Wallet />
          </li>
          <li className="signForm__item">
            <h1 className="signForm__wallet">Wallet</h1>
          </li>
        </ul>

        <input
          className="signForm__inputEmail signForm__input--all"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          className="signForm__inputPass signForm__input--all"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <input
          className="signForm__inputConfPass signForm__input--all"
          id="confirmPass"
          name="confirmPass"
          type="confirmPass"
          placeholder="Подтвердите пароль"
          onChange={formik.handleChange}
          value={formik.values.confirmPass}
        />
        <input
          className="signForm__inputName signForm__input--all"
          id="name"
          name="name"
          type="name"
          placeholder="Ваше имя"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <button type="submit" className="signForm__button">
          Регистрация
        </button>

        <Link className="signForm__link" to="/signin">
          <button type="button" className="signForm__button--link">
            Вход
          </button>
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;

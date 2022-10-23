// import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";
import { ReactComponent as Wallet } from "../image/SVG/Wallet.svg";
import { useFormik } from 'formik';

const RegistrationForm = () => {
    const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
    });
    
    return (
        <div className="registration-form">
                {/* <EllipseСoral className="ellipseImg2"/> */}
                <form className="registration-form__fields">
                    <ul className="registration-form__list">
                        <li className="registration-form__item"><Wallet/></li>
                        <li className="registration-form__item"><h1 className="registration-form__wallet">Wallet</h1></li>
                    </ul>
                    
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Пароль" />
                    <input type="text" placeholder="Подтвердите пароль" />
                    <input type="text" placeholder="Ваше имя" />
                    <button type="submit" className="registration-form__button">ВХОД</button>
                    <button type="submit">РЕГИСТРАЦИЯ</button>
                </form>
        </div>)
}

export default RegistrationForm
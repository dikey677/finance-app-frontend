import RegistrationForm from "../components/RegistrationForm";
import { ReactComponent as EllipsePurple } from "../image/SVG/EllipsePurple.svg";
import { ReactComponent as GroupSignUp } from "../image/SVG/GroupSignUp.svg";
import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";


const RegistrationPage = () => {
    return (
        <div className="registration-page">
            <div className="registration-page__wallet">
                <GroupSignUp className="groupImg"/>
                <EllipsePurple className="eclipseImg" />
                <EllipseСoral className="ellipseImg2"/>
                <title className="title">Finance App</title>
            </div>
            <RegistrationForm />
        </div>

    )
}
export default RegistrationPage
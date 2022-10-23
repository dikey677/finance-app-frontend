import RegistrationForm from "../components/RegistrationForm";
import { ReactComponent as EllipsePurple } from "../image/SVG/EllipsePurple.svg";
import { ReactComponent as GroupSignUp } from "../image/SVG/GroupSignUp.svg";
import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";

const RegistrationPage = () => {
  return (
    <div className="registrationPage">
      <div className="registrationPage__container">
        <GroupSignUp className="registrationPage__imgGroup" />
        <EllipsePurple className="registrationPage__imgEllipsePurple" />
        <EllipseСoral className="registrationPage__imgEllipseCoral" />
        <title className="registrationPage__title">Finance App</title>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;

import RegistrationForm from "../components/RegistrationForm";
import { ReactComponent as EllipsePurple } from "../image/SVG/EllipsePurple.svg";
import { ReactComponent as GroupSignUp } from "../image/SVG/GroupSignUp.svg";
import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";

const RegistrationPage = () => {
  return (
    <div className="signPage">
      <div className="signPage__container">
        <GroupSignUp className="signPage__imgGroup" />
        <EllipsePurple className="signPage__imgEllipsePurple" />
        <EllipseСoral className="signPage__imgEllipseCoral" />
        <title className="signPage__title">Finance App</title>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;

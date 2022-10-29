import LoginForm from "../components/LoginForm";
import { ReactComponent as EllipsePurple } from "../image/SVG/EllipsePurple.svg";
import { ReactComponent as GroupSignIn } from "../image/SVG/GroupSignIn.svg";
import { ReactComponent as EllipseСoral } from "../image/SVG/EllipseCoral.svg";

const LoginPage = () => {
  return (
    <div className="signPage">
      <div className="signPage__container">
        <GroupSignIn className="signPage__imgGroup--login" />
        <EllipsePurple className="signPage__imgEllipsePurple" />
        <EllipseСoral className="signPage__imgEllipseCoral" />
        <title className="signPage__title">Finance App</title>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

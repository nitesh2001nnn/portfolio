import { useState } from "react";
import Emailinput from "../../../global/components/inputs/email-input";
import "./login.scss";
import PasswordInput from "../../../global/components/inputs/password-input";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    isValid: false,
    label: "Enter Email",
    error: "",
  });

  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header bold-text-medium">Login</div>
        <div className="login-credential">
          <Emailinput
            parentState={email}
            parentStateChanger={setEmail}
          ></Emailinput>
          <PasswordInput></PasswordInput>
        </div>

        <div className="button-container">
          <button className="primary-button">Login</button>
          <div
            className="forgot-password text-body-xxs"
            onClick={() => navigate("/reset-password")}
          >
            Forgot Password ?
          </div>
        </div>

        <div className="signup-route">
          <span className="text-body-xxs">Don't have an account ?</span> -{" "}
          <span
            className="signup-text bold-text-medium-xxs"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
  return <div className="login-wrapper">login-name</div>;
};

export default Login;

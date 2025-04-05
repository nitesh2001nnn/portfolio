import { useState } from "react";
import "./login-screen.scss";
import { Switch } from "../../../global/components/switch/Switch";
import Login from "./login";
import Otp from "../otp-handler/otp";

const Loginscreen = () => {
  const [screenInfo, setScreenInfo] = useState<any>({
    screenName: "login",
    data: {},
  });

  const handleScreenChange = (screenData: any) => {
    setScreenInfo(screenData);
  };
  return (
    <div className="login-screen-wrapper">
      <div className="login-blend-screen">
        <div className="login-screen-left-side">
          <div className="profile-icon-container">
            <img src="assets/icons/profile-icons.png"></img>
          </div>
          <div className="welcome-greeting">
            <div className="bold-text-medium">Good to see you again!</div>
            <div className="sub-heading">
              Your journey starts with a single sign-in.
            </div>
          </div>
          <div className="login-animation">
            <img src="assets/icons/login.gif"></img>
          </div>
        </div>
        <div className="login-screen-right-side">
          <Switch test={screenInfo?.screenName}>
            <Login value="login" changeScreen={handleScreenChange}></Login>
            <Otp value={"email-otp"}></Otp>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;

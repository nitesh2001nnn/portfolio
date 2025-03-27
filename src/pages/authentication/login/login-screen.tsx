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
      <div className="login-screen-left-side">left side</div>
      <div className="login-screen-right-side">
        <Switch test={screenInfo?.screenName}>
          <Login value="login" changeScreen={handleScreenChange}></Login>
          <Otp value={"email-otp"}></Otp>
        </Switch>
      </div>
    </div>
  );
};

export default Loginscreen;

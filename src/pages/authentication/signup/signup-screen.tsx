import { useState } from "react";
import { Switch } from "../../../global/components/switch/Switch";
import Signup from "./signup";
import Otp from "../otp-handler/otp";
import "./signup-screen.scss";
import Accountblocked from "../account-blocked/account-blocked";

const Signupscreen = () => {
  const [changeScreenInfo, setScreenInfo] = useState<any>({
    screenName: "account-blocked",
    data: {},
  });

  const handleScreen = (value: any) => {
    setScreenInfo(value);
  };

  return (
    <div className="signup-screen-container">
      <div className="signup-blend-screen">
        <div className="signup-welcome-screen">
          <div className="profile-icon-container">
            <img src="assets/icons/profile-icons.png"></img>
          </div>
          <div className="welcome-greeting">
            <div className="bold-text-medium">Welcome,Kudos</div>
            <div className="sub-heading">
              Go for onboarding, Enjoy the learning
            </div>
          </div>
          <div className="signup-animation">
            <img src="assets/icons/online-student.gif"></img>
          </div>
        </div>
        <div className="signup-switch-screen">
          <Switch test={changeScreenInfo?.screenName}>
            <Signup value={"signup"} changeScreen={handleScreen} />
            <Otp value={"email-otp"} changeScreen={handleScreen} />
            <Accountblocked
              value={"account-blocked"}
              changeScreen={handleScreen}
              time={10}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Signupscreen;

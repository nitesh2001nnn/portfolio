import { useEffect, useState } from "react";
import "./forgot-password-screen.scss";
import { Switch } from "../../../global/components/switch/Switch";
import Emailrequest from "./email-request/email-request";
import Checkemail from "./check-email/check-email";
import Forgotpassword from "./forgot-password";
import { useSearchParams } from "react-router-dom";

const Forgotpasswordscreen = () => {
  const [screenInfo, setScreenInfo] = useState({
    screenName: "email-request",
    data: {},
  });

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    console.log("token", token);
    if (token) {
      setScreenInfo((prev) => {
        return {
          ...prev,
          screenName: "reset-password",
        };
      });
    }
  }, [token]);

  const handleScreenChange = (screenDetail: any) => {
    setScreenInfo(screenDetail);
  };

  return (
    <div className="reset-password-screen-wrapper">
      <div className="reset-blend-screen">
        <div className="reset-left-side">
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
        <div className="reset-right-side">
          <div className="reset-pass-right-wrapper">
            <div className="reset-pass-right-container">
              <Switch test={screenInfo?.screenName}>
                <Forgotpassword value={"reset-password"}></Forgotpassword>
                <Emailrequest></Emailrequest>
                <Checkemail></Checkemail>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpasswordscreen;

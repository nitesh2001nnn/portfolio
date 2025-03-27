import { useEffect, useState } from "react";
import Otpboxes from "../../../global/components/otp-boxes/otp-boxes";
import "./otp.scss";
import Countdowntimer from "../../../global/components/countdown-timer/countdown-timer";

const Otp = (props: any) => {
  const [otp, setOtp] = useState<any>("");
  const [timer, setTimer] = useState<any>("0");
  useEffect(() => {
    console.log("otp", otp);
  }, [otp]);

  return (
    <div className="otp-wrapper">
      <div className="otp-container">
        <div className="otp-header">
          <div className="bold-text-medium">OTP Verification</div>
          <div className="bold-text-small otp-head-label">
            Otp sent to your email successfully,Kindly check your email !!
          </div>
          <div className="bold-text-small sub-otp-head">
            want to change the email.{" "}
            <span className="change-text">Change</span>
          </div>
        </div>
        <div className="otp-boxes">
          <Otpboxes onChange={setOtp} value={otp} length={6}></Otpboxes>
        </div>
        <div className="button-container">
          <button className="secondary-button">
            {timer > 0 ? <Countdowntimer initialTimer={timer} /> : "Resend"}
          </button>

          <button className="primary-button">Verify OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;

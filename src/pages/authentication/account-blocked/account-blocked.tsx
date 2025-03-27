import Countdowntimer from "../../../global/components/countdown-timer/countdown-timer";
import "./account-blocked.scss";

const Accountblocked = (props: any) => {
  return (
    <div className="acc-block-wrapper">
      <div className="acc-block-container">
        <div className="acc-block-header">
          <div className="bold-text-medium-xs">
            {props.time > 0 ? "Account Blocked !!" : "Go for OTP Verification"}
          </div>
          {props.time > 0 && (
            <div className="bold-text-small">
              Due to your 3 attempt failed,{" "}
              <span className="newline">
                You are blocked for next 5 minutes !!
              </span>
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="secondary-button">
            {props.time > 0 ? (
              <Countdowntimer initialTimer={props.time} />
            ) : (
              "Resend OTP"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accountblocked;

import { forwardRef } from "react";
import "./inputs.scss";

const Input = forwardRef((props: any, ref: any) => {
  const { label, errorText, successText,isValid, ...rest } = props;

  return (
    <div className="input-wrapper">
      <div className="input-container">
      {label && <label className="input-label text-body-xxs">{label}</label>}
      <input
        className={`input-comp text-body-xs ${errorText && "error-div"} ${
          isValid && "success-div"
        }`}
        ref={ref}
        {...rest}
      />

      </div>
      
      <div className="input-warning-container">
        {errorText && (
          <div className="input-error text-body-xxs">
            <img src="/assets/icons/error-icon.png"></img>
            {errorText}
          </div>
        )}

        {successText && (
          <div className="input-success text-body-xxs">
            <img src="/global/icons/success-icon.png"></img>
            {successText}
          </div>
        )}
      </div>
    </div>
  );
});
export default Input;

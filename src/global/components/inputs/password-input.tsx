import { forwardRef, useState } from "react";
import Input from "./inputs";
import "./inputs.scss";

const PasswordInput = forwardRef((props: any, ref) => {
  const { label, value, errorText, successText, ...rest } = props;
  const [isPasswordKeyVisible, setPasswordKeyVisible] = useState(false);
  const handlePasswordVisible = () => {
    setPasswordKeyVisible(!isPasswordKeyVisible);
  };
  return (
    <div className="password-container">
      <Input
        value={value}
        ref={ref}
        label={label || "password"}
        type={!isPasswordKeyVisible ? "password" : "text"}
        errorText={errorText}
        successText={successText}
        {...rest}
      />

      <div className="password-eye-icon" onClick={handlePasswordVisible}>
        <img src={isPasswordKeyVisible?"/global/icons/eye.png":"global/icons/invisible.png"}></img>

      </div>
    </div>
  );
});

export default PasswordInput;

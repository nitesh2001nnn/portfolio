import Input from "../../../global/components/inputs/inputs";
import PasswordInput from "../../../global/components/inputs/password-input";
import "./temp-three.scss";

const Tempthree = (props: any) => {
  console.log("props", props);
  return (
    <div className="temp-three-container">
      <div className="form-container">
        <div className="first-last-name">
          <div className="first-name">
            <Input label={"First Name"} errorText={"error in input"} />
          </div>
          <div className="last-name">
            <Input label={"Last Name"} successText={"verified"} />
          </div>
        </div>
        <div className="password-container">
            <PasswordInput successText="pasword is verified"/>

        </div>
      </div>
    </div>
  );
};

export default Tempthree;

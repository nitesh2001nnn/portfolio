import { useEffect, useState } from "react";
import Input from "./inputs";
import { regexConstant } from "../../helpers/regex";

type emailProps = {
  label: string;
  value: string;
  onEmailValueChange: (item: any) => void;
  isTouched: boolean;
  isValid: boolean;
};

type emailComponentProps = {
  parentState: any;
  parentStateChanger: any;
};

const Emailinput = ({
  parentState,
  parentStateChanger,
}: emailComponentProps) => {
  //   const [emailValue, setEmailValue] = useState({
  //     value: value,
  //     isTouched: false,
  //     errorText: "",
  //     isValid: false,
  //   });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    parentStateChanger((prevState: emailProps) => {
      return {
        ...prevState,
        ...{ value: e.target.value.trim() },
      };
    });
  };

  const validateEmailField = () => {
    let errorText = "";
    let isValid = false;

    if (parentState.isTouched) {
      if (parentState.value == "") {
        errorText = "Email is required";
        isValid = false;
      } else if (!regexConstant.emailRegex.test(parentState.value)) {
        errorText = "Enter a valid email";
        isValid = false;
      } else {
        isValid = true;
      }
    }
    parentStateChanger((prev: emailProps) => {
      return {
        ...prev,
        error: errorText,
        isValid: isValid,
      };
    });
  };

  const onEmailBlur = () => {
    parentStateChanger((prev: emailProps) => {
      return {
        ...prev,
        isTouched: true,
      };
    });
  };

  useEffect(() => {
    console.log("parentState", parentState);
  }, [parentState]);

  useEffect(() => {
    validateEmailField();
  }, [parentState?.isTouched, parentState.value]);
  return (
    <>
      <Input
        label={parentState.label}
        value={parentState.value}
        onChange={onHandleChange}
        errorText={parentState.error}
        onBlur={onEmailBlur}
        isValid={parentState.isValid}
      ></Input>
    </>
  );
};

export default Emailinput;

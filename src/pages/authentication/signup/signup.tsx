/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Emailinput from "../../../global/components/inputs/email-input";
import Input from "../../../global/components/inputs/inputs";
import PasswordInput from "../../../global/components/inputs/password-input";
import "./signup.scss";
import Inputdropdown from "../../../global/components/button-with-dropdown/input-dropdown";
import { regexConstant } from "../../../global/helpers/regex";
import { signupApi } from "../../../services/auth-services";

const Signup = (props: any) => {
  const country = [
    {
      id: 1,
      label: "India",
      value: "India",
    },
    {
      id: 2,
      label: "Australia",
      value: "Australia",
    },
    {
      id: 3,
      label: "England",
      value: "ENgland",
    },
  ];

  const state = [
    {
      id: 1,
      label: "maharashtra",
      value: "MH",
    },
    {
      id: 2,
      label: "Chhattisgarh",
      value: "CG",
    },
    {
      id: 3,
      label: "Goa",
      value: "Goa",
    },
  ];

  const city = [
    {
      id: 1,
      label: "raipur",
      value: "raipur",
    },
    {
      id: 2,
      label: "pune",
      value: "pune",
    },
    {
      id: 3,
      label: "nagpur",
      value: "nagpur",
    },
  ];
  const [formData, setFormData] = useState<any>({
    country: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    state: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    city: { value: "", label: "", isTouched: false, isValid: false, error: "" },
    pincode: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    firstName: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    lastName: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    passWord: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
    confirmPassword: {
      value: "",
      label: "",
      isTouched: false,
      isValid: false,
      error: "",
    },
  });
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    isValid: false,
    error: "",
    label: "Enter Email",
  });

  const handleOptionSelect = (name: string, item: any) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value: item.value,
          label: item.label,
          isValid: true,
        },
      };
    });
  };

  const handleRemoveDropdown = (fieldName: string) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          value: "",
          label: "",
          isTouched: false,
          isValid: false,
        },
      };
    });
  };

  const handleChangeField = (
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          value: e.target.value.trim(),
        },
      };
    });

    validateField(fieldName, e.target.value);
  };

  const validateField = (fieldName: string, value?: string) => {
    let errortext: any;

    let fieldValue =
      value !== undefined ? value : formData[fieldName].value.trim();

    switch (fieldName) {
      case "firstName":
      case "lastName":
        if (!regexConstant.nameRegex.test(fieldValue)) {
          errortext = "Please enter a valid character";
        }

        break;
      case "passWord":
        if (!regexConstant.passwordTest.test(fieldValue)) {
          errortext = "Please enter a valid password";
        } else if (
          !fieldValue ||
          Number(fieldValue.length) < regexConstant.minPasswordLength
        ) {
          errortext = "Please enter at least 8 characters";
        }
        break;

      case "confirmPassword":
        if (formData.passWord.value !== fieldValue) {
          errortext = "Password do not match";
        }
        break;

      case "pincode":
        if (!fieldValue || Number(fieldValue.length) < 6) {
          errortext = "Pincode should have 6 digit";
        }
        break;

      default:
        break;
    }
    if (fieldValue === "") {
      errortext = `${fieldName} is required`;
    }

    if (errortext) {
      setFormData((prev: any) => {
        return {
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            isValid: false,
            error: errortext,
          },
        };
      });
    } else {
      setFormData((prev: any) => {
        return {
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            isValid: true,
            error: "",
          },
        };
      });
    }
  };

  const handleTouched = (fieldName: string) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          isTouched: true,
        },
      };
    });
  };

  const checkIsValidState = () => {
    return (
      formData.city.isValid &&
      formData.pincode.isValid &&
      formData.firstName.isValid &&
      formData.lastName.isValid &&
      formData.country.isValid &&
      formData.state.isValid &&
      formData.confirmPassword.isValid &&
      formData.passWord.isValid
    );
  };

  const handleSignup =()=>{
    signupApi({
      payload:{
        firstName:formData.firstName.value,
        lastName:formData.lastName.value,
        email:email.value,
        userPassword:formData.passWord.value,
        country:formData.country.value,
        state:formData.state.value,
        city:formData.city.value,
        pincode:formData.pincode.value
      },
      successCB:(res:any)=>{
        console.log("Response came from server",res)
        if(res.status === 200){
          props.changeScreen({
            screenName: "email-otp",
            data: {
              formData
            },
          })
        }
      },
      errorCB:(err:any)=>{
        console.log("err",err)
      }
    })
  }

  // useEffect(() => {
  //   validateField("firstName");
  // }, [formData.firstName.isTouched, formData.firstName.value]);

  // useEffect(() => {
  //   validateField("lastName");
  // }, [formData.lastName.isTouched, formData.lastName.value]);
  useEffect(() => {
    if (formData.country.isTouched) {
      validateField("country");
    }
  }, [formData.country.isTouched, formData.country.value]);
  useEffect(() => {
    if (formData.state.isTouched) {
      validateField("state");
    }
  }, [formData.state.isTouched, formData.state.value]);
  useEffect(() => {
    if (formData.city.isTouched) {
      validateField("city");
    }
  }, [formData.city.isTouched, formData.city.value]);
  // useEffect(() => {
  //   validateField("passWord");
  // }, [formData.passWord.isTouched, formData.passWord.value]);
  // useEffect(() => {
  //   validateField("confirmPassword");
  // }, [formData.confirmPassword.isTouched, formData.confirmPassword.value]);

  // useEffect(() => {
  //   validateField("pincode");
  // }, [formData.pincode.isTouched, formData.pincode.value]);

  useEffect(() => {
    console.log("formdata", formData, regexConstant.minPasswordLength);
  }, [formData]);
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="name-container">
          <Input
            label="First Name"
            onChange={(e: any) => handleChangeField("firstName", e)}
            onBlur={() => handleTouched("firstName")}
            value={formData.firstName.value}
            errorText={formData.firstName.error}
            isValid={formData.firstName.isValid}
          ></Input>
          <Input
            label="Last Name"
            onChange={(e: any) => handleChangeField("lastName", e)}
            onBlur={() => handleTouched("lastName")}
            errorText={formData.lastName.error}
            value={formData.lastName.value}
            isValid={formData.lastName.isValid}
          ></Input>
        </div>
        <Emailinput
          parentState={email}
          parentStateChanger={setEmail}
        ></Emailinput>
        <PasswordInput
          label="Enter Password"
          onChange={(e: any) => handleChangeField("passWord", e)}
          onBlur={() => handleTouched("passWord")}
          errorText={formData.passWord.error}
          value={formData.passWord.value}
          isValid={formData.passWord.isValid}
        ></PasswordInput>
        <PasswordInput
          label="Confirm Password"
          onChange={(e: any) => handleChangeField("confirmPassword", e)}
          value={formData.confirmPassword.value}
          onBlur={() => handleTouched("confirmPassword")}
          errorText={formData.confirmPassword.error}
          isValid={formData.confirmPassword.isValid}
        ></PasswordInput>
        <Inputdropdown
          label="Country"
          placeHolder="Select country"
          dropdownData={country}
          optionClick={(item: any) => handleOptionSelect("country", item)}
          onRemoveItem={() => handleRemoveDropdown("country")}
          onDropdownBlur={() => handleTouched("country")}
          error={formData.country.error}
        />
        <Inputdropdown
          label="State"
          placeHolder="Select State"
          dropdownData={state}
          optionClick={(item: any) => handleOptionSelect("state", item)}
          onRemoveItem={() => handleRemoveDropdown("state")}
          onDropdownBlur={() => handleTouched("state")}
          error={formData.state.error}
        />
        <Inputdropdown
          label="City"
          placeHolder="Select City"
          dropdownData={city}
          optionClick={(item: any) => handleOptionSelect("city", item)}
          onRemoveItem={() => handleRemoveDropdown("city")}
          onDropdownBlur={() => handleTouched("city")}
          error={formData.city.error}
        />

        <Input
          label="Pincode"
          placeholder="Enter Pincode"
          onChange={(e: any) => handleChangeField("pincode", e)}
          isValid={formData.pincode.isValid}
          onBlur={() => handleTouched("pincode")}
          errorText={formData.pincode.error}
          value={formData.pincode.value}
          maxLength={6}
        ></Input>
      </div>
      <div className="button-container">
        <button
          className={`primary-button ${checkIsValidState() ? "" : "disabled"}`}
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;

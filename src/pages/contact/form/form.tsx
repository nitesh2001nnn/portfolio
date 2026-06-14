/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Emailinput from "../../../global/components/inputs/email-input";
import Input from "../../../global/components/inputs/inputs";
import "./form.scss";
import Textarea from "../../../global/components/inputs/text-area";
import { contactPageService } from "../../services/contact-page.services";

const Form = () => {
  const [formData, setFormData] = useState({
    email: {
      label: "Email",
      value: "",
      isTouched: false,
      IsValid: false,
      error: "",
    },
    name: {
      value: "",
      isTouched: false,
      IsValid: false,
      error: "",
    },
    message: {
      value: "",
      isTouched: false,
      IsValid: false,
      error: "",
    },
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value: e.target.value,
        },
      };
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    contactPageService({
      payload: {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      },
      successCb: (res: any) => {
        console.log("rees", res);
      },
      errorCb: (err: any) => {
        console.log("err", err);
      },
    });
  };

  return (
    <form onSubmit={(e: any) => handleFormSubmit(e)}>
      <div className="form-container">
        <div className="input-email-container">
          <Input
            label={"Name"}
            value={formData.name.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(e)
            }
            name="name"
          />

          <Emailinput
            parentState={formData.email}
            parentStateChanger={(newEmail: any) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  email:
                    typeof newEmail === "function"
                      ? newEmail(prev.email)
                      : newEmail,
                };
              });
            }}
          />
        </div>
        <div className="text-area">
          <Textarea
            label={"Message"}
            name="message"
            onHandleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(e)
            }
            value={formData.message.value}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="primary-button">Submit</button>
      </div>
    </form>
  );
};

export default Form;

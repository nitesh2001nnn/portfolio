/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../../../global/components/inputs/inputs";
import Inputdropdown from "../../../global/components/button-with-dropdown/input-dropdown";
import SKillstorer from "../../../global/components/skill-storer/skill-storer";
import "./personal-detail.scss";
import { useEffect, useRef } from "react";
import { allowedKeys } from "../../../global/constants/helpers";

const Personaldetail = (props: any) => {
  const cityData = [
    {
      id: 1,
      label: "nagpur",
      value: "nagpur",
    },
    {
      id: 2,
      label: "pune",
      value: "pune",
    },
    {
      id: 3,
      label: "mumbai",
      value: "mumbai",
    },
  ];

  const {
    name,
    role,
    email,
    phoneNumber,
    city,
    state,
    country,
    company,
    skills,
    DOB,
    profilePhoto,
    skillSet,
  } = props?.data;

  const fileRef = useRef<any>(null);

  // useEffect(() => {
  //   console.log("ref", fileRef);
  // }, [fileRef]);

  const handleClick = () => {
    // console.log("it is runnign or nt");
    if (fileRef.current) {
      fileRef.current.value = null;
    }
  };

  const handleKeyDown = (e: any) => {
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    props.onChange(name, value);
  };

  const handleDropdown = (name, item) => {
    // console.log(item);
    props.onChange(name, item);
  };
  const handleScreen = () => {
    props.changeScreen("next");
  };

  const handleClear = (item: any) => {
    props.handleClose(item, "personalDetails", "skillSet");
  };

  // useEffect(() => {
  //   console.log("forming", city);
  // }, [city]);

  // useEffect(() => {
  //   console.log("props", props.data);
  // }, [props.data]);

  return (
    <div className="personal-detail-form">
      <div className="personal-detail-container">
        <Input
          label={"name"}
          value={name.value}
          name={"name"}
          errorText={name.error}
          onChange={(e: any) => handleChangeInput(e)}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
          onKeyDown={(e: any) => handleKeyDown(e)}
        />
        <Input
          label={"Email"}
          value={email.value}
          name={"email"}
          errorText={email.error}
          onChange={(e: any) => handleChangeInput(e)}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Role"}
          value={role.value}
          name={"role"}
          onChange={(e: any) => handleChangeInput(e)}
          errorText={role.error}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Company"}
          value={company.value}
          name={"company"}
          errorText={company.error}
          onChange={(e: any) => handleChangeInput(e)}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Phone Number"}
          value={phoneNumber.value.replace(/\D/g, "")}
          name={"phoneNumber"}
          onChange={(e: any) => handleChangeInput(e)}
          errorText={phoneNumber.error}
          maxLength={10}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Date Of Birth"}
          placeholder={"Enter a DOB as 19/01/2001"}
          name={"DOB"}
          value={DOB.value}
          errorText={DOB.error}
          onChange={(e: any) => handleChangeInput(e)}
          maxLength={10}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />

        <Inputdropdown
          label={"city"}
          selectedItemData={city}
          placeHolder={"select a city"}
          dropdownData={cityData}
          optionClick={(item) => handleDropdown("city", item)}
          name={"city"}
          error={city.error}
          onDropdownBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Inputdropdown
          label={"State"}
          selectedItemData={state}
          placeHolder={"select a state"}
          dropdownData={cityData}
          optionClick={(item) => handleDropdown("state", item)}
          name={"state"}
          error={state.error}
          onDropdownBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <Inputdropdown
          label={"Country"}
          selectedItemData={country}
          placeHolder={"select a country"}
          dropdownData={cityData}
          optionClick={(item) => handleDropdown("country", item)}
          name={"country"}
          error={country.error}
          onDropdownBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
        />
        <div className="skill-container">
          <Input
            label={"Skills"}
            name={"skills"}
            onChange={(e: any) => handleChangeInput(e)}
            value={props.data.skills.value}
            errorText={props.data.skills.error}
            onBlur={(e: any) =>
              props.handleBlur("personalDetails", e.target.name, e.target.value)
            }
          />
          <button
            onClick={(e: any) =>
              props.handleSkillSubmit("personalDetails", "skillSet", "skills")
            }
            className="primary-button"
          >
            Add
          </button>
        </div>

        <SKillstorer
          skillsData={skillSet}
          onClose={(item: any) => handleClear(item)}
        />
        <Input
          label={"Photo"}
          name={"profilePhoto"}
          ref={fileRef}
          onClick={handleClick}
          onChange={(e: any) => {
            const files = e.target.files[0];

            if (files) {
              props.onChange("profilePhoto", files);
            } else {
              props.onChange("profilePhoto", null);
            }
          }}
          type="file"
          errorText={profilePhoto.error}
          onBlur={(e) => {
            setTimeout(() => {
              if (fileRef.current && fileRef.current.files.length === 0) {
                props.onChange("profilePhoto", null);
              }
            }, 100);
            props.handleBlur("personalDetails", e.target.name);
          }}
        />
        <Input
          label="LinkedIn"
          name={"linkedin"}
          onChange={(e) => handleChangeInput(e)}
          // value={props.data[0].socialLinks.linkedin.value}
          type="text"
          value={props.data.linkedin.value}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
          errorText={props.data.linkedin.error}
        />
        <Input
          label="Github"
          name={"github"}
          onChange={(e) => handleChangeInput(e)}
          // value={props.data[0].socialLinks.github.value}
          type="text"
          value={props.data.github.value}
          onBlur={(e: any) =>
            props.handleBlur("personalDetails", e.target.name, e.target.value)
          }
          errorText={props.data.github.error}
        />
      </div>
      <div className="btn-container">
        <button className="primary-button" onClick={handleScreen}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Personaldetail;

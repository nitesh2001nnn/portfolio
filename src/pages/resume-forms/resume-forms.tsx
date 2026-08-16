/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import { Switch } from "../../global/components/switch/Switch";
import Personaldetail from "./personal-details/personal-detail";
import Stepper from "../../global/components/steppers/stepper";
import "./resume-flow.scss";
import Education from "./education/education";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import { regexConstant } from "../../global/helpers/regex";
import Success from "./success/success";

const Resumeforms = () => {
  const stepperData = [
    {
      id: 1,
      name: "personal-details",
    },
    {
      id: 2,
      name: "education",
    },
    {
      id: 3,
      name: "experience",
    },
    {
      id: 4,
      name: "project",
    },
    {
      id: 5,
      name: "project",
    },
  ];

  const createEmptyData = (id: any, section: any) => {
    if (section === "experienceData") {
      return {
        id,
        company_Name: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        role: { value: "", isTouched: false, isValid: false, error: "" },
        description: { value: "", isTouched: false, isValid: false, error: "" },
        start_Date: { value: "", isTouched: false, isValid: false, error: "" },
        end_Date: { value: "", isTouched: false, isValid: false, error: "" },
      };
    }
    if (section === "projectData") {
      return {
        id,
        project_Name: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        skillName: { value: "", isTouched: false, isValid: false, error: "" },
        description: { value: "", isTouched: false, isValid: false, error: "" },
        project_Link: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        skillSet: [],
      };
    }
  };

  const [formData, setFormData] = useState<any>({
    personalDetails: {
      name: { value: "", isTouched: false, isValid: false, error: "" },
      email: { value: "", isTouched: false, isValid: false, error: "" },
      role: { value: "", isTouched: false, isValid: false, error: "" },
      company: { value: "", isTouched: false, isValid: false, error: "" },
      phoneNumber: { value: "", isTouched: false, isValid: false, error: "" },
      city: { value: "", isTouched: false, isValid: false, error: "" },
      state: { value: "", isTouched: false, isValid: false, error: "" },
      country: { value: "", isTouched: false, isValid: false, error: "" },
      skills: { value: "", isTouched: false, isValid: false, error: "" },
      profilePhoto: {
        value: null,
        isValid: false,
        error: "",
        isTouched: false,
      },
      DOB: { value: "", isTouched: false, isValid: false, error: "" },
      skillSet: [],
      linkedin: {
        value: "",
        label: "Linkedin",
        isTouched: false,
        isValid: false,
      },
      github: {
        value: "",
        label: "Github",
        isTouched: false,
        isValid: false,
      },
    },

    experienceData: [
      {
        id: crypto.randomUUID(),
        company_Name: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        role: { value: "", isTouched: false, isValid: false, error: "" },
        description: { value: "", isTouched: false, isValid: false, error: "" },
        start_Date: { value: "", isTouched: false, isValid: false, error: "" },
        end_Date: { value: "", isTouched: false, isValid: false, error: "" },
      },
    ],
    projectData: [
      {
        id: crypto.randomUUID(),
        project_Name: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        skillName: { value: "", isTouched: false, isValid: false, error: "" },
        description: { value: "", isTouched: false, isValid: false, error: "" },
        project_Link: {
          value: "",
          isTouched: false,
          isValid: false,
          error: "",
        },
        skillSet: [],
      },
    ],
    education: {
      collegeName: { value: "", isTouched: false, isValid: false, error: "" },
      grade: { value: "", isTouched: false, isValid: false, error: "" },
      startYear: { value: "", isTouched: false, isValid: false, error: "" },
      endYear: { value: "", isTouched: false, isValid: false, error: "" },
      degree: { value: "", isTouched: false, isValid: false, error: "" },
    },
  });

  const [activeID, setActiveID] = useState(1);
  const [screenName, setScreenName] = useState<any>({
    name: "personal-details",
    id: activeID,
    data: {},
  });

  const updateFields = (section: string, field: string, value: any) => {
    setFormData((prev: any) => {
      const existingValue = prev[section][field]?.value || "";
      const updateField = {
        ...prev[section][field],
        value:
          typeof value === "string"
            ? existingValue.length > 0
              ? value
              : value.trim()
            : value,
        isTouched: true,
      };
      const newState = {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: updateField,
        },
      };
      if (updateField.isTouched) {
        console.log("run");
        validationField(section, field, updateField.value);
      }
      return newState;
    });
  };

  const handleSkillSubmit = (
    section: string,
    field: string,
    takenField: string,

    index?: string
  ) => {
    setFormData((prev: any) => {
      const updatedForm = { ...prev };
      // console.log("update form is what", updatedForm);
      if (Array.isArray(prev[section])) {
        updatedForm[section] = prev[section].map((item: any) => {
          if (item.id !== index) return item;

          const updateItem = {
            ...item,
            [field]: [
              ...item[field],
              { id: crypto.randomUUID(), value: item[takenField].value },
            ],
          };

          // console.log("updateitem", updateItem, item[takenField]);
          if (item[takenField] && typeof item[takenField] === "object") {
            console.log("yes");

            updateItem[takenField] = {
              ...item[takenField],
              value: "",
            };
          }

          return updateItem;
        });

        return updatedForm;
      }
      // console.log(updatedForm[section], "what it i s");
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: [
            ...prev[section][field],
            { id: crypto.randomUUID(), value: prev[section][takenField].value },
          ],
          [takenField]: {
            ...prev[section][takenField],
            value: "",
          },
        },
      };
    });

    // setSkillSet((prev: any) => [
    //   ...prev,
    //   { id: skillSet.length + 1, value: selectedSkills },
    // ]);
    // setFormData((prev: any) => {
    //   return {
    //     ...prev,
    //     personalDetails: {
    //       ...prev.personalDetails,
    //       skills: {
    //         ...prev.skills,
    //         value: "",
    //       },
    //     },
    //   };
    // });
  };

  const handleClose = (item: any, section: any, field: any) => {
    // console.log("item", item, "section", section, "field", field);
    setFormData((prev: any) => {
      const updateItem = { ...prev };
      if (Array.isArray(prev[section])) {
        // console.log("here m getting which items", item);
        updateItem[section] = prev[section].map((newitem): any => {
          const updateNew = {
            ...newitem,
            [field]: newitem[field].filter(
              (newFilter: any) => newFilter.id != item.id
            ),
          };

          return updateNew;
        });
        // console.log("return update array", updateItem);
        return updateItem;
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: prev[section][field].filter(
            (itemData: any) => itemData.id != item.id
          ),
        },
      };
    });
  };

  const addNewArr = (section: any) => {
    const getNewInstance = createEmptyData(crypto.randomUUID(), section);
    // console.log("getnewinstance", getNewInstance);
    setFormData((prev: any) => {
      return {
        ...prev,
        [section]: [...prev[section], getNewInstance],
      };
    });
  };

  const updateNewArrField = (
    section: any,
    index: string,
    field: string,
    value: string
  ) => {
    // console.log("index", index, e);
    setFormData((prev: any) => ({
      ...prev,
      [section]: prev[section].map((entry: any) => {
        if (entry.id !== index) {
          return entry;
        }
        return {
          ...entry,
          [field]: {
            ...entry[field],
            value: value,
          },
        };
      }),
    }));
    if (index) {
      validationField(section, field, value, index);
    }
  };

  const changeScreen = (direction: "next" | "prev") => {
    setActiveID((prevID) => {
      const currentId = stepperData.findIndex((id) => id.id === prevID);
      const nextId = direction == "next" ? currentId + 1 : currentId - 1;
      const nextStep = stepperData[nextId];
      // console.log("nextstep", nextStep);

      if (nextId < 0 && nextId > stepperData.length) {
        return prevID;
      }
      setScreenName({
        name: nextStep.name,
        id: nextStep.id,
      });

      return nextStep.id;
    });
  };

  const handleBlur = (
    section: string,
    field: string,
    _value: string | any,
    id?: string
  ) => {
    setFormData((prev: any) => {
      if (Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: prev[section].map((item) => {
            if (item.id === id) {
              console.log("item after blur", item);
              return {
                ...item,
                [field]: {
                  ...item[field],
                  isTouched: true,
                },
              };
            } else {
              return item;
            }
          }),
        };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            isTouched: true,
          },
        },
      };
    });

    // validationField(section, field, value);
  };

  const validationField = (
    section: string,
    field: string,
    value: string | any,
    id?: string
  ) => {
    // console.log("here in valid valiue", value, field);
    let errorText = "";

    switch (field) {
      case "email":
        if (!regexConstant.emailRegex.test(value)) {
          errorText = "Email is invalid";
        }
        break;
      case "DOB":
        if (!regexConstant.DOB.test(value)) {
          errorText = "Enter a Valid Date Of Birth";
        }
        break;
      case "profilePhoto":
        if (!value) {
          errorText = "Profile Photo is required";
        }
        break;
      default:
        if (typeof value === "string" && value.trim().length === 0) {
          errorText = `${field} is required`;
        }
    }

    setFormData((prev: any) => {
      if (Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: prev[section].map((item) => {
            if (item.id === id) {
              return {
                ...item,
                [field]: {
                  ...item[field],
                  error: errorText,
                  isValid: errorText === "",
                },
              };
            } else {
              return item;
            }
          }),
        };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            error: errorText,
            isValid: errorText === "",
          },
        },
      };
    });
  };

  const handleSubmit = () => {
    const payload = formData;
    console.log("payload", payload);
  };

  useEffect(() => {
    console.log("formdata", formData);
  }, [formData]);

  return (
    <div className="resume-flow-container">
      <div className="stepper">
        <Stepper ActiveID={activeID} data={stepperData} />
        <div className="upperside-btn">
          {activeID == 4 && (
            <button className=" primary-button" onClick={handleSubmit}>
              Submit
            </button>
          )}{" "}
          <button
            className=" primary-button"
            onClick={() => changeScreen("prev")}
          >
            Back
          </button>
        </div>
      </div>
      <div className="switch-states">
        <Switch test={screenName.name}>
          <Personaldetail
            value={"personal-details"}
            data={formData?.personalDetails}
            onChange={(field: string, value: any) => {
              updateFields("personalDetails", field, value);
            }}
            handleSkillSubmit={handleSkillSubmit}
            handleSocialLinks={(field: string, value: string) => {
              updateFields("socialLinks", value, field);
            }}
            changeScreen={changeScreen}
            handleClose={handleClose}
            handleBlur={(section: string, field: string, value: string) =>
              handleBlur(section, field, value)
            }
          />
          <Education
            value={"education"}
            data={formData?.education}
            changeScreen={changeScreen}
            onChange={(field: string, value: any) => {
              updateFields("education", field, value);
            }}
            handleBlur={(section: string, field: string, value: string) =>
              handleBlur(section, field, value)
            }
          />
          <Experience
            value={"experience"}
            data={formData?.experienceData}
            onChange={(id: string, field: string, value: string) => {
              updateNewArrField("experienceData", id, field, value);
            }}
            handleAddExper={() => {
              addNewArr("experienceData");
            }}
            handleBlur={(
              section: string,
              field: string,
              value: string,
              id: string
            ) => handleBlur(section, field, value, id)}
            changeScreen={changeScreen}
          />

          <Projects
            value={"project"}
            data={formData}
            handleSkillSubmit={handleSkillSubmit}
            handleAddNewPro={() => {
              addNewArr("projectData");
            }}
            onChange={(id: string, field: string, value: string) => {
              updateNewArrField("projectData", id, field, value);
            }}
            handleBlur={(
              section: string,
              field: string,
              value: string,
              id: string
            ) => handleBlur(section, field, value, id)}
            changeScreen={changeScreen}
            handleClose={handleClose}
          />
          <Success value={"success"} />
        </Switch>
      </div>
    </div>
  );
};

export default Resumeforms;

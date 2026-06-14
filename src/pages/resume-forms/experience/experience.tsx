/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Input from "../../../global/components/inputs/inputs";
import "./experience.scss";

const Experience = (props: any) => {
  const handleExperience = () => {
    props.handleAddExper();
  };

  useEffect(() => {
    console.log("props.extra", props.data);
  }, [props.data]);
  return (
    <div className="exper-container">
      {props.data.map((item: any, index: number) => {
        return (
          <div className="exper-form" key={index}>
            <Input
              label="Company-Name"
              name={"company_Name"}
              value={item.company_Name.value}
              onChange={(e: any) =>
                props.onChange(
                  item.id,
                  "company_Name",
                  e.target.value,
                  
                )
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "experienceData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.company_Name.error}
            />
            <Input
              label="Role"
              name={"role"}
              value={item.role.value}
              onChange={(e: any) =>
                props.onChange(item.id, "role", e.target.value)
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "experienceData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.role.error}
            />
            <Input
              label="Description"
              name={"description"}
              value={item.description.value}
              onChange={(e: any) =>
                props.onChange(item.id, "description", e.target.value)
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "experienceData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.description.error}
            />
            <Input
              label="Start Date"
              name={"start_Date"}
              value={item.start_Date.value}
              onChange={(e: any) =>
                props.onChange(item.id, "start_Date", e.target.value)
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "experienceData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.start_Date.error}
            />
            <Input
              label="End Date"
              name={"end_Date"}
              // value={end_Date.value}
              value={item.end_Date.value}
              onChange={(e: any) =>
                props.onChange(item.id, "end_Date", e.target.value)
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "experienceData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.end_Date.error}
            />
          </div>
        );
      })}

      <button onClick={handleExperience}>Add Experience</button>
      <button onClick={() => props.changeScreen("next")}>Next</button>
    </div>
  );
};

export default Experience;

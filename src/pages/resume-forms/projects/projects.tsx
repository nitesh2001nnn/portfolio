/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../../../global/components/inputs/inputs";
import SKillstorer from "../../../global/components/skill-storer/skill-storer";
import "./projects.scss";

const Projects = (props: any) => {
  const handleClose = (item: any, section: string, field: string) => {
    // console.log(item);
    props.handleClose(item, section, field);
  };
  return (
    <div className="project-container">
      <div className="project-form-cont">
        {props.data.projectData.map((item: any, index: any) => {
        return (
          <div key={index} className="project-data-form">
            <Input
              label={"Project Name"}
              name={"project_Name"}
              value={item.project_Name.value}
              onChange={(e: any) =>
                props.onChange(item.id, "project_Name", e.target.value)
              }
              onBlur={(e: any) =>
                props.handleBlur(
                  "projectData",
                  e.target.name,
                  e.target.value,
                  item.id
                )
              }
              errorText={item.project_Name.error}
            />

            <div className="skill-container">
              <Input
                label={"Technology"}
                name={"skillName"}
                value={item.skillName.value}
                onChange={(e: any) =>
                  props.onChange(item.id, "skillName", e.target.value)
                }
                onBlur={(e: any) =>
                  props.handleBlur(
                    "projectData",
                    e.target.name,
                    e.target.value,
                    item.id
                  )
                }
                errorText={item.skillName.error}
              />
              <button
                onClick={() =>
                  props.handleSkillSubmit(
                    "projectData",
                    "skillSet",
                    "skillName",
                    item.id
                  )
                }
                className="primary-button btn"
              >
                Add
              </button>
            </div>
            <SKillstorer
              skillsData={item.skillSet}
              onClose={(item: any) =>
                handleClose(item, "projectData", "skillSet")
              }
            />
            <Input label={"Description"} />
            <Input label={"Project-link"} />
          </div>
        );
      })}

      </div>
      
      <div className="btn-container">

      <button onClick={() => props.handleAddNewPro()} className="primary-button add-new-pro">Add New Project</button>
      </div>
    </div>
  );
};

export default Projects;

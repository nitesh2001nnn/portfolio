import Input from "../../../global/components/inputs/inputs";
import "./education.scss";

const Education = (props: any) => {
  const { collegeName, degree, startYear, endYear, grade } = props.data;
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    props.onChange(name, value);
  };

  return (
    <div className="education-wrapper">
      <div className="education-container">
        <Input
          label={"College Name"}
          name={"collegeName"}
          value={collegeName.value}
          errorText={collegeName.error}
          onChange={(e: any) => handleChange(e)}
          onBlur={(e: any) =>
            props.handleBlur("education", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Degree"}
          name={"degree"}
          value={degree.value}
          errorText={degree.error}
          onChange={(e: any) => handleChange(e)}
          onBlur={(e: any) =>
            props.handleBlur("education", e.target.name, e.target.value)
          }
        />
        <Input
          label={"CGPA"}
          name={"grade"}
          errorText={grade.error}
          value={grade.value.replace(/^([0-9]*\.?[0-9]*).*$/, "$1")}
          onChange={(e: any) => handleChange(e)}
          onBlur={(e: any) =>
            props.handleBlur("education", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Graduation Start Year"}
          name={"startYear"}
          value={startYear.value.replace(/[^0-9]/g, "")}
          errorText={startYear.error}
          onChange={(e: any) => handleChange(e)}
          onBlur={(e: any) =>
            props.handleBlur("education", e.target.name, e.target.value)
          }
        />
        <Input
          label={"Graduation End Year"}
          name={"endYear"}
          value={endYear.value.replace(/[^0-9]/g, "")}
          errorText={endYear.error}
          onChange={(e: any) => handleChange(e)}
          onBlur={(e: any) =>
            props.handleBlur("education", e.target.name, e.target.value)
          }
        />
        <button
          className="primary-button"
          onClick={() => props.changeScreen("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;

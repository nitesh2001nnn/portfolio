import React from "react";
import "./text-area.scss";

// type textArea = {
//   label: string;
//   value: string;
//   onHandleInput: () => void;
//   errorText: string;
//   rest: any;
// };

const Textarea = (props: any) => {
  const { label, value, onHandleChange, errorText, ...rest } = props;
  return (
    <div className="text-area-container">
      <label>{label}</label>
      <textarea value={value} onChange={onHandleChange} {...rest} />
    </div>
  );
};

export default Textarea;

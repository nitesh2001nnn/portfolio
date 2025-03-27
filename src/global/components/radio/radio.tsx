import { useEffect } from "react";
import "./radio.scss";


interface radioProps{
    labelText:string;
    value:string;
    isChecked:boolean;
    handleChange:(item:string)=>void;
}

const Radio = ({labelText,value,isChecked,handleChange}:radioProps) => {
    useEffect(()=>{
        console.log("isCHecked",isChecked)
        console.log("value",value)
    },[isChecked,value])
  return (
    <div className="radio-container" >
        <input type="radio" id={value}  value={value} checked={isChecked} onChange={()=>handleChange(value)}></input>
        <label htmlFor={value}>{labelText}</label>
      
    </div>
  )
}

export default Radio;

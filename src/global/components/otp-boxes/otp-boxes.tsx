import { useEffect, useRef } from "react";
import "./otp-boxes.scss";

interface otpBoxesProps {
  value: string;
  length: number;
  onChange: (otp: string) => void;
}

const Otpboxes = ({ value, length, onChange }: otpBoxesProps) => {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    console.log("ref variable otp", inputRef);
  }, [inputRef]);

  const handleChange = (index: number, digit: string) => {
    if (!/^[0-9]?$/.test(digit)) return;
    const otpArray = value.split("");
    otpArray[index] = digit;
    console.log("otparray", otpArray);
    const newOtpArray = otpArray.join("");
    console.log("newotparray", newOtpArray);
    onChange(newOtpArray);
    if (digit && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown=(index:number,e:any)=>{
    if(e.key === "Backspace" ){
        const otpArray = value.split("");
        if(otpArray[index]){
            otpArray[index]=""
            onChange(otpArray.join(""))
        }
        else if(index>0){
            otpArray[index - 1]=""
            onChange(otpArray.join(""))

            inputRef.current[index - 1]?.focus();
        }

    }
  }
  return (
    <div className="otp-box-container">
      {Array.from({ length }, (_, index) => {
        return (
          <input
            value={value[index] || ""}
            maxLength={1}
            onChange={(e: any) => handleChange(index, e.target.value)}
            ref={(el) => 
                
                inputRef.current[index] = el}
            key={index}
            onKeyDown={(e:any)=>handleKeyDown(index,e)}
            className={`otp-box-input ${value.length == length ? "activeBox" :""} `}
          ></input>
        );
      })}
    </div>
  );
};

export default Otpboxes;

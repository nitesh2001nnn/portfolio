import {  useRef, useState } from "react";
import Stepper from "../../../../global/components/steppers/stepper";
import "./about-certification.scss";
import { Switch } from "../../../../global/components/switch/Switch";
import Readdata from "../read-data/read-data";
import Questionpractice from "../question-practice/question-practice";
import CheckResult from "./check-result/check-result";

const Aboutcertification = () => {
  const Data = [
    {
      id: 1,
      name: "Read Topic",
    },
    {
      id: 2,
      name: "Exercises",
    },
    {
      id: 3,
      name: "Check-Result",
    },
    {
      id: 4,
      name: "Get Certification",
    },
  ];

  const [screenInfo, setChangeScreen] = useState<any>({
    name: "Read-data",
    data: {},
  });

  const nextScreen = useRef<any>(null);

  const [activeId, setActiveId] = useState<any>(1);
  const[disabled,setDisabled]=useState(false)

  const handleScreen = (newScreenInfo: any, isForward: boolean) => {
    setChangeScreen(newScreenInfo);
    if (isForward) {
      setActiveId((prev: any) => prev + 1);
    } else {
      setActiveId((prev: any) => prev - 1);
    }
  };

  const handleNextScreen = () => {
    if (nextScreen.current) {
      nextScreen.current.handleChangeScreen();
    }
  };

  const handleBack = () => {
    if (screenInfo.name == "check-result") {
      handleScreen(
        {
          name: "question-practice",
          data: screenInfo.data,
        },
        false
      );
    } else if (screenInfo.name == "question-practice") {
      handleScreen(
        {
          name: "Read-data",
          data: screenInfo.data,
        },
        false
      );
    }
  };

 

  

  const handleValidation=(checkDisablity:any)=>{
    setDisabled(checkDisablity)
  }

  
  const buttonDecider = () => {
    if (screenInfo.name == "check-result") {
      if (screenInfo.data?.accuracy?.percentage > 70) {
        return (
          <>
            <button onClick={handleNextScreen} className="download-certificate">
              Download certificate
            </button>
          </>
        );
      }
    }
  };

  return (
    <div className="about-certification-container">
      <div className="stepper-part">
        <Stepper data={Data} ActiveID={activeId} />
        <div className="button-container">
          {screenInfo.name === "question-practice" && (
            <>
              <button onClick={handleBack} className="secondary-button">Go Back </button>

              <button onClick={handleNextScreen} className={`primary-button ${disabled ?'':'disabled'}`}>Next</button>
            </>
          )}

          {buttonDecider()}
        </div>
      </div>

      <div className="switch-screen">
        <Switch test={screenInfo?.name}>
          <Readdata value={"Read-data"} changeScreen={handleScreen} />
          <Questionpractice
            value={"question-practice"}
            changeScreen={handleScreen}
            ref={nextScreen}
            data={screenInfo?.data}
            onCheckValidation={handleValidation}
          />
          <CheckResult
            value={"check-result"}
            changeScreen={handleScreen}
            data={screenInfo?.data}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Aboutcertification;

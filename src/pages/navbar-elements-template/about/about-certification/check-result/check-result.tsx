import { useEffect } from "react";
import "./check-result.scss";

const CheckResult = (props: any) => {
  useEffect(() => {
    console.log("prpos in check answer", props.data.accuracy.percentage);
  }, [props]);

  const handleSolvedAgain=()=>{
    props.changeScreen({
      name:"question-practice",
      data:{}
    },false)
  }

  return (
    <div className="check-result-container">
      <div className="check-result-section">
        {props.data.accuracy.percentage > 70 ? (
          <div className="congratulation-section">
            <div className="bold-text congrats-text">Congratulation's</div>
            <div className="heading-medium ">You have passed with </div>
            <span className="percentage-success">
              {props.data.accuracy.percentage}%
            </span>
            <div>Corrected Answer:{props.data.accuracy.correctAnswers}</div>
          </div>
        ) : (
          <div className="regret-section">
            <div className="bold-text regret-text">Try Again - <button className="primary-button" onClick={handleSolvedAgain}>Solved Again</button></div>
            <div className="heading-medium ">Failed to attempt </div>
            <div className="percentage-regret">
              {props.data.accuracy.percentage}%
            </div>
            <div>Corrected Answer:{props.data.accuracy.correctAnswers}</div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckResult;

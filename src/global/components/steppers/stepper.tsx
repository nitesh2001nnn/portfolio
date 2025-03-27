import "./stepper.scss";

type stepperDataSet = {
  id: number;
  name: string;
};
interface stepperProps {
  ActiveID: number;
  data: stepperDataSet[];
}

const Stepper = ({ ActiveID, data }: stepperProps) => {
  const checkActive = (id: number) => {
    if (ActiveID == id) {
      return "active";
    } else if (ActiveID > id) {
      return "activated";
    }
  };

  return (
    <div className="stepper-container">
      {data &&
        data.map((item: any, index: any) => {
          return (
            <div className="stepper-flow">
              <div className={`stepper-number ${checkActive(item.id)}`}>
                {item.id}
              </div>
              {index < data.length - 1 && (
                <div
                  className={`stepper-indicator ${checkActive(item.id)}`}
                ></div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Stepper;

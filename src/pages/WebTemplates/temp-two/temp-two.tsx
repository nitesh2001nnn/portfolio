
import "./temp-two.scss";

const Temptwo = (props: any) => {
  

  return (
   
      <div className="temp-two-container">
      <div>
        <div className="heading text-header">
          {props.data.heading}
        </div>
        <div className="text-sub-header sub-heading">
        {props.data.subheading}
        </div>
      </div>
      <div className="card-container">
      {props.data.data?.map((item: any, index: any) => {
        return (
          <div className="long-card">
            <img src="assets/icons/check-mark.png"></img>
            <div className="card-text-container">
              <span className="card-main-text heading-medium ">
                {item.label}
              </span>
              <span className="card-sub-text">{item.value}</span>
            </div>
          </div>
        );
      })}

      </div>
    </div>

    
    
  );
};

export default Temptwo;

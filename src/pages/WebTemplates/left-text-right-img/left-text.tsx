import "./left-text.scss";

interface leftTextProps {
  buttonData?: any;
  data: any;
}

const Lefttext = ({ buttonData, data }: leftTextProps) => {
  console.log("button", buttonData, data);
  return (
    <div className="left-text-container">
      <div className="left-side-div">
        <div className="left-text-side">
          <span className="first-title text-body-xs ">{data?.section}</span>
          <span className="second-title heading">{data?.title}</span>
          <span className="third-sub-content text-body-normal">
            {data?.description}
          </span>
          <span className="fourth-sub-content text-body-xxs ">
            Worked for Jio since 1.8 years , in which i learn how to build
            project as a project in industry level
          </span>
        </div>
        <div className="button-containers">
          {data?.data?.map((item, index) => {
            return (
              <div className="btn-wrap" key={index}>
                <img src={`http://localhost:1337${item?.img?.url}`}></img>
                <span>{item?.value}</span>
              </div>
            );
          })}
        </div>

        {/* <div className="button-containers">
          {buttonData?.map((item, index) => {
            return (
              <div className="btn-wrap" key={index}>
                <img src={item.img}></img>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div> */}
      </div>

      <div className="image-side">
        <img src={`http://localhost:1337${data?.img?.url}`}></img>
      </div>
    </div>
  );
};

export default Lefttext;

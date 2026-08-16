import { API_CONFIG } from "../../../helpers/api-config";
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
            Worked in Jio for 2.8 years+ , in which i learn how to build project
            as a project in industry level
          </span>
        </div>
        <div className="button-containers">
          {buttonData?.map((item: any, index: number) => {
            return (
              <div
                className="btn-wrap"
                key={index}
                onClick={() => window.open(item.url)}
              >
                <img src={`${API_CONFIG.BASEURL}${item?.img}`}></img>
                <span>{item?.name}</span>
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

      {data?.img?.url && (
        <div className="image-side">
          <img src={`${API_CONFIG.BASEURL}${data?.img?.url}`}></img>
        </div>
      )}
    </div>
  );
};

export default Lefttext;

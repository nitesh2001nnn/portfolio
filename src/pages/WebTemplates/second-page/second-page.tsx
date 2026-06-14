import { useEffect } from "react";
import Card from "../../shared/components/card-container/card";
import "./second-page.scss";

const Secondpage = (props: any) => {
  useEffect(() => {
    console.log(
      "data",

      props,
    );
  }, [props]);
  return (
    <div className="second-page-container">
      <div className="second-page-items">
        <div className="second-page-header">
          <div className="border"></div>
          <span className="second-page-header-title">
            {props.projects?.[0]?.title}
          </span>
          <span className="border"></span>
        </div>
        <div className="card-containers">
          {props.projects?.[0]?.data.map((item: any, index: any) => {
            return (
              <div>
                <Card
                  title={item.title}
                  description={item.description}
                  src={`http://localhost:1337${item.img.url}`}
                />
              </div>
            );
          })}
        </div>

        {/* <div className="card-containers">
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
    </div>
  );
};

export default Secondpage;

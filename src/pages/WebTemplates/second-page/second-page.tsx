/* eslint-disable @typescript-eslint/no-explicit-any */

import Card from "../../shared/components/card-container/card";
import "./second-page.scss";
import { API_CONFIG } from "../../../helpers/api-config";
import { useEffect } from "react";

const Secondpage = (props: any) => {
  useEffect(() => {
    console.log("scondpage", props);
  }, [props]);
  return (
    <div className="second-page-container">
      <div className="second-page-items">
        <div className="second-page-header">
          <div className="border"></div>
          <span className="second-page-header-title">
            {props.data?.projects?.[0]?.title}
          </span>
          <span className="border"></span>
        </div>
        <div className="card-containers">
          {props.data?.projects?.[0]?.data.map((item: any, index: any) => {
            return (
              <div key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  src={`${API_CONFIG.BASEURL}${item.img.url}`}
                  url={item.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Secondpage;

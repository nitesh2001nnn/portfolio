import { useQuery } from "@tanstack/react-query";
import Fullscreencarousel from "../../global/components/carousel/full-screen-carousel/full-screen-carousel";
import Lefttext from "../WebTemplates/left-text-right-img/left-text";
import Secondpage from "../WebTemplates/second-page/second-page";
import "./portfolio.scss";
import { portfolio_page_service } from "../services/home-page";
import { useEffect, useState } from "react";
import { API_CONFIG } from "../../helpers/api-config";

const Portfolio = () => {
  const [carouselData, setCarouselData] = useState([]);
  const { data } = useQuery({
    queryKey: ["portfolio"],
    queryFn: portfolio_page_service,
  });

  useEffect(() => {
    if (data) {
      const DataSetForCarousel = data?.data?.[0]?.cd_1[0].data.map(
        (item: any, index: any) => {
          return {
            id: index,
            src: `${API_CONFIG.BASEURL}${item.img.url}`,
            label: item.title,
            value: item.link,
          };
        },
      );
      setCarouselData(DataSetForCarousel);
    }
  }, [data]);

  console.log("data in portfolio", data?.data?.[0]);
  return (
    <div className="portfolio-container">
      <div className="portfolio-first-part">
        <div className="left-div">
          {data?.data?.[0] && <Lefttext data={data?.data?.[0]} />}
        </div>
        <div className="right-div">
          <Fullscreencarousel data={carouselData} />
        </div>
      </div>

      <Secondpage data={data?.data?.[0]} />
    </div>
  );
};

export default Portfolio;

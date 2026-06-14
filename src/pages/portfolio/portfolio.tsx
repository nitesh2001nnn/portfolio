import { useQuery } from "@tanstack/react-query";
import Carousel from "../../global/components/carousel/carousel";
import Fullscreencarousel from "../../global/components/carousel/full-screen-carousel/full-screen-carousel";
import Lefttext from "../WebTemplates/left-text-right-img/left-text";
import Secondpage from "../WebTemplates/second-page/second-page";
import "./portfolio.scss";
import { portfolio_page_service } from "../services/home-page";

const Portfolio = () => {
  const CarouselData = [
    {
      id: 1,
      src: "./assets/icons/coder.jpeg",
      label: "Real Time Chat App",
      value: "Chatting with anyone with creating the room",
    },
    {
      id: 2,
      src: "./assets/icons/coder.jpeg",
      label: "Tutorial WebApp",
      value: "Learn the coding in just your fingertip's",
    },
    {
      id: 3,
      src: "./assets/icons/coder.jpeg",
      label: "Tutorial WebApp",
      value: "Learn the coding in just your fingertip's",
    },
    {
      id: 4,
      src: "./assets/icons/coder.jpeg",
      label: "Real Time Chat App",
      value: "Chatting with anyone with creating the room",
    },
    {
      id: 5,
      src: "./assets/icons/coder.jpeg",
      label: "Tutorial WebApp",
      value: "Learn the coding in just your fingertip's",
    },
    {
      id: 6,
      src: "./assets/icons/coder.jpeg",
      label: "Tutorial WebApp",
      value: "Learn the coding in just your fingertip's",
    },
  ];

  const { data } = useQuery({
    queryKey: ["portfolio"],
    queryFn: portfolio_page_service,
  });

  console.log("data in portfolio", data?.data?.[0]);
  return (
    <div className="portfolio-container">
      <div className="portfolio-first-part">
        <div className="left-div">
          {data?.data?.[0] && <Lefttext data={data?.data?.[0]} />}
        </div>
        <div className="right-div">
          <Fullscreencarousel data={CarouselData} />
        </div>
      </div>

      <Secondpage />
    </div>
  );
};

export default Portfolio;

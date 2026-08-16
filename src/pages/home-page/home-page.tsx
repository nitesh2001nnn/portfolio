import Navbar from "../navbar/navbar";
import "./home-page.scss";
import FirstAnimatedPage from "../WebTemplates/first-animated-page/first-animated-page";
import Secondpage from "../WebTemplates/second-page/second-page";
import Footer from "../footer/footer";
import { home_Page_service } from "../services/home-page";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [dataSet, setData] = useState();

  const data = () => {
    home_Page_service({
      successCB: (res: any) => {
        console.log("res for home page", res);
        setData(res.data.data[0].profile);
      },
      errorCB: (err: any) => {
        console.log("errro", err);
      },
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="main-container">
        <Navbar />

        <FirstAnimatedPage data={dataSet} />
        <Secondpage data={dataSet} />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

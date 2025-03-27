import Navbar from "../navbar/navbar";
import Tempfour from "../WebTemplates/temp-four/temp-four";
import TempOne from "../WebTemplates/temp-one/temp";
import Tempthree from "../WebTemplates/temp-three/temp-three";
import tempTwo from "../../pages/WebTemplates/temp-two/tempTwo.json";
import Temptwo from "../WebTemplates/temp-two/temp-two";
import "./home-page.scss"


const Homepage = () => {
    const dataPassing = (data) => {
        return data?.map((item, index) => {
          switch (item.type) {
            case "temp-two":
              return <Temptwo data={item} />;
            case "about-me":
              return <Tempthree data={item} />;
            case "temp-four":
              return <Tempfour data={item} />;
    
            default:
              return null;
          }
        });
      };
    
      return (
        <>
          <div className="main-container">
            <Navbar />
    
            <TempOne />
            {dataPassing(tempTwo)}
          </div>
        </>
      );
}

export default Homepage;

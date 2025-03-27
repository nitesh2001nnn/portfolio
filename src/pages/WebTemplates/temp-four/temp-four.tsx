import Carousel from "../../../global/components/carousel/carousel";
import "./temp-four.scss";

const Tempfour = (props:any) => {
    console.log("data from 4",props)
  return (
    <div className="temp-four-container">
        <Carousel data={props.data.data}/>
      
    </div>
  )
}

export default Tempfour;

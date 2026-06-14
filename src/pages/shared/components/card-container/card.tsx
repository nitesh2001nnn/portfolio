import "./card.scss";

const Card = (props: any) => {
  return (
    <div className="card-wrapper">
      <div className="card-img-layout">
        <img src={props.src}></img>
      </div>
      <div className="card-title-container">
        <div className="card-title">
          <div className="title bold-text-medium-xs ">{props.title}</div>
          <div className="sub-title bold-text-small">{props.description}</div>
        </div>
        <div className="arrows">{/* <img></img> */}</div>
      </div>
    </div>
  );
};

export default Card;

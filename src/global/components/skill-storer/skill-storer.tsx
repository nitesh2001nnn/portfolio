import "./skill-storer.scss";

type skillStore = {
  skillsData: [{ id: number; value: string }];
  onClose: (item: any) => void;
};

const SKillstorer = ({ skillsData, onClose }: skillStore) => {
  const handleClose = (item: any) => {
    console.log("item dleted", item);
    onClose(item);
  };
  return (
    <div className="skills-storer-container">
      {skillsData
        ? skillsData.map((item: any, index: any) => {
            return (
              <div className="skill-btn" key={index}>
                <div>{item.value}</div>
                <img
                  src="./assets/icons/small-close.svg"
                  onClick={() => handleClose(item)}
                ></img>{" "}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default SKillstorer;

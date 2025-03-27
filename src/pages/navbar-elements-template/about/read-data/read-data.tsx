import { useState } from "react";
import Toc from "../../../../global/components/TOC/toc";
import "./read-data.scss";

const Readdata = (props: any) => {
  const [selectedheading, setSelectedHeading] = useState();

  const handleHeadings = (headingId: any) => {
    setSelectedHeading(headingId);

    const getHeadingElement = document.getElementById(headingId);
    if (getHeadingElement) {
      getHeadingElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the heading
      });
    }
  };
  const handleNext = () => {
    props.changeScreen(
      {
        name: "question-practice",
      },
      true
    );
  };
  return (
    <div className="read-data-container">
      <div className="first-panel">
        <Toc onHeadingClick={handleHeadings} />
      </div>
      <div className="second-panel">
        <div className="getting-started-container">
          <div className="first-title">
            <div id="getting-started" title="Getting-Started">
              Getting started
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              in!
            </span>
          </div>

          <div className="second-title">
            <div id="how-to-install" title="How to install">
              How to install
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              in!
            </span>
          </div>

          <div className="third-title">
            <div id="how-to-setup" title="How to setup">
              How to setup
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              in!
            </span>
          </div>

          <div className="fourth-title">
            <div id="how-to-make-file" title="How to make a file">
              How to make a file
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              in! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam, ex voluptatum! Corrupti asperiores autem laudantium
              nesciunt voluptatibus repellat quo sequi consequuntur vel odio qui
              consequatur, quia eum blanditiis quisquam sunt minus, perferendis
              commodi in assumenda dolorem! Numquam sed ipsum fugiat impedit
              cumque, sequi temporibus magnam voluptatem totam corporis,
              reiciendis quas? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum, quas, error aliquid ea amet placeat
              necessitatibus adipisci, voluptates non laborum sapiente
              cupiditate neque cum molestiae quaerat eveniet. Hic iusto quidem
              illum accusamus! Eaque consectetur non sequi quia sed recusandae
              autem culpa blanditiis dolorem, fuga, est quam rerum quisquam.
              Deserunt quidem eveniet eos doloremque quisquam rerum aliquam sint
              voluptates quaerat vero. Cupiditate nam aliquam recusandae dolor
              sint, ipsam libero neque blanditiis vitae eaque nobis dolore,
              officiis tenetur molestiae obcaecati voluptatem accusantium
              eveniet error, laudantium sunt tempore dolorum deleniti eius
              assumenda. Consequuntur, quo earum! Earum dicta nihil tempore
              ducimus eveniet est sapiente.
            </span>
          </div>
        </div>
      </div>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Readdata;

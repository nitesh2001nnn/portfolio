import { useRef, useState } from "react";
import "./navbar.scss";
import About from "../navbar-elements-template/about/about";
import OverlayElement from "../../global/overlay/overlay";
import { Positions } from "../../global/constants/helpers";

const Navbar = () => {
  const [aboutMe, setAboutMe] = useState(false);
  const aboutRef = useRef(null);
  const navbarRef=useRef(null);
  const[aboutid,setAboutID]=useState()
  const handleOpenSide = () => {
    setAboutMe(true);
  };

  const handleAboutContent=(id:any)=>{
    setAboutID(id)
  }

  return (
    <>
      <div className="navbar-container"  ref={navbarRef}>
        <div className="ul-tag">
          <span>Home</span>
          <span>Documentations</span>
          <span onClick={handleOpenSide} ref={aboutRef} className="about">
            About
          </span>
          <span>Dashboard</span>
        </div>
        {aboutMe && (
        <OverlayElement
          refElement={aboutRef}
          overlyClick={() => setAboutMe(false)}
          position={Positions.bottom}
        >
          <div className="ref-container" >
            <span className="dropdown-content" onClick={()=>handleAboutContent(1)}>About Certification</span>
            <span className="dropdown-content">How to Read Documentation</span>
          </div>
        </OverlayElement>
      )}
      </div>
      
      {/* <div className='about-content' onClick={()=>setAboutMe(false)}>
        <About ref={aboutRef}/>
        </div> */}
         {aboutid &&
          <div className='about-content' onClick={()=>setAboutID(null)}>
            <About id={aboutid} ref={navbarRef} />

          </div>
}
        
    </>
  );
};

export default Navbar;

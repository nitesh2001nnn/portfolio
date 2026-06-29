import { useState } from "react";
import "./navbar.scss";
import { navbarElement } from "./constant/navbar-constant";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isBreadCombOpen, setBreadCombOpen] = useState(false);

  const handleOpenBd = () => {
    setBreadCombOpen(!isBreadCombOpen);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="./assets/icons/logo_1.jpeg"></img>
        </div>
        <div
          className={`${
            isBreadCombOpen ? "bottom-side-links" : "right-side-links"
          }`}
        >
          <div className="li-items text-body-normal ">
            {navbarElement.map((itx, ind) => {
              return (
                <span key={ind} onClick={() => navigate(itx.link)}>
                  {itx.label}
                </span>
              );
            })}
          </div>
          <div className="social-media-items">
            <img src="./assets/icons/link_1.png"></img>
            <img src="./assets/icons/insta_2.png"></img>
            <img className="wp" src="./assets/icons/wp.jpg"></img>
          </div>
        </div>
        <img
          src="./assets/icons/menu_1.png"
          className="bread-cumb"
          onClick={handleOpenBd}
        ></img>
      </div>
    </>
  );
};

export default Navbar;

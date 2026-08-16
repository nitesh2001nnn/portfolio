import { useEffect, useState } from "react";
import "./navbar.scss";
import { navbarElement } from "./constant/navbar-constant";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { navbarApi } from "./api/navbar-api";
import { API_CONFIG } from "../../helpers/api-config";

const Navbar = () => {
  const [isBreadCombOpen, setBreadCombOpen] = useState(false);

  const handleOpenBd = () => {
    setBreadCombOpen(!isBreadCombOpen);
  };

  const { data } = useQuery({
    queryKey: ["navbar"],
    queryFn: navbarApi,
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setBreadCombOpen(false);
  }, [pathname]);
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
            {data &&
              data?.data.data[0]?.data[0]?.data?.map((itx: any, index: number) => {
                return (
                  <img
                    key={index}
                    src={`${API_CONFIG.BASEURL}${itx.img.url}`}
                    onClick={() => window.open(itx.link)}
                  ></img>
                );
              })}
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

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

const Appbase = () => {
  return (
    <div className="app-base-container">
      <Navbar />
      <div className="app-base-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Appbase;

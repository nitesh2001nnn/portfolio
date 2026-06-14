import React, { useEffect, useState } from "react";
import Lefttext from "../WebTemplates/left-text-right-img/left-text";
import "./contact.scss";
import Form from "./form/form";
import { contact_Page_Service } from "../services/home-page";
const Contact = () => {
  const button = [
    {
      id: 1,
      name: "linkedin",
      url: "",
      img: "assets/icons/linkedin.png",
    },
    {
      id: 2,
      name: "linkedin",
      url: "",
      img: "assets/icons/linkedin.png",
    },
    {
      id: 3,
      name: "linkedin",
      url: "",
      img: "assets/icons/linkedin.png",
    },
    {
      id: 4,
      name: "linkedin",
      url: "",
      img: "assets/icons/linkedin.png",
    },
  ];

  const [response, setResponse] = useState();

  const contactData = () => {
    contact_Page_Service({
      successCb: (res: any) => {
        console.log("about contact data", res);
        setResponse(res.data.data?.[0]);
      },
      errorCb: (err: any) => {
        console.error(err);
      },
    });
  };

  useEffect(() => {
    contactData();
  }, []);
  return (
    <div className="contact-container">
      <div className="top-contact">
        <Lefttext data={response} buttonData={button} />
      </div>
      <div className="form-temp">
        <Form />
      </div>
    </div>
  );
};

export default Contact;

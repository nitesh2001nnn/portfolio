import { useEffect, useState } from "react";
import Lefttext from "../WebTemplates/left-text-right-img/left-text";
import "./contact.scss";
import Form from "./form/form";
import { contact_Page_Service } from "../services/home-page";
const Contact = () => {
  const [response, setResponse] = useState();
  const [buttonData, setButton] = useState([]);

  const contactData = () => {
    contact_Page_Service({
      successCb: (res: any) => {
        console.log("about contact data", res.data.data[0].data);
        setResponse(res.data.data?.[0]);
        const updateData = res.data.data[0].data.map((itx: any, ind: number) => ({
          id: ind,
          name: itx.value,
          url: itx.url,
          img: itx.img.url,
        }));
        setButton(updateData);
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
        <Lefttext data={response} buttonData={buttonData} />
      </div>
      <div className="form-temp">
        <Form />
      </div>
    </div>
  );
};

export default Contact;

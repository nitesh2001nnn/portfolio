/* eslint-disable @typescript-eslint/no-explicit-any */
import homeData from "../../json-constants/home.json";
import aboutData from "../../json-constants/about.json";
import contactData from "../../json-constants/contact.json";
import portfolioData from "../../json-constants/portfolio.json";

export const home_Page_service = (params: any) => {
  setTimeout(() => {
    params.successCB({
      data: {
        data: [
          {
            profile: homeData
          }
        ]
      }
    });
  }, 0);
};

export const about_Page_Service = (params: any) => {
  setTimeout(() => {
    params.successCb({
      data: {
        data: [
          aboutData
        ]
      }
    });
  }, 0);
};

export const contact_Page_Service = (params: any) => {
  setTimeout(() => {
    params.successCb({
      data: {
        data: [
          contactData
        ]
      }
    });
  }, 0);
};

export const portfolio_page_service = async () => {
  return {
    data: [
      portfolioData
    ]
  };
};
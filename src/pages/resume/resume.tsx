import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "./resume.scss";
import { verifyToken } from "../../services/auth-services";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import Modal from "../../global/components/modal/modal";
import Resumeforms from "../resume-forms/resume-forms";


const resumeData: any = [
  {
    id: 1,
    title: "Profile",
    description:
      "Frontend Developer with 1.9 years of experience at Jio Platforms, specializing in React.js. Proven track record in delivering responsive, user friendly w eb applications and completing 3 major projects. Skilled in modern JavaScript, scalable UI development, and cross functional collaboration. Eager to contribute to innovative products and grow as a frontend expert.",
  },
  {
    id: 2,
    title: "Skils",
    skills: [
      {
        id: 221,
        title: "Frontend",
        skillset: [
          "reactjs",
          "nextjs",
          "css",
          "html",
          "javascript",
          "redux",
          "reduxtoolkit",
          "reduxsaga",
          "canvas",
          "chartjs",
          "serversiderendering",
          "webhook",
          "seo",
          "apiintegration",
          "socketio",
          "axios",
          "fetch",
        ],
      },
      {
        id: 222,
        title: "Backend",
        skillset: [
          "nodejs",
          "java",
          "jdbc",
          "sql",
          "firebase",
          "expressjs",
          "jwt",
          "nodemailer",
        ],
      },
      {
        id: 223,
        title: "Tools",
        skillset: ["VS Code", "Github", "Netlify", "Render "],
      },
    ],
  },
  {
    id: 3,
    title: "Experience",
    companies: [
      {
        id: 31,
        title: "Jio Platforms Limited",
        subtitle: "Software Developer (SDE 1) || Frontend Developer (React JS)",

        details:
          "Developed scalable, maintainable UIs for three major React.js projects, enhancing user engagement by 40%.Wrote clean, modular code adhering to industry best practices.Collaborated closely with senior developers, participating in code reviews and improving code quality, while honing problem s olving skills and React proficiency.",
      },
      {
        id: 32,
        title: "IT Netwo rkZ Infosystems Pvt Limited",
        subtitle: "Junior Software Developer (Intern)",

        details:
          "Developed scalable, maintainable UIs for three major React.js projects, enhancing user engagement by 40%.Wrote clean, modular code adhering to industry best practices.Collaborated closely with senior developers, participating in code reviews and improving code quality, while honing problem s olving skills and React proficiency.",
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    Projects: [
      {
        id: 41,
        title: "JioCX Developer Experience Portal",
        subtitle: "Technologies: Next.js, Axios, CSS, JavaScript",

        details:
          "Built login/signup, SSR pages, and reusable components; improved SEO and reduced load time by 35%. Implemented server siderendering (SSR) for improved SEO and performance. Built reusable components and integrated APIs for seamless datafetching.Managed deployment across multiple environme nts (Dev, QA, PPD,Production Live Demo https://Developer.jiocx.com",
      },
      {
        id: 42,
        title: "IT Netwo rkZ Infosystems Pvt Limited",
        subtitle: "Junior Software Developer (Intern)",

        details:
          "Developed scalable, maintainable UIs for three major React.js projects, enhancing user engagement by 40%.Wrote clean, modular code adhering to industry best practices.Collaborated closely with senior developers, participating in code reviews and improving code quality, while honing problem s olving skills and React proficiency.",
      },
    ],
  },
  {
    id: "5",
    title: "Education",
    instituteName: "Yeshwantrao chavan college of engineering",
    grade: "CGPA",
    percentage: "8.3",
    graduation_year: "2019-2023",
    degree: "BTECH in Electronic's and Telecommunication",
  },
];

const resumeProfile = {
  id: 1,
  name: "Nitesh Nimje",
  companyName: "Jio Platforms Limited",
  role: "Software Developement Engineer - SDE-1",
  profile: "./assets/icons/image30.jpg",
  contact: {
    linkedinUrl: "https://gotonow/sg2P3",

    githubUrl: "https://github.com/nitesh2001nnn",
    contactNo: "7987962662",
    email: "niteshnimje77@gmail.com",
  },
};

const Resume = () => {
  const[resumeAddModal,setResumeAddModal]=useState(true)
  const [googleSignIn, setGoogleSignIN] = useState(
    localStorage.getItem("token") ? false : true
  );
  const handleGoogleLogin = async (credentialLogin: any) => {
    const token = credentialLogin.credential;
    console.log("token",token)
    verifyToken({
      payload: { token },
      successCB: (res: any) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setGoogleSignIN(false);
        }
      },
      errorCB: (err: any) => {
        console.log("Error", err);
      },
    });
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (!getToken) {
      setGoogleSignIN(true);
      return;
    }
    const decode: JwtPayload = jwtDecode(getToken);

    const duration = Math.floor(Date.now() / 1000);

    if (decode.exp && duration > decode.exp) {
      localStorage.removeItem("token");
      // setGoogleSignIN(true);
    }
  }, []);

  useEffect(() => {
    console.log("token", googleSignIn);
  }, [googleSignIn]);
  return (
    <div className="resume-container">
      <div className="resume-upload-section">
        <GoogleOAuthProvider clientId="623261518102-6ntr7qg001u60uvh61rj46p33c5h4rnp.apps.googleusercontent.com">
          UPload section
          {googleSignIn && <GoogleLogin onSuccess={handleGoogleLogin} />}
        </GoogleOAuthProvider>
      </div>
      <div className="resume-divider">
        <div className="resume-maker">
          <div className="resume-title">
            {resumeData.map((item: any, index: any) => {
              console.log("item", item);
              return (
                <div key={index}>
                  <div className="resume-head bold-text-medium">
                    {item.title}
                  </div>
                  <div className="border-line"></div>
                  <div className="resume-description text-body-xs ">
                    {item.description}
                  </div>
                  {item.id == 2 &&
                    item.skills.map((subItem: any, id: any) => {
                      return (
                        <div key={id} className="skill-container">
                          <div className="bold-text-medium-xs">
                            {subItem.title}:{"   "}
                          </div>
                          <div className="skillset">
                            {subItem.skillset.map(
                              (skill: any, skill_id: any) => {
                                return (
                                  <div
                                    key={skill_id}
                                    className="text-body-xs skills-button"
                                  >
                                    {skill}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      );
                    })}
                  <div className="company-wrap">
                    {item.id == 3 &&
                      item.companies.map((citem: any, cid: number) => {
                        return (
                          <div key={cid} className="company-container">
                            <div className="company-name">
                              <span className="bold-text-medium-xs">
                                {citem.title}
                              </span>
                              :{" "}
                              <span className="text-body-xxs">
                                {citem.subtitle}
                              </span>
                            </div>
                            <div className="text-body-xs">{citem.details}</div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="project-wrapper">
                    {item.id == 4 &&
                      item.Projects.map((citem: any, cid: number) => {
                        return (
                          <div key={cid} className="project-container">
                            <div className="project-name">
                              <span className="bold-text-medium-xs">
                                {citem.title}
                              </span>
                              :{" "}
                              <span className="text-body-xxs">
                                {citem.subtitle}
                              </span>
                            </div>
                            <div className="text-body-xs">{citem.details}</div>
                          </div>
                        );
                      })}
                  </div>

                  {item.id == 5 && (
                    <div className="education-details">
                      <div className="education-detail">
                        <div className="education-degree bold-text-medium-xs">
                          {item.degree}
                        </div>
                        <div className="institute-name text-body-xs">
                          {item.instituteName}
                        </div>
                        <div className="grade text-body-xs">
                          {item.grade}-{item.percentage}
                        </div>
                      </div>
                      <div className="education-year bold-text-medium-xs">
                        {item.graduation_year}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="left-side-resume">
          <div className="img-container">
            <img src={resumeProfile.profile}></img>
            <div className="profile-name">{resumeProfile.name}</div>
            <div className="role bold-text-medium-xxs">
              {resumeProfile.role}
            </div>
          </div>
          <div className="contact-details">
            <div>
              <span>Contact-No: </span>
              {resumeProfile.contact.contactNo}
            </div>
            <div>
              <span>Email: </span>
              {resumeProfile.contact.email}
            </div>
            <div className="social-profiles">
              <img src="./assets/icons/linkedin.svg"></img>
              {resumeProfile.contact.linkedinUrl}
            </div>
            <div className="social-profiles">
              <img src="./assets/icons/github.svg"></img>
              {resumeProfile.contact.githubUrl}
            </div>
          </div>
        </div>
      </div>
      {
        resumeAddModal && 
        <Modal onClose={() => setResumeAddModal(false)}>
        <Resumeforms />
      </Modal>
      }
      
    </div>
  );
};

export default Resume;

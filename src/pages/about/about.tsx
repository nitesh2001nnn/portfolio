/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import Doughnut from "../../global/components/doughnut/doughnut";
import "./about.scss";

import Graph from "../../global/components/graph/graph";

import { about_Page_Service } from "../services/home-page";

const About = () => {
  const skillsSet = [
    {
      id: 1,
      title: "FRONTEND",
      data: [
        "HTML",
        "CSS",
        "Javascript",
        "Chart.JS",
        "React.JS",
        "Next.JS",
        "Canvas",
        "Redux",
        "Redux Toolkit & Thunk",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      title: "BACKEND",
      data: [
        "Node.JS",
        "Express.JS",
        "SQL",
        "Java",
        "JDBC",
        "REST API's",
        "JSON Web Token (JWT)",
      ],
    },
  ];
  const [aboutData, setAboutData] = useState<any>();
  const [data, setData] = useState<any>({
    labels: ["Frontend", "Backend"],
    datasets: [
      {
        label: "Skills",
        data: [],
        backgroundColor: ["black", "#cacaca"],
        borderWidth: 1,
        spacing: 2,
        offset: 5,
      },
    ],
  });

  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        barPercentage: 20,
        barThickness: 50,
        maxBarThickness: 50,
        minBarLength: 20,
        data: [],
        backgroundColor: [],
      },
    ],
    font: {
      weight: "bold",
      size: 20,
    },
  });

  const GraphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      labels: {},
    },
    scales: {
      x: {
        grid: {
          offset: false,
          display: false,
        },
        ticks: {
          font: {
            weight: "bold" as const,
          },
        },
      },
      y: {
        grid: {
          offset: false,
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  const chartOptions = {
    responsive: true,
    cutout: "0%",

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        formatter: (_value: any, context: any) => {
          console.log("value,context", context);
          return context.chart.data.labels?.[context.dataIndex] ?? "";
        },
        font: {
          weight: "bold" as const,
          size: 20,
        },
      },
    },
  };

  const about_Data_ApiCall = () => {
    about_Page_Service({
      successCb: (res: any) => {
        console.log("res of about", res);
        setAboutData(res.data.data?.[0]);
        setData((prev: any) => {
          return {
            ...prev,
            datasets: prev.datasets.map((item: any) => {
              return {
                ...item,
                data: [
                  res.data.data?.[0].skills?.[1].total,
                  res.data.data?.[0].skills?.[0].total,
                ],
              };
            }),
          };
        });
        setGraphData((prev: any) => {
          return {
            ...prev,
            labels: res.data.data?.[0].top_skills.map(
              (item: any) => item.label
            ),
            datasets: prev.datasets.map((item: any) => {
              return {
                ...item,
                data: res.data.data?.[0].top_skills.map(
                  (item: any) => item.value
                ),
                backgroundColor: res.data.data?.[0].top_skills.map(
                  (item: any) => item.color
                ),
              };
            }),
          };
        });
      },
      errorCb: (err: any) => {
        console.log("error compile about data", err);
      },
    });
  };

  useEffect(() => {
    about_Data_ApiCall();
  }, []);

  useEffect(() => {
    console.log("res data", aboutData);
    console.log("res for datasets", data);
    console.log("graphdata", graphData);
  }, [aboutData, data, graphData]);
  return (
    <div className="about-main-container">
      {/* <div className="about-first-div">
        <Lefttext />
      </div> */}

      <div className="about-skills">
        <div className="skill-section">
          <div className="bold-text">{skillsSet[1]?.title}</div>
          <div className="skill-container">
            {aboutData?.skills?.[0].dataSets.map((item: any, index: any) => {
              return (
                <div className="skill-wrapper text-body-xs" key={index}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="canvas-element">
          <Doughnut data={data} options={chartOptions} />
        </div>
        <div className="skill-section">
          <div className="bold-text">{skillsSet[0]?.title}</div>
          <div className="skill-container">
            {aboutData?.skills?.[1].dataSets.map((item: any, index: any) => {
              return (
                <div className="skill-wrapper text-body-xs" key={index}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="graph-container">
        <Graph data={graphData} options={GraphOptions} />
      </div>
    </div>
  );
};

export default About;

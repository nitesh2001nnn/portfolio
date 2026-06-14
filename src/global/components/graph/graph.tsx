import React, { useEffect, useRef } from "react";
import "./graph.scss";

import {
  Chart,
  ChartData,
  ChartOptions,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend,
  BarController,
} from "chart.js";

Chart.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

interface chartBarType {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
}

const Graph = ({ data, options }: chartBarType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (!ctx) return;
    if (chartRef.current) {
      chartRef.current?.destroy();
      chartRef.current = null;
    }
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data,
      options,
    });
    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [data, options]);
  return (
    <div
      className="bar-container"
      // style={{
      //   position: "relative",
      //   width: "50%",
      //   height: "inherit",
      //   flex: "1",
      // }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Graph;

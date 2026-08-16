import { useEffect, useRef } from "react";
import "./doughnut.scss";
import {
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  ChartData,
  ChartOptions,
  DoughnutController,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);
type DoughnutChartData = ChartData<"doughnut", number[], string>;
type DoughnutChartOptions = ChartOptions<"doughnut">;
interface doughnutTypes {
  data: DoughnutChartData;
  options: DoughnutChartOptions;
}

const Doughnut = ({ data, options }: doughnutTypes) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");

    if (!ctx) return;
    if (chartRef.current) {
      chartRef.current?.destroy();
      chartRef.current = null;
    }

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options,
      plugins: [ChartDataLabels],
    });
    console.log("canvas ref", chartRef);

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [data, options]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <canvas ref={canvasRef} key="doughnut-canvas" />
    </div>
  );
};

export default Doughnut;

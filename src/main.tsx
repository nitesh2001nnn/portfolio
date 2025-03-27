import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import routes from "../routes/routes.tsx";
import config from "./helpers/config.tsx";

const getEnvData = async () => {
  try {
    const res = await fetch("assets/env-config/environment.json");
    const response = await res.json();

    for (const [key, value] of Object.entries(response)) {
      config[key] = value;
    }
  } catch (err) {
    return err;
  }
};

getEnvData();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />

    <App />
  </StrictMode>
);

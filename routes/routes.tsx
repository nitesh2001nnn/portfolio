import { createBrowserRouter } from "react-router-dom";
import {
  LazyAbout,
  LazyLogin,
  LazyPortFolio,
  LazyResetPassword,
  LazySignup,
  LazyContact,
  LazyResume,
} from "./lazy-routes";
import { Suspense } from "react";

import Homepage from "../src/pages/home-page/home-page";
import Appbase from "../src/pages/app-base/app-base";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "",
    element: <Appbase />,
    children: [
      {
        path: "portfolio",
        element: (
          <Suspense>
            <LazyPortFolio />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <LazyContact />
          </Suspense>
        ),
      },
      {
        path: "resume",
        element: (
          <Suspense>
            <LazyResume />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import { LazyLogin, LazyResetPassword, LazySignup } from "./lazy-routes";
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
        path: "signup",
        element: (
          <Suspense>
            <LazySignup />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense>
            <LazyLogin />
          </Suspense>
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense>
            <LazyResetPassword />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;

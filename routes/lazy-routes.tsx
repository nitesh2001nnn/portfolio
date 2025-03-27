import React from "react";

const LazySignup = React.lazy(
  () => import("../src/pages/authentication/signup/signup-screen")
);
const LazyLogin = React.lazy(
  () => import("../src/pages/authentication/login/login-screen")
);

export { LazySignup, LazyLogin };

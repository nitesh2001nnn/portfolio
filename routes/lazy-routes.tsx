import React from "react";

const LazySignup = React.lazy(
  () => import("../src/pages/authentication/signup/signup-screen")
);
const LazyLogin = React.lazy(
  () => import("../src/pages/authentication/login/login-screen")
);
const LazyResetPassword = React.lazy(
  () =>
    import("../src/pages/authentication/forgot-password/forgot-password-screen")
);

const LazyPortFolio = React.lazy(
  () => import("../src/pages/portfolio/portfolio")
);
const LazyContact = React.lazy(() => import("../src/pages/contact/contact"));

const LazyAbout = React.lazy(() => import("../src/pages/about/about"));
const LazyResume = React.lazy(() => import("../src/pages/resume/resume"));

export {
  LazySignup,
  LazyLogin,
  LazyResetPassword,
  LazyPortFolio,
  LazyAbout,
  LazyContact,
  LazyResume,
};

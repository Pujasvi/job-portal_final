import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/login";
import { checkIsLoggedIn, getType } from "./utils/commonUtils";
import Employer from "./components/Employer";
import EmployerForm from "./components/Employer/employerForm/EmployerForm";
import Freelancer from "./pages/freelancer";
import Applications from "./components/Employer/applications/Applications";
import Profile from "./components/profile/Profile";
import JobListing from "./components/jobListing/JobListing";

const checkAuthenticated = (component, redirectUrl) => {
  if (checkIsLoggedIn()) {
    return component;
  }
  return (
    <Navigate to={`/login?redirect=${redirectUrl}`} state={{ from: "" }} />
  );
};
const type = getType('type');
const commonRoutes = [

  {
    path: "/login",
    element: <Login />,
  },
];
const eRoutes = [
  {
    path: "/",
    element: <Navigate to="/home/" replace />,
  },
  {
    path: "/home",
    children: [
      {
        path: "/home/view-jobs",
        element: checkAuthenticated(
          <>
            <Home />
            <Employer />
          </>,
          "home"
        ),
      },
      {
        path: "/home/post-job",
        element: checkAuthenticated(
          <>
            <Home />
            <EmployerForm />
          </>,
          "home"
        ),
      },
      {
        path: "/home/applications/:id",
        element: checkAuthenticated(<Applications />, "home"),
      },
      {
        path: "/home/application/:id",
        element: checkAuthenticated(<Profile />, "home"),
      },
      {
        path: "/home/",
        element: checkAuthenticated(
          <>
            <Home />
            <Employer />
          </>,
          "home"
        ),
      },
    ],
  },
];
const uRoutes = [
  {
    path: "/",
    element: <Navigate to="/job-listing" replace />,
  },
  {
    path: "/user",
    element: checkAuthenticated(<Freelancer />, "user"),
  },
  {
    path: "/job-listing",
    element: checkAuthenticated(<JobListing/>, "user"),
  },
];
export const router = createBrowserRouter([
  ...commonRoutes,
  ...uRoutes,
  ...eRoutes
]);
const AppRouter = () => {
  return null;
};

export default AppRouter;

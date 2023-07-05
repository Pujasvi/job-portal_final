import React from "react";
import { createBrowserRouter, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Login from "./components/Login/login";
import { checkIsLoggedIn } from "./utils/commonUtils";
import EmployerRoutes from "./components/Employer/EmployerRoutes";
import Employer from "./components/Employer";
import EmployerForm from "./components/Employer/employerForm/EmployerForm";
import Freelancer from "./pages/freelancer";

const checkAuthenticated = (component, redirectUrl) => {
  const a = checkIsLoggedIn();
  if (checkIsLoggedIn()) {
    return component;
  }
  return (
    <Navigate to={`/login?redirect=${redirectUrl}`} state={{ from: "" }} />
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    // element:checkAuthenticated(<Home/>, 'home'),
    children: [
      {
        path: "/home/view-jobs",
        element: (
          <>
            <Home />
            <Employer />
          </>
        ),
      },
      {
        path: "/home/post-job",
        element: (
          <>
            <Home />
            <EmployerForm />
          </>
        ),
      },
    ],
  },
  ,
  {
    path: "/user",
    element: <Freelancer />,
  },
]);

const AppRouter = () => {
  return null;
};

export default AppRouter;

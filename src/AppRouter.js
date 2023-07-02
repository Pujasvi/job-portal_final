import React from "react";
import { createBrowserRouter,Route ,Navigate } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";
import Login from "./Components/Login";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);


const AppRouter = () => {
  return null;
};

export default AppRouter;

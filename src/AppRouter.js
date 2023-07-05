import React from "react";
import { createBrowserRouter,Route ,Navigate } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";
import Login from "./Components/Login/login";
import { checkIsLoggedIn } from "./utils/commonUtils";


const checkAuthenticated = (component,redirectUrl) => {
  const a =checkIsLoggedIn();
  if(checkIsLoggedIn()){
    return component
  }
  return <Navigate to={`/login?redirect=${redirectUrl}`} state={{ from: '' }} />
  
};



export const router = createBrowserRouter([
  {
    path:"/",
    element: checkAuthenticated(<Home/>,'home')
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/home",
    element:checkAuthenticated(<Home/>, 'home')
  }
])

const AppRouter = () => {
  return null;
};

export default AppRouter;

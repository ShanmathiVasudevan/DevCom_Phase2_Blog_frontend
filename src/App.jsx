import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import EditBlog from "./Pages/EditBlog/EditBlog";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      default: true
    
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

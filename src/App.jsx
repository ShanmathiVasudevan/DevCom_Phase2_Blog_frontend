import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import EditBlog from "./Pages/EditBlog/EditBlog";
import Login from "./Pages/Login/Login";
import LoginForm from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import MyBlogs from "./Pages/Home/MyBlogs.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      default: true,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/editblog",
      element: <EditBlog />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/myblogs",
      element: <MyBlogs />,
    },
  ]);
  return (
    // (<Login />),
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

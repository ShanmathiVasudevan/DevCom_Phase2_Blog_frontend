import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import EditBlog from "./Pages/EditBlog/EditBlog";
import Login from "./login";
import Signup from "./signup";

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/editblog">
              <EditBlog />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

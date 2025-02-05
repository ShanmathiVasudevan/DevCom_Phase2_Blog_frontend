import React, {useState, useEffect} from 'react';
import "react-quill/dist/quill.snow.css";
import EditBlog from './Pages/EditBlog/EditBlog';
import Login from "./login";
import Signup from "./signup";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <Router>
      <Signup />
      <div className="content">
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/editblog">
          <EditBlog/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

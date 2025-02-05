import Login from "./Login.jsx";
import Signup from "./signup";
import Home from './Pages//Home/Home.jsx'

import MyBlogs from './Pages/Home/MyBlogs.jsx'
import SignIn from './Pages/Home/SignIn.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Signup /> */}
      <div className="content">
        <Routes>
          <Route  path="/signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/MyBlogs" element={<MyBlogs/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

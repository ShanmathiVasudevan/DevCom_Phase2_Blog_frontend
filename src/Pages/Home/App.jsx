import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home.jsx'
import ContactUs from './ContactUs.jsx';
import MyBlogs from './MyBlogs.jsx'
import SignIn from './SignIn.jsx'
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/MyBlogs" element={<MyBlogs/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App

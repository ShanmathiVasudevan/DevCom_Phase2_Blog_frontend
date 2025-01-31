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
        </Switch>
      </div>
    </Router>
  );
}

export default App;

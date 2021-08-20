import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/Home"
import About from "./screens/About"
import NavBar from "./navigation/NavBar"

function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

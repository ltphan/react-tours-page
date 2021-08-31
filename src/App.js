import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/Home"
import Closure from "./screens/Closure"
import Callbacks from "./screens/Callbacks"
import Form from "./screens/Form"
import NavBar from "./navigation/NavBar"

function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/closure">
        <Closure />
      </Route>
      <Route path="/callbacks">
        <Callbacks />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

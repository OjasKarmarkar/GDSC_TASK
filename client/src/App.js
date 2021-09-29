import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateNew from "./CreateNew";
import Edit from "./Edit";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/edit" exact component={Edit}></Route>
      <Route path="/new" exact component={CreateNew}></Route>
      </Switch>
    </Router>

  );
}

export default App;

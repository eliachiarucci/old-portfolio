import logo from "./logo.svg";
import "./App.sass";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./screens/Homepage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

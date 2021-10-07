import './App.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import StoriesComponent from './Components/StoriesComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/story/:categoryName">
            <StoriesComponent />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

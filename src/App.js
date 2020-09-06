import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import List from "./pages/List";
import Main from "./pages/Main";
import Search from "./pages/Search";
import ListCheck from "./pages/ListCheck";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/list/:check" component={ListCheck} />
          <Route path="/list" component={List} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Properties from "./Pages/Properties/Properties";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/properties" component={Properties} />
          <Route path="/about" component={About} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
          <Project/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

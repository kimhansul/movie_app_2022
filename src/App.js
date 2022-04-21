import React from "react";
import axios from "axios";
import Home from "./routes/Home"
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Navigation from "./components/Navigation"
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;
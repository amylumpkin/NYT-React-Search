import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import { Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="app-wrapper">
          <Route exact path="/" components={Home} />
          <Route path="/create" components={Saved} />
        </Container>
      </Router>
    );
  }
}

export default App;
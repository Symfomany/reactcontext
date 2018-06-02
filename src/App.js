import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Store from "./store";
import PropTypes from "prop-types";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "je suis Charlie"
    };
  }

  getChildContext() {
    return Store;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
      </div>
    );
  }
}

App.childContextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};

export default App;

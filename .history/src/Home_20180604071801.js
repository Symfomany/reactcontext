import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./Title";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Okay {this.context.data.title}</h1>
        <p>{this.context.data.subtitle}</p>
        <Title />
      </div>
    );
  }
}

Home.contextTypes = {
  data: PropTypes.object
};

export default Home;

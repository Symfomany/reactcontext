import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Okay {this.context.data.title}</h1>;
  }
}

Home.contextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};

export default Home;

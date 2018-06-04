import React, { Component } from "react";
import PropTypes from "prop-types";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h3>{this.context.data.subtitle}</h3>;
  }
}

Title.contextTypes = {
  data: PropTypes.object
};

export default Title;

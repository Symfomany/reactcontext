import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h3>Okay</h3>;
  }
}

Title.contextTypes = {
  data: PropTypes.object
};

export default Title;

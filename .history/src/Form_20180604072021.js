import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <input type="text" />
      </form>
    );
  }
}

export default Form;

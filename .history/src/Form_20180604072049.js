import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.input);
  }
  render() {
    return (
      <form>
        <input ref={input => (this.input = input)} type="text" />
      </form>
    );
  }
}

export default Form;

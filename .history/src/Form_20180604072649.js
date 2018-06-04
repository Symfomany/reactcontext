import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log(this.input);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //console.log(this.input);
    this.input.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const length = this.input.value.length;
    if (length > 10) {
      this.input.value = "";
    } else {
      this.input.classList.remove("error");
      this.input.classList.add("error");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={input => (this.input = input)} type="text" />
      </form>
    );
  }
}

export default Form;

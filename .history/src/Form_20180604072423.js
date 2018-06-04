import React, { Component } from "react";

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

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log(this.input);
  }

  componentDidMount() {
    /console.log(this.input);
    this.input.focus();
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

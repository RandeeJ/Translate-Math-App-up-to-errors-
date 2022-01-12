import React, { Component } from "react";

class Number extends Component {
    constructor(props) {
      super(props);

  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleAddition(event) {
    //     alert("ok")
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form 
        // onSubmit={this.handleAddition}
        >

          <label>
            <input type="number"
            className="valueOne"
            onChange={this.handleChange} />
            <input type="number"
            className="valueTwo"
            onChange={this.handleChange} />

          </label>
          <input type="submit" value="Addition" />
          {/* <input type="submit" value="Subtraction" /> */}
        </form>
      );
    }
  }

export default Number;
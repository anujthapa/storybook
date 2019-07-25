import React, { Component } from "react";
import Textinput from "../common/Textinput";
import Button from "../common/Button";

class Index extends Component {
  state = [
    {
      fname: "",
      lname: "",
      age: "",
      phone: "",
      email: "",
      details: ""
    },
  ]

  onChangeHandaler = e => {
      this.setState({[e.target.name]:e.target.value})
  };
  render() {
    return (
      <div>
        <form onSubmit>
          <Textinput
            type="text"
            value={this.state.fname}
            name="fname"
            palceholder="please enter your first name"
            onchange={this.onChnageHandaler}
          />
          <Textinput
            type="text"
            value={this.state.lname}
            name="lname"
            palceholder="please enter your last name"
            onchange={this.onChnageHandaler}
          />
          <Textinput
            type="number"
            value={this.state.age}
            name="age"
            name="age"
            palceholder="please enter your age"
            onchange={this.onChnageHandaler}
          />
          <Textinput
            type="number"
            value={this.state.phone}
            name="phone"
            palceholder="please enter your phone number"
            onchange={this.onChnageHandaler}
          />
          <Textinput
            type="email"
            value={this.state.email}
            name="email"
            palceholder="please enter your email"
            onchange={this.onChnageHandaler}
          />
          <Button content="Save" />
        </form>
      </div>
    );
  }
}

export default Index;

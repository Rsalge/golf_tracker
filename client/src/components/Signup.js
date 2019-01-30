import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.login = this.login.bind(this);
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  handleEmailChange(event) {
    const email = event.target.value;
    this.setState({ email: email });
  }

  login() {
    console.log("Login button pressed");
    axios
      .post("/api/users/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => console.log("Account created"))
      .catch(e =>
        console.log("Something wnt wrong with account createion", e.message)
      );
  }

  render() {
    return (
      <div>
        <p>Email</p>
        <input placeholder="Email" onChange={this.handleEmailChange} />
        <p>Password</p>
        <input placeholder="Password" onChange={this.handlePasswordChange} />
        <button onClick={this.login}>Signup</button>
      </div>
    );
  }
}

export default Signup;

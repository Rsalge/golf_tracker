import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
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
    this.setState({ email });
  }

  login() {
    console.log("Login button pressed", this.state);
    axios
      .post("/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => console.log("Login success response", res))
      .catch(e =>
        console.log("Something went wrong with account creation", e.message)
      );
  }

  render() {
    return (
      <div>
        <input placeholder="Email" onChange={this.handleEmailChange} />
        <input
          placeholder="Password"
          type="password"
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;

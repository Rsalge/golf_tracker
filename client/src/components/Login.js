import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  handleUsernameChange(event) {
    const username = event.target.value;
    this.setState({ username });
  }

  render() {
    return (
      <div>
        <input placeholder="Username" onChange={this.handleUsernameChange} />
        <input placeholder="Password" onChange={this.handlePasswordChange} />
        <button onSubmit={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;

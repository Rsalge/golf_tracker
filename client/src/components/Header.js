import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  state = { user: null };
  componentDidMount() {
    console.log("TESTING");
    axios
      .get("/api/users/current", { proxy: { host: "127.0.0.1", port: 5000 } })
      .then(res => {
        console.log("Home on component DidMount", res);
      });
  }
  render() {
    return (
      <div>
        {this.state.user ? (
          <div>Welcome {this.state.user}!</div>
        ) : (
          <div>PLease Login or Signup.</div>
        )}
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Tasks from "../components/Tasks";
import Login from "../components/Login";
import Link from "react-router-dom/Link";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 
    };
  }

  render() {
    return (
      <div>
        <h1>Here is the home page</h1>
        <Login />
        <Link to="/signup">Sign Up</Link>
        <Tasks />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Tasks from "../components/Tasks";

class Home extends Component {
  state = {
    tasks: [{ message: "Task Number 1" }, { message: "Task Number 2" }]
  };

  render() {
    return (
      <div>
        <h1>Here is the home page</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Home;

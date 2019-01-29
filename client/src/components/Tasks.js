import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  state = {
    index: 0
  };
  handleNewTask() {
    var index = this.state.index + 1;
    this.setState(index);
    return index;
  }
  render() {
    console.log("Here are the tasks: ", this.props.tasks);
    let testTask = { task: "Task 4", index: 1 };
    return (
      <div>
        {this.props.tasks &&
          this.props.tasks.map((task, i) => {
            console.log(`This is task ${i}`);
            return <Task key={JSON.stringify(task)} task={task} index={i} />;
          })}
      </div>
    );
  }
}

export default Tasks;

import React from "react";

const Task = props => {
  console.log("Should print a task", props);
  return <div>{`${props.index}: ${props.task.message}`} Testing</div>;
};

export default Task;

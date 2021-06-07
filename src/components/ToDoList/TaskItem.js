/*
This file tells how to display each item in the list.
Do the name and description properties come from App?
*/

import React from "react";

import "./TaskItem.css";

function TaskItem(props) {
  return (
    <div className="todolist-task">
      <h2 className="todolist-task__heading">{props.name}</h2>
      <div className="todolist-task__description">{props.description}</div>
    </div>
  );
}

export default TaskItem;

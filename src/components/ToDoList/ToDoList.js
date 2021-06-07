/*
This will display the list of task items.
items is a prop from App.js. Using the map function on it to link each property in Task Item. How does this work?
*/

import React from 'react';

import TaskItem from './TaskItem';
import './ToDoList.css';

function ToDoList(props){

    return (
        <div className="todo-list-container">
            <ul>
                {props.items.map((taskItem) => (
                    <TaskItem 
                        key = {taskItem.id}
                        name = {taskItem.name}
                        description = {taskItem.description}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
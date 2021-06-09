/*
This will display the list of task items.
items is a prop from App.js. Using the map function on it to link each property in Task Item. How does this work?
Extracting taskItem array data through items prop (first referenced in App.js)
*/

import React from 'react';

import TaskItem from './TaskItem';
import './ToDoList.css';

function ToDoList(props){

    // Map will take each element in the taskItemsArray and create a TaskItem element for each one with the listed props
    return (
        <div className="todo-list-container">
            <ul>
                {props.items.map((taskItem) => (
                    <li>
                        <TaskItem 
                            key = {taskItem.id}
                            name = {taskItem.name}
                            description = {taskItem.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
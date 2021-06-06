import React from 'react';

import TaskItem from './TaskItem';
import './ToDoList.css';

function ToDoList(){
    return (
        <div className="todo-list-container">
            <TaskItem />
        </div>
    );
}

export default ToDoList;
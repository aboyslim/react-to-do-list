import React from 'react';

import './TaskItem.css';

function TaskItem(){
    return (
        <div className="todolist-container">
            <div className="todolist-task">
                <h2 className="todolist-task__heading">Task Name</h2>
                <div className="todolist-task__description">Task Description</div>
            </div>
        </div>
    );
}

export default TaskItem;
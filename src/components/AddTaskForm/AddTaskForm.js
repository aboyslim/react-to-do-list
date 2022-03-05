/*
Form is collecting user input for task name and description.
The values of each input field are initially set to hold placeholder text using deconstruction on usestate. The value property of the inputs are pointing to
the variables created in deconstruction.
There are functions for each field variable that will use the set functions to update the data. These are pointed to in each input field's onChange property.
The submit button will initiate the submitHandler function to:
    1. deny the page from refreshing
    2. Assign the inputted values of each field into their specified properties
    3. Call the onSaveTaskItems prop in App.js
    4. Reset the fields to display placeholder data
*/

import React, {useState} from 'react';

function AddTaskForm(props){

    // Create variables for values inputted in the form
    // Deconstruct useState into an array for each varible/field
    const [taskNameInput, setTaskName] = useState('Enter name of task...');
    const [taskDescriptionInput, setTaskDescription] = useState('Enter a description...');

    // Event handler function to set Task Name input into variable
    const taskNameChangeHandler = (event) => {
        setTaskName(event.target.value);
    };

    // Event handler function to set Task Description input into variable
    const taskDescriptionChangeHandler = (event) => {
        setTaskDescription(event.target.value);
    };

    // Event handler function to call when form is sbumitted
    const submitHandler = (event) => {
        // Prevent submit event refreshing the page
        event.preventDefault();

        const taskItems = {
            name: taskNameInput,
            description: taskDescriptionInput
        };

        props.onSaveTaskItems(taskItems); // Two way binding: calling a function from parent component (App.js) and passing data as parameter

        setTaskName('Enter name of task...');
        setTaskDescription('Enter a description...');
    };

    return (
        <div className="addtask-container">
            <form onSubmit={submitHandler}>
                <label>Task Name</label>
                <input type="text" value={taskNameInput} onChange={taskNameChangeHandler} />

                <label>Task Description</label>
                <input type="textarea" value={taskDescriptionInput} onChange={taskDescriptionChangeHandler} />

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTaskForm;
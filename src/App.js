import React, {useState} from 'react';

import ToDoList from './components/ToDoList/ToDoList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

// Have to add dummy data because I still don't know how to make it work without any data at all...
const Dummyitems = [
  {
    id: 'task1',
    name: 'Complete Phase 1',
    description: "Work on creating your own simple to-do list project to understand the fundamentals of React",
  },
  {
    id: 'task2',
    name: 'Complete Phase 2',
    description: "Add features",
  }
];

function App() {

  // Declaring taskItems and setting its state to dummy information... for now
  const [taskItemsArray, setTaskItems] = useState(Dummyitems);

  // This function... I still don't know how it works...
  // But adds new data to the list while perserving older data
  // Updating state depending on the previous state, pass a function in set function to automatically receive past state snapshot; clean way of doing it
  const addTaskItem = taskItem =>{
    setTaskItems(prevTaskItems => {
      return [...prevTaskItems, taskItem];
    });
  };

  // Pointed to in AddTaskForm element
  // Adds an id to current list using spread operator
  // Then calls addTaskItem function
  // Ah ok, so I understand that this is for a single instance
  // In a new object, id will be set with a random number value and also include the inputted name and description
  const onSaveTaskItemsHandler = (enteredTaskInput) => {
    const taskItemData = {
        ...enteredTaskInput,
        id: Math.random().toString()
    };

    addTaskItem(taskItemData);
  };

  // Items prop points to the dynamic array taskItems
  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoList items={taskItemsArray} /> 
      <AddTaskForm onSaveTaskItems={onSaveTaskItemsHandler} />
    </div>
  );
}

export default App;

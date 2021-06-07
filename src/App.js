import React, {useState} from 'react';

import ToDoList from './components/ToDoList/ToDoList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

// Have to add dummy data because I still don't know how to make it work without any data at all...
const Dummyitems = [
  {
    id: 'task1',
    name: 'Complete Phase 1',
    description: "Work on creating your own simple to-do list project to understand the fundamentals of React",
  }
];

function App() {

  // Declaring taskItems and setting its state to dummy information... for now
  const [taskItems, setTaskItems] = useState(Dummyitems);

  // This function... I still don't know how it works...
  // But adds new data to the list while perserving older data
  const addTaskItem = taskItem =>{
    setTaskItems(prevtaskItems => {
      return [taskItem, ...prevtaskItems];
    });
  };

  // Pointed to in AddTaskForm element
  // Adds an id to current list using spread operator
  // Then calls addTaskItem function
  const onSaveTaskItemsHandler = (enteredTaskInput) => {
    const taskItemData = {
        ...enteredTaskInput,
        id: Math.random().toString()
    };

    addTaskItem(taskItemData);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoList items={taskItems} />
      <AddTaskForm onSaveTaskItems={onSaveTaskItemsHandler} />
    </div>
  );
}

export default App;

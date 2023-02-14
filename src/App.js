import React, {useState} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDoButton from './components/AddToDoForm';
import { getToDoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './service/Service';



function App() {
  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('item') || []);

  return (
    <div>
      <AddToDoButton/>
      <ToDoList toDoItems={todoItems}/>
    </div>
  );
}

export default App;

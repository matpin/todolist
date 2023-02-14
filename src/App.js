import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import Item from './components./Item';
import AddToDoButton from './components/AddToDoForm';

function App() {
  return (
    <div>
      <AddToDoButton/>
      <ToDoList toDoItems={toDoItems}/>
    </div>
  );
}

export default App;

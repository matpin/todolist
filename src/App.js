import React, {useState, useCallback} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import { getToDoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './service/Service';



function App() {
  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('item') || []);

  const handleAddToDo = useCallback(item => {
    console.log("addToDo - App2")
    
    const items = [
        {
        id: item.id,
        content: item.content,
        complete: item.complete
        },
        ...todoItems,
    ]
    setTodoItems(items);
    saveTodoItemsToLocalStorage('item', items)
    }, [todoItems]);


  const handleOnDelete = useCallback(id => {
    const newTodoItems = todoItems.filter(item => item.id !== id)
    setTodoItems(newTodoItems)
    saveTodoItemsToLocalStorage('item', newTodoItems)
  }, [todoItems]);

  return (
    <div>
      <AddToDoForm onAddToDo={handleAddToDo}/>
      <ToDoList toDoItems={todoItems}/>
    </div>
  );
}

export default App;
